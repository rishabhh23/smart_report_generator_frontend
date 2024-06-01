'use client'
import advisory from "../src/api/Advisory";
import { GiLiver, GiTestTubes, GiWrappedSweet, GiKidneys, GiMinerals  } from 'react-icons/gi'
import {BiSolidDonateBlood} from 'react-icons/bi'

//blood count
//kidney blood urea, creatinine, BUN
//electrolytes chloride
//diabetes Good or Bad
//liver SGPT(ALT) SGOT(AST)
//anaemiastudies Haemoglobin
//mineral profile Phosphorous

export default function VisualInfo({ users }){

    const findTestDataByName = (testName) => {
        for (const user of users) {
          const testData = user.test_values.find(test => test.parameter_name === testName);
          if (testData) return testData;
        }
        return null;
    };

    const getClassByRange = (value, lowerBound, upperBound) => {
        if (value >= lowerBound && value <= upperBound) {
            return 'visual-value-success';
        } else {
            return 'visual-value-fail';
        }
    };

    const RBCCountData = findTestDataByName('RBC Count');
    const bloodUreaData = findTestDataByName('BLOOD UREA');
    const chlorideData = findTestDataByName('CHLORIDE');
    const glucoseFastingData = findTestDataByName('GLUCOSE FASTING');
    const SGOTData = findTestDataByName('SGOT/AST');
    const HbA1cData = findTestDataByName('GLYCOSYLATED HEMOGLOBIN (HbA1c)');
    const sodiumData = findTestDataByName('SODIUM');

    return (
        ((users.length === 0) ? <div className='invalid-booking-id'>Enter Valid Booking ID</div> : 
        <div>
            <div className="visual-box">
                <h2 className="visual-heading"><BiSolidDonateBlood />Anemia Profile</h2>
                <p className={`visual-value ${getClassByRange(parseFloat(HbA1cData?.parameter_value), parseFloat(HbA1cData?.lower_bound), parseFloat(HbA1cData?.upper_bound))}`}>
                    Haemoglobin: {HbA1cData ? HbA1cData.parameter_value : "Not Available"}
                </p>
                <p className="visual-desc">{advisory['Anemia Profile'].Description}</p>
                <h2 className="visual-tips-heading">Diet and Lifestyle Tips: </h2>
                <p className="visual-tips-desc">{advisory['Anemia Profile'].Tips}</p>
            </div>

            <div className="visual-box">
                <h2 className="visual-heading"><GiLiver />Liver Profile</h2>
                <p className={`visual-value ${getClassByRange(parseFloat(SGOTData?.parameter_value), parseFloat(SGOTData?.lower_bound), parseFloat(SGOTData?.upper_bound))}`}>
                    SGOT/AST: {SGOTData ? SGOTData.parameter_value : "Not Available"}
                </p>
                <p className="visual-desc">{advisory['Liver Profile'].Description}</p>
                <h2 className="visual-tips-heading">Diet and Lifestyle Tips: </h2>
                <p className="visual-tips-desc">{advisory['Liver Profile'].Tips}</p>
            </div>

            <div className="visual-box">
                <h2 className="visual-heading"><BiSolidDonateBlood />Blood Count</h2>
                <p className={`visual-value ${getClassByRange(parseFloat(RBCCountData?.parameter_value), parseFloat(RBCCountData?.lower_bound), parseFloat(RBCCountData?.upper_bound))}`}>
                    {RBCCountData ? RBCCountData.parameter_value : "Not Available"}
                </p>
                {/* <p className="visual-value">{RBCCountData ? RBCCountData.parameter_value : 'Not Available'}</p> */}
                <p className="visual-desc">{advisory['Blood Count'].Description}</p>
                <h2 className="visual-tips-heading">Diet and Lifestyle Tips: </h2>
                <p className="visual-tips-desc">{advisory['Blood Count'].Tips}</p>
            </div>

            <div className="visual-box">
                <h2 className="visual-heading"><GiTestTubes /> Electrolytes</h2>
                <p className="visual-value"> 
                    <div className={`visual-value ${getClassByRange(parseFloat(sodiumData?.parameter_value), parseFloat(sodiumData?.lower_bound), parseFloat(sodiumData?.upper_bound))}`}>
                        Sodium :{sodiumData ? sodiumData.parameter_value : "Not Available"}
                    </div>
                    <div className={`visual-value ${getClassByRange(parseFloat(chlorideData?.parameter_value), parseFloat(chlorideData?.lower_bound), parseFloat(chlorideData?.upper_bound))}`}>
                        Chloride :{chlorideData ? chlorideData.parameter_value : "Not Available"}
                    </div>
                    {/* <div>Sodium : {sodiumData ? sodiumData.parameter_value : 'Not Available'}</div> */}
                    {/* <div>Chloride : {chlorideData ? chlorideData.parameter_value : 'Not Available'}</div> */}
                </p>
                <p className="visual-desc">{advisory['Electrolytes Profile'].Description}</p>
                <h2 className="visual-tips-heading">Diet and Lifestyle Tips: </h2>
                <p className="visual-tips-desc">{advisory['Electrolytes Profile'].Tips}</p>
            </div>

            <div className="visual-box">
                <h2 className="visual-heading"><GiWrappedSweet />Diabetes</h2>
                <div className={`visual-value ${getClassByRange(parseFloat(glucoseFastingData?.parameter_value), parseFloat(glucoseFastingData?.lower_bound), parseFloat(glucoseFastingData?.upper_bound))}`}>
                    Glucose: {glucoseFastingData ? sodiumData.parameter_value : "Not Available"}
                </div>
                {/* <p className="visual-value">Glucose: {glucoseFastingData ? glucoseFastingData.parameter_value : 'Not Available'}</p> */}
                <p className="visual-desc">{advisory['Diabetes Profile'].Description}</p>
                <h2 className="visual-tips-heading">Diet and Lifestyle Tips: </h2>
                <p className="visual-tips-desc">{advisory['Diabetes Profile'].Tips}</p>
            </div>

            <div className="visual-box">
                <h2 className="visual-heading"><GiKidneys />Kidney Profile</h2>
                <div className={`visual-value ${getClassByRange(parseFloat(bloodUreaData?.parameter_value), parseFloat(bloodUreaData?.lower_bound), parseFloat(bloodUreaData?.upper_bound))}`}>
                    Urea: {bloodUreaData ? bloodUreaData.parameter_value : "Not Available"}
                </div>
                {/* <p className="visual-value">Urea: {bloodUreaData ? bloodUreaData.parameter_value : 'Not Available'}</p> */}
                <p className="visual-desc">{advisory['Kidney Profile'].Description}</p>
                <h2 className="visual-tips-heading">Diet and Lifestyle Tips: </h2>
                <p className="visual-tips-desc">{advisory['Kidney Profile'].Tips}</p>
            </div>

            <div className="visual-box">
                <h2 className="visual-heading"><GiMinerals />Minerals</h2>
                <p className="visual-desc">{advisory['Minerals Profile'].Description}</p>
                <h2 className="visual-tips-heading">Diet and Lifestyle Tips: </h2>
                <p className="visual-tips-desc">{advisory['Minerals Profile'].Tips}</p>
            </div>

        </div>)
    )
}
