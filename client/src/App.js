import React from 'react';
import './App.css';
import ServiceList from './Components/ServiceList';
import getServices from './Components/Api/GetServicesApi';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Consul UI</h1>
        <h6>
          UI created by{' '}
          <a
            href='https://github.com/purcelllj'
            target='_blank'
            rel='noopener noreferrer'
          >
            Liam Purcell
          </a>
        </h6>
      </header>
      <section>
        <ServiceList getServices={getServices}></ServiceList>
      </section>
    </div>
  );
}

export default App;
