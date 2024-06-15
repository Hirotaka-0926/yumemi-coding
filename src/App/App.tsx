import React from 'react';
import ReactDOM from 'react-dom/client';
import {AppRoutes} from './Router';

//import logo from './component/logo.svg';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;