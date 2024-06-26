import { useState, useEffect } from "react";
import axios from "axios";
import Details from '../components/Details';
import BodyChart from "../components/BodyChart";
import SmartInter from "../components/SmartInter";
import VisualInfo from "../components/VisualInfo";
import LandingPage from "../components/LandingPage";
import FullReport from "../components/FullReport";

export default function Main() {
  const [referenceNumber, setReferenceNumber] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentComponent, setCurrentComponent] = useState('LandingPage');

  const fetchData = async (referenceNumber) => {
    const url = `https://smart-report-generator-backend.onrender.com/getUsers/${referenceNumber}`
    try {
      setLoading(true);
      const response = await axios.get(url, {
        headers: {
          "Content-type": "application/json",
        },
      });
      console.log(response.data);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (referenceNumber && currentComponent === 'Details') {
      fetchData(referenceNumber);
    }
  }, [referenceNumber, currentComponent]);

  const handleChange = (e) => {
    const { value } = e.target;
    setReferenceNumber(value);
  };

  const handleButtonClick = (component) => {
    setCurrentComponent(component);
  };

  const handleClick = () => {
    if (!referenceNumber) {
      alert("Enter Valid Booking ID");
    } else {
      setCurrentComponent("Details");
    }
  };

  return (
    <>
      <div>
        <div className="navigation-pages">
          <button className="navigation-box" onClick={() => handleButtonClick("FullReport")}>
            View Full Report
          </button>
          <button className="navigation-box" onClick={() => handleButtonClick("Details")}>
            View Report
          </button>
          <button className="navigation-box" onClick={() => handleButtonClick("BodyChart")}>
            Health Report Body Chart
          </button>
          <button className="navigation-box" onClick={() => handleButtonClick("SmartInter")}>
            Smart Interpretation
          </button>
          <button className="navigation-box" onClick={() => handleButtonClick("VisualInfo")}>
            Visual aided information with actionable insights
          </button>
        </div>
      </div>
      <div className="main">
        <div className="main-heading">Smart Report Generator</div>
        <div className="main-subheading">
          Generate Details of your report within seconds.
          Please wait a few seconds for the report to display below.
          Booking ID example : 6064578
        </div>
        <div className="reference_number">
          Enter the Booking ID:
          <input
            type="number"
            value={referenceNumber}
            onChange={handleChange}
            placeholder="Type here..."
            className="input-field"
          />
          <button className="main-button" onClick={handleClick}>
            Search
          </button>
        </div>
      </div>
      {loading && <div className="loading">Loading...</div>}
      <div>
        {currentComponent === "FullReport" && <FullReport key="FullReport" users={users} />}
        {currentComponent === "Details" && <Details key="Details" users={users} />}
        {currentComponent === "BodyChart" && <BodyChart key="BodyChart" users={users} />}
        {currentComponent === "SmartInter" && <SmartInter key="SmartInter" users={users} />}
        {currentComponent === "VisualInfo" && <VisualInfo key="VisualInfo" users={users} />}
        {currentComponent === 'LandingPage' && <LandingPage referenceNumber={referenceNumber} />}
      </div>
    </>
  );
}
