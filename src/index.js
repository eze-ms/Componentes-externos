import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import { Provider } from 'react-redux'; // Importa Provider desde react-redux
import reducer from './redux/reducers/reducer';

import { BrowserRouter as Router } from 'react-router-dom';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* Envuelve tu aplicación con Provider y pasa la tienda */}
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
); 

reportWebVitals();
