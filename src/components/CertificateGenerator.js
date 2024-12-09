// import React, { useState, useRef } from "react";
// import html2canvas from "html2canvas";
// import jsPDF from "jspdf";
// import "../components/CertificateGenerator.css";
// import certificateImg from "./assets/certificate.png";

// const CertificateGenerator = () => {
//   const [details, setDetails] = useState({
//     name: "",
//     photo: "",
//     field: "",
//     certificateCode: "",
//     dateOfIssue: "",
//   });
//   const certificateRef = useRef();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails({ ...details, [name]: value });
//   };

//   const handlePhotoUpload = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setDetails({ ...details, photo: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   const formatDate = (date) => {
//     const [year, month, day] = date.split("-");
//     return `${day}-${month}-${year}`;
//   };

//   const validateForm = () => {
//     const { name, photo, field, certificateCode } = details;
//     return name && photo && field && certificateCode;
//   };

//   const handleDownloadPDF = () => {
//     if (!validateForm()) {
//       alert("Please fill out all fields before downloading the certificate.");
//       return;
//     }

//     const input = certificateRef.current;
//     html2canvas(input, { scale: 1.5 }).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF({
//         orientation: "portrait",
//         unit: "px",
//         format: [595, 842],
//         // margin: "0px",
//       });
//       pdf.addImage(imgData, "PNG", 0, 0, 595, 842);
//       pdf.save(`${details.name}_certificate.pdf`);
//     });
//   };

//   const handlePrint = () => {
//     if (!validateForm()) {
//       alert("Please fill out all fields before printing the certificate.");
//       return;
//     }

//     const printContent = certificateRef.current;
//     const WinPrint = window.open("", "", "width=900,height=650");
//     WinPrint.document.write(printContent.innerHTML);
//     WinPrint.document.close();
//     WinPrint.focus();
//     WinPrint.print();
//     WinPrint.close();
//   };

//   return (
//     <div className="container">
//       <h1>Aasiyan Book of World Records</h1>
//       <form className="form">
//         <label className="label">
//           Name:
//           <input
//             className="input"
//             type="text"
//             name="name"
//             value={details.name}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="label">
//           Photo:
//           <input
//             className="input"
//             type="file"
//             accept="image/*"
//             onChange={handlePhotoUpload}
//           />
//         </label>
//         <label className="label">
//           Aadhar No
//           <input
//             className="input"
//             type="text"
//             name="field"
//             value={details.field}
//             onChange={handleChange}
//           />
//         </label>
//         <label className="label">
//           Certificate Code:
//           <input
//             className="input"
//             type="text"
//             name="certificateCode"
//             value={details.certificateCode}
//             onChange={handleChange}
//           />
//         </label>
//         {/* <label className="label">
//           Date of Issue:
//           <input
//             className="input"
//             type="date"
//             name="dateOfIssue"
//             value={details.dateOfIssue}
//             onChange={handleChange}
//           />
//         </label> */}
//       </form>
//       <div ref={certificateRef} className="certificate">
//         <img
//           src={certificateImg} // Replace with your certificate background image path
//           alt="Certificate Background"
//           className="certificate-image"
//         />
//         <div className="certificate-content">
//           <div>
//             {details.photo && (
//               <img
//                 src={details.photo}
//                 alt="Profile"
//                 className="certificate-photo"
//               />
//             )}
//           </div>
//         </div>
//         <div className="certificate-content">
//           <div className="certificate-text-name">M/S. {details.name}</div>
//         </div>
//         <div className="certificate-content">
//           <div className="certificate-text-field">{details.field}</div>
//         </div>
//         <div className="certificate-content">
//           <div className="certificate-text-code">
//             AABWR{details.certificateCode}
//           </div>
//         </div>
//         <div className="certificate-content">
//           <div className="certificate-text-date">
//             {details.dateOfIssue && formatDate(details.dateOfIssue)}
//           </div>
//         </div>
//       </div>
//       <button className="button" onClick={handleDownloadPDF}>
//         Download PDF
//       </button>
//       {/* <button className="button" onClick={handlePrint}>
//         Print
//       </button> */}
//       <div>
//         {/* <button onClick={() => (window.location.href = "/")}>Logout</button> */}
//       </div>
//     </div>
//   );
// };

