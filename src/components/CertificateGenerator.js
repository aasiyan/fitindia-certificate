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

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "../components/CertificateGenerator.css";
import certificateImg from "./assets/certificate-fi.png";

const CertificateGenerator = () => {
  const [details, setDetails] = useState({
    name: "",
    sodo: "",
    parentsname: "",
    photo: "",
    field: "",
    certificateCode: "",
    dateOfIssue: "",
    cource: "",
    institution: "",
    grade: "",
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
    const {
      name,
      photo,

      certificateCode,
      cource,
      sodo,
      parentsname,
      regno,
      dateOfIssue,
      institution,
      admission,
      grade,
    } = details;
    return (
      name &&
      photo &&
      certificateCode &&
      cource &&
      sodo &&
      parentsname &&
      regno &&
      institution &&
      admission &&
      dateOfIssue &&
      grade
    );
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
      });
      pdf.addImage(imgData, "PNG", 0, 0, 595, 842);
      pdf.save(`${details.name}_certificate.pdf`);
    });
  };

  // NUMBER TO WORD CONVERTION FUNCTION
  const [numbers, setNumbers] = useState({ first: "", second: "" });
  const [texts, setTexts] = useState({ first: "", second: "", total: "" });
  const [total, setTotal] = useState("");
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

  if (total > 80 && total <= 100) {
    setGrade = "A";
  } else if (total > 60 && total < 80) {
    setGrade = "B";
  } else {
    setGrade = "C";
  }
  return (
    <div className="container">
      <h1>Aasiyan Book of World Records</h1>
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
        {/* <label className="lable">
          <b>Parents Name</b>
          <input
            className="input"
            type="text"
            name="parentsname"
            value={details.parentsname}
            onChange={handleChange}
          />
        </label> */}
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
          Cource:
          <select
            className="input"
            name="cource"
            value={details.cource}
            onChange={handleChange}
          >
            <option value="">Select Cource</option>
            <option value="Bharathanatyam">Bharathanatyam</option>
            <option value="Silambam">Silambam</option>
            <option value="Yoga">Yoga</option>
            <option value="Nattupura Kalaigal">Nattupura Kalaigal</option>
            <option value="Themmangu Pattu">Themmangu Pattu</option>
          </select>
        </label>
        {/* <label className="label">
          Aadhar No:
          <input
            className="input"
            type="text"
            name="field"
            value={details.field}
            onChange={handleChange}
          />
        </label> */}
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
        {/* <label className="label">
          Register No:
          <input
            className="input"
            type="text"
            name="regno"
            value={details.regno}
            onChange={handleChange}
          />
        </label> */}

        {/* <label className="label">
          Certificate Code:
          <input
            className="input"
            type="text"
            name="certificateCode"
            value={details.certificateCode}
            onChange={handleChange}
          />
        </label> */}
        <label className="label">
          Institution:
          <select
            className="input"
            name="institution"
            value={details.institution}
            onChange={handleChange}
          >
            <option value="">Select Cource</option>
            <option value="Bharathanatyam">Bharathanatyam</option>
            <option value="Silambam">Silambam</option>
            <option value="Yoga">Yoga</option>
            <option value="Nattupura Kalaigal">Nattupura Kalaigal</option>
            <option value="Themmangu Pattu">Themmangu Pattu</option>
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
        <label className="label">
          Grade:
          <select
            className="input"
            name="grade"
            value={details.grade}
            onChange={handleChange}
          >
            <option value="">Select Grade</option>
            <option value="A">A</option>
            <option value="A+">A+</option>
            <option value="B">B</option>
            <option value="B+">B+</option>
          </select>
        </label>
        <label className="label">
          Theory Marks:
          <input
            type="text"
            placeholder="Enter first number"
            value={numbers.first}
            onChange={(e) => handleNtoW("first", e.target.value)}
            maxLength="3"
          />
        </label>
        <label className="label">
          Practical Marks:
          <input
            type="text"
            placeholder="Enter second number"
            value={numbers.second}
            onChange={(e) => handleNtoW("second", e.target.value)}
            maxLength="3"
          />
        </label>
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
          <div className="certificate-text-name">M/S. {details.name}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-field">{details.field}</div>
        </div>

        <div className="certificate-content">
          <div className="certificate-text-code">{details.certificateCode}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-category">{details.cource}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-regno">{details.regno}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-institution">
            {details.institution}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-text-admission">{details.admission}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-start-date">19-10-1999</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-issue-date">
            {details.dateOfIssue && formatDate(details.dateOfIssue)}
          </div>
        </div>
        <div className="certificate-content">
          <div className="certificate-issue-grade">{details.grade}</div>
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
          <div className="certificate-total-number">{total}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-total-grade">{setGrade}</div>
        </div>
        <div className="certificate-content">
          <div className="certificate-total-text">{texts.total}</div>
        </div>
      </div>

      <button className="button" onClick={handleDownloadPDF}>
        Download PDF
      </button>
    </div>
  );
};

export default CertificateGenerator;
