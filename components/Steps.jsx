import React from "react"

function Steps(){
    return(
        <>
            <div className="steps-heading">
                Steps to use the application:
            </div>
            <ol className="steps-list">
                <li className="steps-list-element">1. Enter your Booking ID.</li>
                <li className="steps-list-element">2. Wait for the server to fetch details</li>
                <li className="steps-list-element">3. After successful operation, see the report details.</li>
                <li className="steps-list-element">4. Values in <span className="steps-success">Green</span> means they are in normal range, Values in <span className="steps-fail">Red </span>
                means they are either low or high and appropriate steps should be taken.</li>
                <li className="steps-list-element">5. Navigate using the 5 links given above namely
                    View Full Report, View Report, Health Report Body Chart, Smart Interpretation and
                    Visual aided information with actionable insights.
                </li>
                <li className="steps-list-element">6. If you wish to Download the Full Report, Then go to the "View Full Report" page
                and click on "Download Report", the PDF will be downloaded automatically.</li>
            </ol>
        </>
    )
}

export default Steps;