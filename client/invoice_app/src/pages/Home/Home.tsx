import InvoiceBarsContainer from "../../components/HomePageComponents/InvoiceBarsContainer/InvoiceBarsContainer";
import ListHeader from "../../components/HomePageComponents/ListHeader/ListHeader";
import PageMainArea from "../../components/Layout/PageContainer/PageMainArea";

const Home = () => {
  return (
    <section>
      <PageMainArea>
        <ListHeader />
        <InvoiceBarsContainer />
      </PageMainArea>
    </section>
  );
};

export default Home;
