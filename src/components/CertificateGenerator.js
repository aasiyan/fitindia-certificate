import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../components/CertificateGenerator.css";
import certificateImg from "./assets/certificate.png";

const CertificateGenerator = () => {
  const [details, setDetails] = useState({
    name: "",
    photo: "",
    field: "",
    certificateCode: "",
    dateOfIssue: "",
  });

  const certificateRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setDetails({ ...details, photo: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const formatDate = (date) => {
    const [year, month, day] = date.split("-");
    return `${day}-${month}-${year}`;
  };

  const validateForm = () => {
    const { name, photo, field, certificateCode, dateOfIssue } = details;
    return name && photo && field && certificateCode && dateOfIssue;
  };

  const handleDownloadPDF = () => {
    if (!validateForm()) {
      alert("Please fill out all fields before downloading the certificate.");
      return;
    }

    const input = certificateRef.current;
    html2canvas(input, { scale: 1.5 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [595, 842],
        // margin: "0px",
      });
      pdf.addImage(imgData, "PNG", 0, 0, 595, 842);
      pdf.save(`${details.name}_certificate.pdf`);
    });
  };

  const handlePrint = () => {
    if (!validateForm()) {
      alert("Please fill out all fields before printing the certificate.");
      return;
    }

    const printContent = certificateRef.current;
    const WinPrint = window.open("", "", "width=900,height=650");
    WinPrint.document.write(printContent.innerHTML);
    WinPrint.document.close();
    WinPrint.focus();
    WinPrint.print();
    WinPrint.close();
  };

  return (
    <div className="container">
      <form className="form">
        <label className="label">
          Name:
          <input
            className="input"
            type="text"
            name="name"
            value={details.name}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Photo:
          <input
            className="input"
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
          />
        </label>
        <label className="label">
          Field:
          <input
            className="input"
            type="text"
            name="field"
            value={details.field}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Certificate Code:
          <input
            className="input"
            type="text"
            name="certificateCode"
            value={details.certificateCode}
            onChange={handleChange}
          />
        </label>
        <label className="label">
          Date of Issue:
          <input
            className="input"
            type="date"
            name="dateOfIssue"
            value={details.dateOfIssue}
            onChange={handleChange}
          />
        </label>
      </form>
      <div ref={certificateRef} className="certificate">
        <img
          src={certificateImg} // Replace with your certificate background image path
          alt="Certificate Background"
          className="certificate-image"
        />
        <div className="certificate-content">
          <div>
            {details.photo && (
              <img
                src={details.photo}
                alt="Profile"
                className="certificate-photo"
              />
            )}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-name">{details.name}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-field">{details.field}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-code">{details.certificateCode}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-date">
            {details.dateOfIssue && formatDate(details.dateOfIssue)}
          </div>
        </div>
      </div>
      <button className="button" onClick={handleDownloadPDF}>
        Download PDF
      </button>
      <button className="button" onClick={handlePrint}>
        Print
      </button>
    </div>
  );
};

export default CertificateGenerator;
