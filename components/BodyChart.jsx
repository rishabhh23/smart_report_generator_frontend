'use client'
// import Image from 'next/image'
import human from '../src/assets/human.jpeg'
//blood count
//kidney blood urea, creatinine, BUN
//electrolytes chloride
//diabetes Good or Bad
//liver SGPT(ALT) SGOT(AST)
//anaemiastudies Haemoglobin
//mineral profile Phosphorous

function BodyChart({ users }) {

  const findTestDataByName = (testName) => {
    for (const user of users) {
      const testData = user.test_values.find(test => test.parameter_name === testName);
      if (testData) return testData;
    }
    return null;
  };
  const findTestDataByID = (testID) => {
    for (const user of users) {
      const testData = user.test_values.find(test => test.test_parameter_id === testID);
      if (testData) return testData;
    }
    return null;
  };

  const RBCCountData = findTestDataByName('RBC Count');
  const eosinophilsData = findTestDataByName('Eosinophils');
  const absoluteLeukocyteCountsData = findTestDataByName('Absolute leukocyte counts');

  const bloodUreaData = findTestDataByName('BLOOD UREA');
  const creatinineData = findTestDataByName('CREATININE');
  const BUNData = findTestDataByName('BUN');

  const chlorideData = findTestDataByName('CHLORIDE');

  const glucoseFastingData = findTestDataByName('GLUCOSE FASTING');
  const diabetes = findTestDataByID(7052221);

  const SGPTData = findTestDataByName('SGPT/ALT');
  const SGOTData = findTestDataByName('SGOT/AST');

  const HbA1cData = findTestDataByName('GLYCOSYLATED HEMOGLOBIN (HbA1c)');
  
  const phosphorousData = findTestDataByName('SODIUM');

  const getClassByRange = (value, lowerBound, upperBound) => {
    if (value >= lowerBound && value <= upperBound) {
      return 'user-details-success';
    } else {
      return 'user-details-fail';
    }
  };
  
  return (
    ((users.length === 0) ? <div className='invalid-booking-id'>Enter Valid Booking ID</div> :
      <div className='body-chart'>
          <img
          src={human}
          alt="Human Body"
          className="human-body"
        />
        <div className='body-chart-details'>
          <div className='body-chart-element'>
            <div className="body-chart-heading">BLOOD COUNTS</div>
            {RBCCountData && (
              <p className={getClassByRange(RBCCountData.parameter_value, RBCCountData.lower_bound, RBCCountData.upper_bound)}>RBC Count: {RBCCountData.parameter_value}</p>
            )}
            {eosinophilsData && (
              <p className={getClassByRange(eosinophilsData.parameter_value, eosinophilsData.lower_bound, eosinophilsData.upper_bound)}>Eosinophils: {eosinophilsData.parameter_value}</p>
            )}
            {absoluteLeukocyteCountsData && (
              <p className={getClassByRange(absoluteLeukocyteCountsData.parameter_value, absoluteLeukocyteCountsData.lower_bound, absoluteLeukocyteCountsData.upper_bound)}>Absolute Leukocyte Counts: {absoluteLeukocyteCountsData.parameter_value}</p>
            )}
          </div>

          <div className='body-chart-element'>
            <div className="body-chart-heading">KIDNEY PROFILE</div>
            {bloodUreaData && (
              <p className={getClassByRange(bloodUreaData.parameter_value, bloodUreaData.lower_bound, bloodUreaData.upper_bound)}>Blood Urea: {bloodUreaData.parameter_value}</p>
            )}
            {creatinineData && (
              <p className={getClassByRange(creatinineData.parameter_value, creatinineData.lower_bound, creatinineData.upper_bound)}>Creatinine: {creatinineData.parameter_value}</p>
            )}
            {BUNData && (
              <p className={getClassByRange(BUNData.parameter_value, BUNData.lower_bound, BUNData.upper_bound)}>BUN: {BUNData.parameter_value}</p>
            )}
          </div>

          <div className='body-chart-element'>
            <div className="body-chart-heading">ELECTROLYTES</div>
            {chlorideData && (
              <p className={getClassByRange(chlorideData.parameter_value, chlorideData.lower_bound, chlorideData.upper_bound)}>Chloride: {chlorideData.parameter_value}</p>
            )}
          </div>

          <div className='body-chart-element'>
            <div className="body-chart-heading">DIABETES MONITORING</div>
            {glucoseFastingData && 
              (glucoseFastingData.impression==='H') ? <p className='user-details-fail'>Please Watch Out!</p> : <p className='user-details-success'>Everything Looks Good!</p>
            }
            </div>
            
            <div className='body-chart-element'>
              <div className="body-chart-heading">LIVER PROFILE</div>
              {SGPTData && (
                <p className={getClassByRange(SGPTData.parameter_value, SGPTData.lower_bound, SGPTData.upper_bound)}>SGPT(ALT): {SGPTData.parameter_value}</p>
              )}
              {SGOTData && (
                <p className={getClassByRange(SGOTData.parameter_value, SGOTData.lower_bound, SGOTData.upper_bound)}>SGOT(AST): {SGOTData.parameter_value}</p>
              )}
            </div>

            <div className='body-chart-element'>
              <div className="body-chart-heading">ANEMIA STUDIES</div>
              {HbA1cData && (
                <p className={getClassByRange(HbA1cData.parameter_value, HbA1cData.lower_bound, HbA1cData.upper_bound)}>Haemoglobin: {HbA1cData.parameter_value}</p>
              )}
            </div>

            <div className='body-chart-element'>
              <div className="body-chart-heading">MINERAL PROFILE</div>
              {phosphorousData && (
                <p className={getClassByRange(phosphorousData.parameter_value, phosphorousData.lower_bound, phosphorousData.upper_bound)}>Sodium: {phosphorousData.parameter_value}</p>
              )}
            </div>
            
        </div>
      </div>)
  );
}

export default BodyChart;

  

