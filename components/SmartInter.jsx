import '../src/api/TestDescription';

export default function SmartInter({ users }) {
  return (
    ((users.length === 0) ? <div className='invalid-booking-id'>Enter Valid Booking ID</div> :
      <div className="smart-inter">
        {users.map(user => {
          const testDescription = details[user.test_name];
          const testValues = user.test_values[0]; // Assuming test_values is always present and contains at least one item
          return (
            <div className="smart-inter-box" key={user.booking_id}>
                <h3 className="smart-inter-heading">{user.test_name}</h3>
                <p>Test Method:  
                    <span className="smart-inter-values">
                        {testValues.test_method}
                    </span>
                </p>
                <p>Parameter Value: 
                    <span className="smart-inter-values">
                        {testValues.parameter_value}
                    </span>
                </p>
                <p>Display Value: 
                    <span className="smart-inter-values">
                        {testValues.display_value}
                    </span>
                </p>
                <div className="smart-inter-desc">
                    <p className="interpretation">
                        <div>
                            Interpretation:
                        </div> 
                        {testDescription}
                    </p>
                </div>
            </div>
          );
        })}
      </div>)
  )
}
