import React from 'react'
import Head from "next/head";

export default function MetaHead(props) {
  return (
    <div>
      <Head title={props.title}>
        <title>{props.title}</title>
        <meta name="description" content="Guest House" />
        <link rel="icon" href="" />
      </Head>
    </div>
  );
}
