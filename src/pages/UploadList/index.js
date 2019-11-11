import React, { Component } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./styles.css";
class UploadList extends Component {
  state = {
    uploads: [],
    uploadsInfo: {},
    page: 1
  };
  componentDidMount() {
    this.loadUploads();
  }

  loadUploads = async (page = 1) => {
    const response = await api.get(`/uploads?page=${page}`);

    const { docs, ...uploadsInfo } = response.data;
    //console.log(response.data.docs);
    this.setState({ uploads: docs, uploadsInfo, page });
  };

  prevPage = () => {
    const { page } = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadUploads(pageNumber);
  };

  nextPage = () => {
    const { page, uploadsInfo } = this.state;

    if (page === uploadsInfo.pages) return;

    const pageNumber = page + 1;

    this.loadUploads(pageNumber);
  };
  render() {
    // return <h1>Qtt: {this.state.products.length}</h1>;
    const { uploads, page, uploadsInfo } = this.state;
    return (
      <div className="product-list">
        {uploads.map(upload => (
          <article key={upload._id}>
            <p>Data: {upload.createdAt}</p>
            <p>Usuário: {upload.user}</p>
            <p>Número no BHD: {upload.bhdNumber}</p>
            <Link to={`/uploads/${upload._id}`}>Acessar</Link>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>
            Previous
          </button>
          <button disabled={page === uploadsInfo.pages} onClick={this.nextPage}>
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default UploadList;
