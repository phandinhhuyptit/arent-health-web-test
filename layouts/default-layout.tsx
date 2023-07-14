import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

// Components
import { Header, Footer } from "@/shared";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}
const DefaultLayout: React.FC<Props> = ({ children, description, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={description} />
      </Head>
      <Header />
      <main>{children}</main>

      <Footer />
    </>
  );
};

export default DefaultLayout;
