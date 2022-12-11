import Seo from "../components/Seo";
import AddConf from "../components/addConf";
import { RecoilRoot } from "recoil";

const Home = () => {
  return (
    <div>
      <Seo title="Home" />
      <main>
        <RecoilRoot>
          <AddConf />
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
