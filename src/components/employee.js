import React from 'react'

function Employee(props) {
  return (
    <div>
      <tr>
        <th scope="row"> <img alt={props.name} src={props.picture}/></th>
    
      <td >{props.firstName}</td>
      
      <td >{props.lastName}</td>
      
      <td >{props.phone}</td>
      
      <td >{props.email}</td>
      </tr>
    </div>
  )
};


export default Employee;