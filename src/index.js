import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.css';
import Chatbot from "./vendor/chatbot/Chatbot";
ReactDOM.render(
  <React.StrictMode>
    <Chatbot />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
