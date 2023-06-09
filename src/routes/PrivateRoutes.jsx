import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import { AuthContext } from "../context/AuthProvider";
import Swal from "sweetalert2";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) return <Spinner />;

  if (!user) {
    Swal.fire("You have to log in first to view details");
  }

  if (user) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoutes;
