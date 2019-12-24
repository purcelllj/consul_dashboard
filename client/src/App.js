import React from 'react';
import './App.css';
import ServiceList from './Components/ServiceList';
import getServices from './Components/Api/ServicesApi';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Consul Services Dashboard</h1>
        <h4>User Liam Purcell</h4>
      </header>
      <section>
        <ServiceList getServices={getServices}></ServiceList>
      </section>
    </div>
  );
}

export default App;
