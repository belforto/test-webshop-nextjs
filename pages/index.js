import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import WebshopItems from "../components/WebshopItems";

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch("https://fakestoreapi.com/products");
  const json = await res.json();
  console.log("startss", json);

  // Pass data to the page via props
  return {
    props: {
      data: json
    }
  };
}

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>NextJS Webshop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Server side rendering
      <Header />

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <WebshopItems data={data} />
        </div>
      </div>
    </div>
  );
}
