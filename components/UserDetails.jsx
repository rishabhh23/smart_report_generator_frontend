'use client'

export default function UserDetails({ user }){
    const {
        booking_id,
        customer_name,
        collection_date,
        booking_date,
        lead_id,
        uhid,
        useruuid,
        test_id,
        test_code,
        test_name,
        test_values,
        created_at,
        updated_at,
        __hevo_id,
        __hevo__ingested_at,
        __hevo__loaded_at,
        __hevo__marked_deleted,
        __hevo__source_modified_at,
    } = user;
    return (
        <div className="user-details">
          <div className="test-name">Test Name: {test_name}</div>
          <div className="tests">Collection Date: {collection_date}</div>
          <div className="tests">Booking Date: {booking_date}</div>
          <div className="test-method">Test Method: {test_values[0].test_method}</div>
          <div className="test-values">
            <table className="test-values-table">
              <thead className="table-head">
                <tr>
                  {/* <th>Test Method</th> */}
                  <th className="table-head">Parameter Name</th>
                  <th className="table-head">Parameter Value</th>
                  <th className="table-head">Lower Bound</th>
                  <th className="table-head">Upper Bound</th>
                  <th className="table-head">Unit</th>
                </tr>
              </thead>
              <tbody>
                {test_values.map((value, index) => (
                  <tr key={index}>
                    <td className="table-body">{value.parameter_name}</td>

                        {(value.lower_bound === "" || value.lower_bound==="-") || 
                        (value.upper_bound === "" || value.upper_bound==="-") === "" ? (
                        <td className="table-body">{value.parameter_value}</td>
                        ) : (
                        <td
                            className={
                            value.parameter_value > value.upper_bound
                                ? 'user-details-fail'
                                : 'user-details-success'
                            }
                        >
                            {value.parameter_value}
                        </td>
                        )}

                    {(value.lower_bound==="") ? <td className="table-body">-</td> : <td className="table-body">{value.lower_bound}</td>}
                    {(value.upper_bound==="") ? <td className="table-body">-</td> : <td className="table-body">{value.upper_bound}</td>}
                    {(value.unit==="") ? <td className="table-body">-</td> : <td className="table-body">{value.unit}</td>}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
}