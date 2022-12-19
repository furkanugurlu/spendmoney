import { Navigate, RouteProps } from "react-router-dom";
interface PrivateRouteProps extends RouteProps {
  component: any;
}

function PrivateRoute({ component: Component }: PrivateRouteProps) {
  const token = localStorage.getItem("token");
  return token ? <Component /> : <Navigate to="/login" />;
}

export default PrivateRoute;
