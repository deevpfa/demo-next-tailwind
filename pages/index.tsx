import { NextPage } from "next";
import { Layout } from '../containers/layouts';
import Home from "../screens/home/Home";
import Footer from "../containers/footer/Footer";


const HomePage: NextPage = () => {
  return (
    <>
      <Home />
      <Footer/>
    </>
  )
}

export default HomePage;
