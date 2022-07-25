import React from 'react';
import ReactDOM  from 'react' ;

import {createRoot} from 'react-dom/client';

import App from './App';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

//Research use fo strict mode
root.render(<App />)