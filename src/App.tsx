/** 
  * @desc Application root
  * @author Leon Li bbddstory@live.com
  */
import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { requestInterceptor, responseInterceptor } from './api/interceptor';
import './App.scss';
import Shop from './components/Shop/Shop';

export const App: React.FC = () => {
  // Axios global interceptor setup
  useEffect(() => {
    requestInterceptor(); // Request interceptor
    responseInterceptor(); // Response interceptor
  }, []);

  return (
    <Router>
      <Shop path="/" />
    </Router>
  );
}

export default App;
