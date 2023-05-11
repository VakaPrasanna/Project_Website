import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Home from './../pages/Home';
import Faculty from '../pages/Faculty';
import FacultyDetails from './../pages/FacultyDetails';
import SearchResultList from './../pages/SearchResultList';
import Register from './../pages/Register';
import Login from './../pages/Login';


const Routers = () => {
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />}  />
        <Route path="/home" element={<Home />}  />
        <Route path="/faculty" element={<Faculty />}  />
        <Route path="/faculty/:id" element={<FacultyDetails />}  />
        <Route path="/faculty/search" element={<SearchResultList />}  />
        <Route path="/register" element={<Register />}  />
        <Route path="/login" element={<Login />}  />
    </Routes>
  );
};
 
export default Routers;