// export default CertificateGenerator;

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import React, { useRef, useState } from "react";
import "../components/CertificateGenerator.css";
import certificateImg from "./assets/certificate-fi.png";

const CertificateGenerator = () => {
  const [details, setDetails] = useState({
    name: "",
    sodo: "",
    parentsname: "",
    photo: "",
    field: "",
    dateOfIssue: "",
    cource: "",
    institution: "",
    grade: "",
    certificateNo: "",
    dateOfexam: "",
  });
  const certificateRef = useRef();

  // NUMBER TO WORD CONVERTION STATES
  const [numbers, setNumbers] = useState({ first: "", second: "" });
  const [texts, setTexts] = useState({ first: "", second: "", total: "" });
  const [total, setTotal] = useState("");

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
    const {
      name,
      photo,
      cource,
      regno,
      dateOfIssue,
      institution,
      admission,
      grade,
      certificateNo,
      dateOfexam,
    } = details;
    return (
      name &&
      photo &&
      cource &&
      regno &&
      institution &&
      admission &&
      dateOfIssue &&
      grade &&
      certificateNo &&
      dateOfexam
    );
  };
  const validateFormMarks = () => {
    const { first, second } = numbers;
    return first && second;
  };

  const handleDownloadPDF = () => {
    if (!validateForm()) {
      alert("Please fill out all fields before downloading the certificate.");
      return;
    }
    if (!validateFormMarks()) {
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
      });
      pdf.addImage(imgData, "PNG", 0, 0, 595, 842);
      pdf.save(`${details.name}_certificate.pdf`);
    });
  };

  // Helper function to convert number to words
  const convertToWords = (num) => {
    const ones = [
      "",
      "One",
      "Two",
      "Three",
      "Four",
      "Five",
      "Six",
      "Seven",
      "Eight",
      "Nine",
      "Ten",
      "Eleven",
      "Twelve",
      "Thirteen",
      "Fourteen",
      "Fifteen",
      "Sixteen",
      "Seventeen",
      "Eighteen",
      "Nineteen",
    ];
    const tens = [
      "",
      "",
      "Twenty",
      "Thirty",
      "Forty",
      "Fifty",
      "Sixty",
      "Seventy",
      "Eighty",
      "Ninety",
    ];
    const scales = ["", "Thousand", "Million", "Billion"];

    if (num === 0) return "zero";

    const numStr = num.toString();
    if (numStr.length > 12) return "Number too large";

    const numParts = [];
    while (num > 0) {
      numParts.push(num % 1000);
      num = Math.floor(num / 1000);
    }

    let words = [];
    for (let i = 0; i < numParts.length; i++) {
      let partWords = [];
      const n = numParts[i];

      if (n >= 100) {
        partWords.push(ones[Math.floor(n / 100)]);
        partWords.push("Hundred");
      }

      const remainder = n % 100;
      if (remainder > 0 && remainder < 20) {
        partWords.push(ones[remainder]);
      } else if (remainder >= 20) {
        partWords.push(tens[Math.floor(remainder / 10)]);
        if (remainder % 10 > 0) {
          partWords.push(ones[remainder % 10]);
        }
      }

      if (partWords.length > 0) {
        words = [...partWords, scales[i], ...words];
      }
    }

    return words.join(" ").trim();
  };
  const handleNtoW = (field, value) => {
    if (!isNaN(value)) {
      setNumbers((prev) => ({ ...prev, [field]: value }));
      setTexts((prev) => ({
        ...prev,
        [field]: value ? convertToWords(parseInt(value)) : "",
      }));

      if (field === "first" || field === "second") {
        const first =
          field === "first"
            ? parseInt(value || "0")
            : parseInt(numbers.first || "0");
        const second =
          field === "second"
            ? parseInt(value || "0")
            : parseInt(numbers.second || "0");
        const sum = first + second;
        setTotal(sum.toString());
        setTexts((prev) => ({
          ...prev,
          total: sum ? convertToWords(sum) : "",
        }));
      }
    }
  };
  // const firstVal = numbers.first;
  // const secondVal = numbers.second;
  var setGrade;
  // var total = parseInt(firstVal) + parseInt(secondVal);
  // if (isNaN(total)) {
  //   total = "";
  // }

  var roundOff = total / 2;
  if (roundOff > 80 && roundOff <= 100) {
    setGrade = "A";
  } else if (roundOff > 60 && roundOff < 80) {
    setGrade = "B";
  } else if (roundOff > 40 && roundOff < 60) {
    setGrade = "C";
  } else {
    setGrade = "";
  }
  return (
    <div className="container">
      <h1>Fit India Certificate Generator</h1>
      <form className="form">
        <table>
          <tr>
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
              Certificate SI No:
              <input
                className="input"
                type="text"
                name="certificateNo"
                value={details.certificateNo}
                onChange={handleChange}
              />
            </label>
          </tr>
          <tr>
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
              Name of cource:
              <input
                type="text"
                className="input"
                name="cource"
                value={details.cource}
                onChange={handleChange}
              />
            </label>
          </tr>
          <tr>
            <label className="label">
              Register No:
              <input
                className="input"
                type="text"
                name="regno"
                value={details.regno}
                onChange={handleChange}
              />
            </label>

            <label className="label">
              Institution:
              <input
                type="text"
                className="input"
                name="institution"
                value={details.institution}
                onChange={handleChange}
              />
            </label>
          </tr>
          <tr>
            <label className="label">
              Grade:
              {/* <input
          type="text"
            className="input"
            name="grade"
            value={details.grade}
            onChange={handleChange}
          /> */}
              <select
                className="input"
                name="grade"
                value={details.grade}
                onChange={handleChange}
              >
                <option></option>
                <option>Pre</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
                <option>Four</option>
                <option>Five</option>
                <option>Six</option>
                <option>Seven</option>
                <option>Eight</option>
              </select>
            </label>

            <label className="label">
              Admission No:
              <input
                className="input"
                type="text"
                name="admission"
                value={details.admission}
                onChange={handleChange}
              />
            </label>
          </tr>
          <tr>
            <label className="label">
              Exam Date :
              <input
                className="input"
                type="date"
                name="dateOfexam"
                value={details.dateOfexam}
                onChange={handleChange}
              />
            </label>
            <label className="label">
              Issue Date :
              <input
                className="input"
                type="date"
                name="dateOfIssue"
                value={details.dateOfIssue}
                onChange={handleChange}
              />
            </label>
          </tr>
          <tr>
            <label className="label">
              Theory Marks:
              <input
                className="input"
                type="text"
                placeholder="Enter Theory Mark"
                value={numbers.first}
                onChange={(e) => handleNtoW("first", e.target.value)}
                maxLength="3"
              />
            </label>

            <label className="label">
              Practical Marks:
              <input
                type="text"
                className="input"
                placeholder="Enter Practical Mark"
                value={numbers.second}
                onChange={(e) => handleNtoW("second", e.target.value)}
                maxLength="3"
              />
            </label>
          </tr>
        </table>
      </form>

      <div ref={certificateRef} className="certificate">
        <img
          src={certificateImg}
          alt="Certificate Background"
          className="certificate-image"
        />
        <div className="certificate-content">
          {details.photo && (
            <img
              src={details.photo}
              alt="Profile"
              className="certificate-photo"
            />
          )}
        </div>
        <div className="certificate-content">
          <div className="certificate-text-name common-style">
            M/S. {details.name}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-field common-style">
            {details.field}
          </div>
        </div>

        <div className="certificate-content">
          <div className="certificate-text-code common-style">
            {details.certificateCode}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-category common-style">
            {details.cource}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-regno common-style">
            {details.regno}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-institution common-style">
            {details.institution}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-admission  common-style">
            {details.admission}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-start-date  common-style">
            {" "}
            {details.dateOfexam && formatDate(details.dateOfexam)}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-issue-date  common-style">
            {details.dateOfIssue && formatDate(details.dateOfIssue)}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-issue-grade  common-style">
            {details.grade}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-firstmark-number">{numbers.first}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-firstmark-text">{texts.first}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-secondmark-number">{numbers.second}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-secondmark-text">{texts.second}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-total-number  ">{total}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-total-grade ">{setGrade}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-total-text ">{texts.total}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-certificateNo">
            {details.certificateNo}
          </div>
        </div>
      </div>

      <button className="button" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default CertificateGenerator;
