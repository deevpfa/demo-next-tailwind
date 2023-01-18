import { FC, PropsWithChildren } from "react";

import Head  from "next/head";

import Header from "../header/Header";
import Footer from "../footer/Footer";



export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
        <Header/>

        <main>
            { children }
        </main>

        <Footer/>
    </>
  )
}
