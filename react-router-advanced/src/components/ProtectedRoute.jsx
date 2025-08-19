// src/components/ProtectedRoute.jsx
import { Navigate } from 'react-router-dom';

// Simulated authentication hook
function useAuth() {
  const user = { loggedIn: true }; // Change to false to simulate unauthenticated
  return user && user.loggedIn;
}

function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
