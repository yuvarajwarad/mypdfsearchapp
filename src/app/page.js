import React from "react";
import dynamic from "next/dynamic";

const DynamicPDFViewer = dynamic(() => import("./PDFViewer"), {
  ssr: false,
});

function Home() {
  return (
    <div>
      <DynamicPDFViewer />
    </div>
  );
}

export default Home;
