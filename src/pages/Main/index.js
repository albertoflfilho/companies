import React, { Component } from 'react';

import api from '../../services/api';

import { Container } from './styles';
import Companies from '../../components/CompaniesList/index';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      paginations: '',
    };
  }

  apiCompanies = async (e) => {
    e.preventDefault();

    try {
      const response = await api.get('/companies' + this.state.paginations);
      console.log(this.state.paginations);
      const companiesData = [];
      for (let i = 0; i < response.data.data.length; i++) {
        companiesData.push(
          <img
            key={response.data.data[i].id}
            src={
              response.data.data[i].logo === null
                ? 'https://img.scoop.it/4rT6wl3jP-_vepJFeosF0Tl72eJkfbmt4t8yenImKBVvK0kTmF0xjctABnaLJIm9'
                : response.data.data[i].logo
            }
            alt={response.data.data[i].name}
          />
        );
      }
      this.setState({
        companies: companiesData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <Container>
        <Companies companies={this.state.companies} />
        <button onClick={this.apiCompanies} type="submit" value={this.state}>
          GO_1
        </button>
        <button onClick={() => this.setState({ paginations: '?page=2' })}>
          P2
        </button>
        <button onClick={() => this.setState({ paginations: '?page=3' })}>
          P3
        </button>
        <button onClick={() => this.setState({ paginations: '?page=4' })}>
          P4
        </button>
        <button onClick={() => this.setState({ paginations: '?page=5' })}>
          P5
        </button>
      </Container>
    );
  }
}
