import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './auth';

interface RequireAuthProps {
  children: React.ReactNode;
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
  const location = useLocation();
  const {authenticated} = useContext(AuthContext)
  
  if (!authenticated) {
    return <Navigate to='/login'  />;
  }
  
  return <>{children}</>;
};

export default RequireAuth;
