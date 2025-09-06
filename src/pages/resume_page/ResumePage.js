import { Container } from "react-bootstrap";
import Particle from "../../Particle";
import React from "react";
import { motion } from "framer-motion"; 
import { useState, useMemo } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'

// Fix for your current pdfjs-dist version
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

// Alternative: Copy worker to public folder and use:
// pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'

function Resume() {
    const [pdfSource, setPdfSource] = useState('/Saumya-Modi-CV-Full-Stack-WebDev.pdf')
  const [error, setError] = useState(null)
  const [numPages, setNumPages] = useState(null)

  
  // Memoize the options object to prevent unnecessary reloads
  const options = useMemo(() => ({
    cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
    cMapPacked: true,
  }), [])

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages)
    setError(null)
  }

  function onDocumentLoadError(error) {
    setError('Failed to load PDF: ' + error.message)
    console.error('PDF load error:', error)
  }
  return (
    <div>
      <section className="home-section">
        <Container fluid id="home">
          <Particle />
          <Container className="home-content">
            {/* Adding motion effect to the title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }} // Initial state (hidden and scaled down)
              animate={{ opacity: 1, scale: 1 }} // Final state (visible and normal size)
              transition={{ duration: 0.5 }} // Duration of the animation
              className="d-flex justify-content-center"
              style={{ backgroundColor: "#fbd9ad" }}
            >
              <h1 style={{ color: "rgb(134 61 176)" }}>RESUME</h1>
            </motion.div>

            {/* Resume Image with motion effect */}
            <motion.div
              initial={{ opacity: 0, y: 50 }} // Starting with opacity 0 and slight offset (y-axis)
              whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and default position
              viewport={{ once: true }} // Trigger animation only once when in view
              transition={{ duration: 0.5 }} // Duration of the animation
              className="resume d-flex justify-content-center mt-4"
            >
            <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
      
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        {pdfSource && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <Document
              file={pdfSource}
              options={options}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              loading={
                <div className="flex justify-center items-center h-96">
                  <div className="text-gray-600">Loading PDF...</div>
                </div>
              }
              error={
                <div className="flex justify-center items-center h-96">
                  <div className="text-red-600">Failed to load PDF!</div>
                </div>
              }
            >
              <div className="flex justify-center">
                <Page
                  pageNumber={1}
                  renderTextLayer={true}
                  renderAnnotationLayer={true}
                  scale={1.2}
                  loading={
                    <div className="flex justify-center items-center h-96">
                      <div className="text-gray-600">Loading page...</div>
                    </div>
                  }
                />
              </div>
            </Document>
            
            {numPages && (
              <div className="text-center mt-4 text-gray-600">
                Page 1 of {numPages}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
            </motion.div>
          </Container>
        </Container>
      </section>
    </div>
  );
}

export default Resume;