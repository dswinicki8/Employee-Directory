import React, { Component } from 'react'

export class serachResult extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    yearsWithCompany: "",
  };

  handle;

  render() {
    return (
      <div>
        <ListGroup horizontal>
          <ListGroup.Item>{this.state.firstName}</ListGroup.Item>
          <ListGroup.Item>{this.state.lastName}</ListGroup.Item>
          <ListGroup.Item>{this.state.email}</ListGroup.Item>
          <ListGroup.Item>{this.state.phone}</ListGroup.Item>
          <ListGroup.Item>{this.state.jobTitle}</ListGroup.Item>
          <ListGroup.Item>{this.state.yearsWithCompany}</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
export default serachResult
