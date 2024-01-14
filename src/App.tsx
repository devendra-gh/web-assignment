import * as React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './firebase';
import 'react-toastify/dist/ReactToastify.css';

import { LOGIN_URL, DASHBOARD_URL } from "./utility/constant";
import { useUserData } from "./redux/storeConfig/states";

const Layout = React.lazy(() => import('./components/Layout'))
const Login = React.lazy(() => import('./views/login'))
const Dashboard = React.lazy(() => import('./views/dashboard'))

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const location = useLocation();
  const { auth }: any = useUserData();

  if (!auth?.token) {
    return <Navigate to={LOGIN_URL} state={{ from: location }} replace />;
  }

  return children;
}

const App = () => {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route element={<Layout />}>
          <Route path={LOGIN_URL} element={<Login />} />
          <Route
            path={DASHBOARD_URL}
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to={LOGIN_URL} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
