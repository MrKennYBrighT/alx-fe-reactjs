// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// Simulated authentication hook
function useAuth() {
  const user = { loggedIn: true }; // Change to false to simulate unauthenticated
  return user?.loggedIn; // ✅ Optional chaining
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

// ✅ Prop validation
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
