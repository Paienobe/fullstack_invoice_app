import BackButton from "../../components/InvoicePageComponents/BackButton/BackButton";
import StatusBar from "../../components/InvoicePageComponents/StatusBar/StatusBar";
import PageMainArea from "../../components/Layout/PageContainer/PageMainArea";
import { ImSpinner9 } from "react-icons/im";
import { deleteInvoice } from "../../services/api/invoice";
import { useNavigate, useParams } from "react-router-dom";
import InvoiceBody from "../../components/InvoicePageComponents/InvoiceBody/InvoiceBody";
import DeleteModal from "../../components/InvoicePageComponents/DeleteModal/DeleteModal";
import { useGlobalContext } from "../../context/Global/GlobalContext";
import {
  InvoicePageProvider,
  useInvoicePageContext,
} from "../../context/Invoice/InvoicePageContext";
import InvoiceOptions from "../../components/InvoicePageComponents/InvoiceOptions/InvoiceOptions";
import { useScreenFreeze } from "../../hooks/useScreenFreeze";

const Invoice = () => {
  return (
    <section>
      <InvoicePageProvider>
        <InvoicePageMain />
      </InvoicePageProvider>
    </section>
  );
};

export default Invoice;

const InvoicePageMain = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { invoices, setInvoices, singleInvoice } = useGlobalContext();
  const { showDeleteModal, setShowDeleteModal, isLoading } =
    useInvoicePageContext();

  const deleteCurrentInvoice = () => {
    if (id) {
      deleteInvoice(id)
        .then(() => {
          if (invoices) {
            const updatedInvoices = invoices.results.filter((invoice) => {
              return invoice.id !== id;
            });
            setInvoices({ ...invoices, results: updatedInvoices });
          }
        })
        .finally(() => navigate("/"));
    }
  };

  const toggleModal = () => setShowDeleteModal(!showDeleteModal);
  useScreenFreeze(showDeleteModal);
  return (
    <PageMainArea>
      {singleInvoice && (
        <>
          <BackButton />
          <StatusBar invoice={singleInvoice} openModal={toggleModal} />
          <InvoiceBody invoice={singleInvoice} />
          {showDeleteModal && (
            <DeleteModal
              id={id!}
              closeModal={toggleModal}
              deleteCurrentInvoice={deleteCurrentInvoice}
            />
          )}
          <div className="hidden md:block fixed bottom-0 bg-white w-screen left-0 right-0 p-4">
            <InvoiceOptions invoice={singleInvoice} openModal={toggleModal} />
          </div>
        </>
      )}

      {isLoading && (
        <div className="text-purple h-[calc(100vh-6rem)] flex items-center justify-center animate-spin">
          <ImSpinner9 size={40} />
        </div>
      )}
    </PageMainArea>
  );
};
