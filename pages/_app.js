import Head from "next/head";
import MainLayout from "../src/components/layout/main-layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
            <title>KuZinavanje</title>
            <meta name="description" content="Kuzinavanje - recepti" />
            <link rel="icon" href="/logoZ.png" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Courgette&family=Source+Sans+3:wght@400;700&display=swap" rel="stylesheet"></link>
        </Head>
    <MainLayout>
    
        <Component {...pageProps} />
    </MainLayout>
    </>
  );
}

export default MyApp;