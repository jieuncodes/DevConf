import Seo from "../components/Seo";
import AddConf from "../components/addConf";
import Calendar from "../components/calendar";
import { RecoilRoot } from "recoil";
import Header from "../components/header";
import Cards from "../components/cards";


const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <main>
        <RecoilRoot>
          <Header />
          <div className=" pt-20 pl-8 pr-8">
            <Cards />
            <AddConf />
            <Calendar />          
          </div>
          
        </RecoilRoot>
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  return {
    props: {},
  };
}

export default Home;
