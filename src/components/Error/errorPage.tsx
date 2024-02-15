import { useNavigate } from "react-router-dom";
import ROUTES from "../../constants/routePaths";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Something went wrong</h1>
      <button type="button" onClick={() => navigate(ROUTES.HOME)}>
        Go Home
      </button>
    </div>
  );
}

export default ErrorPage;
