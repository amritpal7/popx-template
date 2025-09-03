function AccountPage() {
  return (
    <div className="mt-4 flex justify-center">
      <div className="w-full max-w-lg rounded-lg">
        <div className="border-b p-4">
          <h2 className="text-lg font-semibold">Account Settings</h2>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start gap-4">
            <div className="relative">
              <div className="avatar">
                <div className="w-16 rounded-full ring ring-offset-base-100 ring-offset-2">
                  <img src="https://i.pravatar.cc/150?img=5" alt="profile" />
                </div>
              </div>
              <button className="absolute bottom-0 right-0 bg-primary text-white p-1 rounded-full shadow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75h-7.5l-1.5 2.25H4.5v9h15v-9h-2.25l-1.5-2.25zM12 15.75a3 3 0 100-6 3 3 0 000 6z"
                  />
                </svg>
              </button>
            </div>
            <div>
              <h3 className="font-semibold">Marry Doe</h3>
              <p className="text-sm text-gray-500">Marry@gmail.com</p>
            </div>
          </div>
          <div className="p-3 rounded-lg text-sm text-gray-600">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountPage;
