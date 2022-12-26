import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddCourse } from "../pages/course/AddCourse";

import { Dashboard } from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";
import Signup from "../pages/signup/Signup";
import { PrivateRoute } from "./auth/PrivateRoute";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/add-course"
        element={
          <PrivateRoute>
            <AddCourse />
          </PrivateRoute>
        }
      />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AllRoutes;
