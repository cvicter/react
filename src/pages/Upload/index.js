import React, { Component } from "react";
import api from "../../services/api";
import "./styles.css";

class Upload extends Component {
  state = {
    upload: {}
  };
  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await api.get(`/uploads/${id}`);

    this.setState({ upload: response.data });
    
    console.log(this.state)
  }

  render() {
    const { upload } = this.state;
    return (
      <div className="upload-info">
        <h1>Usuário: {upload.user}</h1>
        <p>Comentários:{upload.comment}</p>
        <p>
          URL: <a href={upload.url}>{upload.url}</a>
        </p>
        <p>Data: {upload.createdAt}</p>
      </div>
    );
  }
}

export default Upload;
