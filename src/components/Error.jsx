import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <p>
      {error.message || error.data}
      <button
        onClick={() => navigate(-1)}
        className="block bg-stone-200 border-2 border-stone-800 ml-10"
      >
        &larr; Back
      </button>
    </p>
  );
}

export default Error;
