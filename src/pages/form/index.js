import React, { Component } from "react";
import api from "../../services/api";

class Form extends Component {
  state = {
    title: "",
    description: "",
    url: ""
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    console.log(this.state);
    const response = await api.post("/products", this.state);
  };

  render() {
    const { title, description, url } = this.state;
    return (
      <div>
        <p>Form</p>
        <form onSubmit={this.submitHandler}>
          <div>
            <input
              type="text"
              name="title"
              value={title}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="text"
              name="description"
              value={description}
              onChange={this.changeHandler}
            />
          </div>
          <div>
            <input
              type="file"
              name="url"
              value={url}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
