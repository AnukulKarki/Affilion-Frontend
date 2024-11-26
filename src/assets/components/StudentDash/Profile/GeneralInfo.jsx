const General = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-8 p-6 max-w-4xl">
      {/* Form Section */}
      <form className="w-full md:w-1/2 space-y-4">
        {/* First Name */}
        <div>
          <label
            htmlFor="firstName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First Name
          </label>
          <input
            id="firstName"
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Last Name */}
        <div>
          <label
            htmlFor="lastName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last Name
          </label>
          <input
            id="lastName"
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full border bg-gray-200 border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-not-allowed"
            disabled
          />
        </div>

        {/* Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            id="address"
            type="text"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Save Changes Button */}
        <button
          type="submit"
          className="bg-[#344CC6] text-white w-full py-2 px-6 rounded-md text-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          Save Changes
        </button>
      </form>

      {/* Avatar Section */}
      <div className="relative w-32 h-32">
        {/* Avatar Placeholder */}
        <div className="w-full h-full bg-red-400 rounded-full"></div>

        {/* Camera Icon */}
        <label
          htmlFor="avatarUpload"
          className="absolute bottom-2 right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center cursor-pointer"
        >
          <i className="fas fa-camera"></i>
          <input id="avatarUpload" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};

export default General;
