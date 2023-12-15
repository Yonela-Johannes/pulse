import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "../../services/API";
import { getCurrentUser } from "../../redux/features/auth/authActions";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.auth);

  //get user current
  const getUser = async () => {
    // try {
    //   const { data } = await API.get("/auth/current-user");
    //   if (data?.success) {
    //     dispatch(getCurrentUser(data));
    //   }
    // } catch (error) {
    //   localStorage.clear();
    //   console.log(error);
    // }
  };

  useEffect(() => {
    getUser();
  });

  if (currentUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
