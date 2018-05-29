import React from "react";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.updateEmailField = this.updateEmailField.bind(this);
  }

  updateEmailField(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <p>Sign Up</p>
        <h1>{this.state.value}</h1>
        <input
          type="email"
          name="email"
          value={this.state.value}
          onChange={this.updateEmailField}
        />
      </div>
    );
  }
}

export default SignUp;
