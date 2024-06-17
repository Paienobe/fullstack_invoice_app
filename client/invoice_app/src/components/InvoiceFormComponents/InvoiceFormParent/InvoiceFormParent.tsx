import InvoiceForm from "../InvoiceForm/InvoiceForm";

const InvoiceFormParent = () => {
  return (
    <section className="w-screen h-screen bg-black bg-opacity-25 backdrop-blur-sm fixed z-10">
      <InvoiceForm />
    </section>
  );
};

export default InvoiceFormParent;
