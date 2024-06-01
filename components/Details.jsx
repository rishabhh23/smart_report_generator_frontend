'use client'
import { useEffect, useState } from "react";
import axios from "axios";
import UserDetails from "./UserDetails";

export default function Details({ users }) {
    // const { referenceNumber } = props;
    // const [users, setUsers] = useState([]);
    // const [loading, setLoading] = useState(true); 
    // const url = `http://localhost:4000/getUsers/${referenceNumber}`;

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get(url, {
    //             headers: {
    //                 "Content-type": "application/json",
    //             },
    //         });
    //         console.log(response.data);
    //         setUsers(response.data);
    //         setLoading(false);
    //     } catch (err) {
    //         console.log(err);
    //         setLoading(false); 
    //     }
    // };

    // useEffect(() => {
    //     fetchData();
    // }, [url, referenceNumber]);

    const generatePDF = () => {
        const element = document.getElementById("pdf-content");
        html2pdf().from(element).save();
    };

    return (
        <>
            {/* <div className="details">
                {loading ? ( 
                    <div className="loading">Loading Please Wait...</div>
                ) : (
                    <>
                        {users.length > 0 ? (
                            <>
                                <div className="patient-name">Patient Name: {users[0].customer_name}</div>
                                <div className="booking-id">Booking ID: {users[0].booking_id}</div>
                                <div className="report-details">Report Details:- </div>
                                {users.map((user, index) => (
                                    <UserDetails key={index} user={user} />
                                ))}
                            </>
                        ) : (
                            <div className="no-user-found">No records found with that Booking ID. Please try again.</div>
                        )}
                    </>
                )}
            </div> */}
            <div className="details">
                {users.length > 0 ? (
                    <>
                        <div className="patient-name">Patient Name: {users[0].customer_name}</div>
                        <div className="booking-id">Booking ID: {users[0].booking_id}</div>
                        <div className="report-details">Report Details:- </div>
                        {users.map((user, index) => (
                            <UserDetails key={index} user={user} />
                        ))}
                    </>
                ) : (
                    <div className="invalid-booking-id">Enter Valid Booking ID</div>
                )}
            </div>
            
        </>
    );
}
