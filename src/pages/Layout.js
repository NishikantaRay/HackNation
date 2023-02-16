import React from "react";
import { Route, Routes } from "react-router-dom";
import CleanlinessPage from "./CleanlinessPage";
import DoctorListPage from "./DoctorListPage";
import HomePage from "./HomePage";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export const Layout = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/doctorlist" element={<DoctorListPage/>} />
        <Route exact path="/Cleanliness" element={<CleanlinessPage/>} />
      </Routes>
    </>
  );
};
