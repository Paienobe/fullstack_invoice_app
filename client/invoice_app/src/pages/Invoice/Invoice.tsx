import { useEffect, useState } from "react";
import BackButton from "../../components/InvoicePageComponents/BackButton/BackButton";
import StatusBar from "../../components/InvoicePageComponents/StatusBar/StatusBar";
import PageMainArea from "../../components/Layout/PageContainer/PageMainArea";
import { Invoice as InvoiceType } from "../../services/api_response_types/invoice";
import { ImSpinner9 } from "react-icons/im";
import { deleteInvoice, getSingleInvoice } from "../../services/api/invoice";
import { useNavigate, useParams } from "react-router-dom";
import InvoiceBody from "../../components/InvoicePageComponents/InvoiceBody/InvoiceBody";
import DeleteModal from "../../components/InvoicePageComponents/DeleteModal/DeleteModal";
import { useGlobalContext } from "../../context/Global/GlobalContext";

const Invoice = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { invoices, setInvoices } = useGlobalContext();
  const [invoice, setInvoice] = useState<InvoiceType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  useEffect(() => {
    setIsLoading(true);
    getSingleInvoice(id!)
      .then((result) => {
        setInvoice(result);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return (
    <section>
      <PageMainArea>
        {invoice && (
          <>
            <BackButton />
            <StatusBar status={invoice.status} openModal={toggleModal} />
            <InvoiceBody invoice={invoice} />
            {showDeleteModal && (
              <DeleteModal
                id={id!}
                closeModal={toggleModal}
                deleteCurrentInvoice={deleteCurrentInvoice}
              />
            )}
          </>
        )}

        {isLoading && (
          <div className="text-purple h-[calc(100vh-6rem)] flex items-center justify-center animate-spin">
            <ImSpinner9 size={40} />
          </div>
        )}
      </PageMainArea>
    </section>
  );
};

export default Invoice;
