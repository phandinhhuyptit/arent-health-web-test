import "@/styles/global.css";
import type { AppProps } from "next/app";
import NextProgress from "next-progress";
import { Layout, Scroller } from "@/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextProgress
        delay={100}
        height="3px"
        color="#ECC851"
        options={{ showSpinner: false }}
      />
      <Scroller />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}