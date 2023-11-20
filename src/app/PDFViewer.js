// PDFViewer.js
"use client";
import React, { useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

function PDFViewer({ webViewerInstance }) {
  useEffect(() => {
    if (!webViewerInstance) {
      WebViewer(
        {
          path: "/lib",
          initialDoc: "/files/Report_final.pdf",
        },
        document.getElementById("viewer")
      ).then((instance) => {
        webViewerInstance = instance;
        const viewer = instance.docViewer;
        const search = viewer.getSearchMode();

        search.onResult = function (results) {
          console.log("Search results:", results);
        };

        search.onSearchBegin = function () {
          console.log("Search is beginning...");
        };
      });
    }
  }, []);

  return (
    <div>
      <div id="viewer" style={{ height: "1200px" }}></div>
    </div>
  );
}

export default PDFViewer;
