import { Link } from "react-router";
function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm bg-base-100 shadow-xl p-6">
        <h1 className="text-2xl font-bold text-base-content">
          Welcome to PopX
        </h1>
        <p className="mt-2 text-base-content/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <div className="mt-8 flex flex-col gap-3">
          <Link to={"/register"}>
            <button className="btn btn-primary w-full">Create Account</button>
          </Link>
          <Link to={"/login"}>
            <button className="btn btn-secondary w-full">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
