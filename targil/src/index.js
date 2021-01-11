import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './ProjectTargel/App';
import reportWebVitals from './reportWebVitals';
//import App from './ProjectTargel/App'

ReactDOM.render(<BrowserRouter>
<App />
</BrowserRouter> ,document.getElementById('root')
);

reportWebVitals();
