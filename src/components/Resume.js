import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";

import resumye from "../Images/resumye.png";

// import { Page, pdfjs } from "react-pdf";
// import { Document } from "react-pdf/dist/entry.webpack";
//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const pdfView = {
  display: "flex",
  justifyContent: "center",
  width: "100vw",
  overflowX: "scroll",
  direction: "rtl"
};

const scrollResponsive = {
  overflowX: "scroll",
  direction: "ltr"
};

const resume = {
  backgroundImage: `url( ${resumye} )`,
  height: "1195px",
  backgroundSize: "cover"
};

class Resume extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    // const { pageNumber, numPages } = this.state;

    return (
      <div>
        <section id="resume">
          <div
            className="pdf-view"
            style={{
              position: "relative",
              left: "50%",
              top: "38em",
              transform: "translate(-50%, -50%)",
              zIndex: 0
            }}
          >
            <div className="pdfView" style={pdfView}>
              <div style={scrollResponsive}>
                <Document
                  style={scrollResponsive}
                  //file="myPDF.pdf"
                  file="/sushovan_adhikari_resume.pdf"
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={1} width={900} />
                </Document>
              </div>
            </div>
          </div>
        </section>
        <section id="smallResume" style={resume}></section>
      </div>
    );
  }
}

export default Resume;
