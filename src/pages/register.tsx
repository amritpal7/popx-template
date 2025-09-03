function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-base-100">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create your <span className="text-primary">PopX</span> account
        </h2>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-primary">
                Full Name<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              placeholder="Marry Doe"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-primary">
                Phone number<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="tel"
              placeholder="9876543210"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-primary">
                Email address<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="email"
              placeholder="example@mail.com"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-primary">
                Password<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-primary">
                Company name
              </span>
            </label>
            <input
              type="text"
              placeholder="Company Inc."
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium text-primary">
                Are you an Agency?<span className="text-error">*</span>
              </span>
            </label>
            <div className="flex space-x-4">
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  className="radio radio-primary"
                  defaultChecked
                />
                <span className="label-text ml-2">Yes</span>
              </label>
              <label className="label cursor-pointer">
                <input
                  type="radio"
                  name="agency"
                  className="radio radio-primary"
                />
                <span className="label-text ml-2">No</span>
              </label>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-4">
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
