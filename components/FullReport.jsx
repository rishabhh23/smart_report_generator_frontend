'use client';
import FrontPage from "../components/FrontPage";
import Details from "../components/Details";
import BodyChart from "./BodyChart";
import SmartInter from "./SmartInter";
import VisualInfo from "./VisualInfo";
// import html2pdf from "html2pdf.js";

const FullReport = ({ users }) => {

    // const generatePDF = () => {
    //     const fileName = "Patient_Report.pdf";
    //     import('html2pdf.js').then((html2pdf) => {
    //         html2pdf.default().from(document.getElementById('pdf-content')).save(fileName);
    //     });
    // }

    // const generatePDF = () => {
    //     if (users.length > 0) {
    //         //const patientName = users.customer_name;
    //         // const fileName = `${patientName}_Patient_Report.pdf`;
    //         const fileName = "Patient_Report.pdf";
    
    //         alert("Downloading PDF. Please Wait...");
    //         const element = document.getElementById("pdf-content");
    //         html2pdf().from(element).toPdf().get('pdf').then(function(pdf) {
    //             pdf.save(fileName);
    //         });
    //     } else {
    //         alert("No data to generate PDF.");
    //     }
    // };

    return (
        <div className="full-report">
            {(users.length > 0) ? 
            <>
                {/* <button className="download-button" onClick={generatePDF}>Download Report</button> */}
                {/* <div id="pdf-content"> */}
                <div>
                    <div className="report-section">
                        <FrontPage users={users} />
                    </div>

                    <div className="report-section">
                        <Details users={users} />
                    </div>

                    <div className="report-section">
                        <BodyChart users={users} />
                    </div>

                    <div className="report-section">
                        <SmartInter users={users} />
                    </div>

                    <div className="report-section">
                        <VisualInfo users={users} />
                    </div>
                </div>
            </>
            : <div className="invalid-booking-id">Enter Valid Booking ID</div>}
        </div>
    );
};

export default FullReport;
