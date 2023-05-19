import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthProvider';

const ProtectedAdminRoute = ({ children }) => {
  const { adminToken } = useAuthContext();

  if (!adminToken) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

export default ProtectedAdminRoute;