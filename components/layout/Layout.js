import React from "react";
import { Fragment } from "react";
import MetaHead from "./MetaHead";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout(props) {
  return (
    <Fragment>
      <MetaHead title={props.title} />
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
}
