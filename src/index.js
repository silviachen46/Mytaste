import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login'
import Navigation from './Navigation';
import Homepage from './Homepage'


import About from "./about";
import Blogs from "./blogs";
import Chat from "./chat";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode className="overflow-none">
    <Router>
            <Routes>
            <Route path="/" element={< Homepage/>} />
            <Route path="/login" element={< Login/>} />
            <Route path="/about" element={<About />} />
            <Route
                path="/Chat"
                element={<Chat />}
            />
            <Route path="/blogs" element={<Blogs />} />
            </Routes>
        </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
