import React , {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Assets/Css/Index.css'
import Loader from "./Components/Loader/Loader";
import "./i18next";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Suspense fallback={<div><Loader/></div>}>
            <App/>
      </Suspense>
);
