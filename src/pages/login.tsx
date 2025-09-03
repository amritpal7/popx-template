function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-base-100">
        <h2 className="text-2xl font-bold mb-2">
          Sign in to your <span className="text-primary">PopX</span> account
        </h2>
        <p className="text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary font-medium">
                Email Address
              </span>
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-primary font-medium">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button className="btn btn-primary w-full mt-4">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
