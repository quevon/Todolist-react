
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import  Todolist from './components/Todolist/Todolist';

export default function App() {
  return (
    <div className="app-main">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
          <Route path="/todolist" element={<Todolist />}/>  
        </Routes>
      </BrowserRouter>
    </div>
  );
}



