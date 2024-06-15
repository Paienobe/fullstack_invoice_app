import { useEffect, useState } from "react";
import BackButton from "../../components/InvoicePageComponents/BackButton/BackButton";
import StatusBar from "../../components/InvoicePageComponents/StatusBar/StatusBar";
import PageMainArea from "../../components/Layout/PageContainer/PageMainArea";
import { Invoice as InvoiceType } from "../../services/api_response_types/invoice";
import { ImSpinner9 } from "react-icons/im";
import { getSingleInvoice } from "../../services/api/invoice";
import { useParams } from "react-router-dom";

const Invoice = () => {
  const { id } = useParams();
  const [invoice, setInvoice] = useState<InvoiceType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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
            <StatusBar status={invoice.status} />
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
