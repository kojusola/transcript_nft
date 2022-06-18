/** @jsxImportSource @compiled/react */
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header";
import Form from "../components/form";
import { useAppContext } from "../context/state";
import { Circles } from "react-loader-spinner";

export default function Mint() {
  const { loading } = useAppContext();
  return (
    <div
      css={{
        width: "100%",
        backgroundColor: "#181350",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "100%",
          maxWidth: "1512px",
          padding: "0px 36px",
          "@media (max-width: 991px)": {
            padding: "0px 30px",
          },
        }}
      >
        <Header />
        <Form />
      </div>
      {loading && (
        <div
          css={{
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            opacity: "0.5",
            position: "absolute",
            top: "0",
            display: loading ? "flex" : "none",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Circles color="#917EFF" height={80} width={80} />
        </div>
      )}
    </div>
  );
}
