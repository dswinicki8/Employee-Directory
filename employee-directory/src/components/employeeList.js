import React from "react";

function EmployeeList(props) {
  return (
    <table className="table">
      {props.results.map((result) => (
        <table>
          <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
          </tr>
          <tr>
            <td>Corey</td>
            <td>Taylor</td>
            <td>46</td>
          </tr>
        </table>
      ))}
    </table>
  );
}

export default EmployeeList;
