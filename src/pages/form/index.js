import React, { Component } from "react";
import api from "../../services/api";

class Form extends Component {
  state = {
    user: "",
    bhdNumber: "",
    comment: "",
    url: "",
  };

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = async e => {
    e.preventDefault();
    console.log(this.state);
    const response = await api.post("/uploads", this.state);
  };

  render() {
    const { user, bhdNumber, comment, url } = this.state;
    return (
      <div>
        <p>Form</p>
        <form onSubmit={this.submitHandler} id="upload-form">
          <div>
          <label>Usuário</label>
            <input
              type="text"
              name="user"
              value={user}
              onChange={this.changeHandler}
            />
          </div>
          <div>
          <label>Número BHD</label>
            <input
              type="text"
              name="bhdNumber"
              value={bhdNumber}
              onChange={this.changeHandler}
            />
          </div>
          <div>
          <label>URL</label>
            <input
              type="text"
              name="url"
              value={url}
              onChange={this.changeHandler}
            />
          </div>
          <label>Comentários</label>
          <textarea onChange={this.changeHandler} rows="4" cols="50" name="comment" form="upload-form"></textarea>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
