import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      className="scroll-smooth"
      style={{ scrollBehavior: "smooth" }}
    >
      <Head>
        <link
          href={
            "https://fonts.googleapis.com/css2?family=Poppins&display=optional"
          }
          type="text/css"
          rel="stylesheet"
        />

        <link
          href={
            "https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap"
          }
          type="text/css"
          rel="stylesheet"
        />

        <link
          href={"https://fonts.googleapis.com/css2?family=Inter&display=swap"}
          type="text/css"
          rel="stylesheet"
        />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
