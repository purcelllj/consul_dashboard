import React, { Component } from 'react';
import getServices from './Api/GetServicesApi';
//import getService from './Api/GetServiceByNameApi';

class ServiceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    };
  }
  async componentDidMount() {
    let servicesResponse = await getServices();
    let json = await servicesResponse.json();
    this.setState({ services: Object.keys(json) });
  }

  render() {
    const { services } = this.state;
    const serviceList = services.map((i, key) => <li key={key}>{i}</li>);
    return (
      <section>
        <ul>{serviceList}</ul>
      </section>
    );
  }
}

export default ServiceList;
