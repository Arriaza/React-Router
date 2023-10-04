import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
{/* se pasa un componente de alto orden, que se encarga de almacenar todo el estado de nuestra
navegación y conectar los componentes que se van a utilizar de react-router para que funcionen de
manera correcta, (este componente almacena el estado de la navegación) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

