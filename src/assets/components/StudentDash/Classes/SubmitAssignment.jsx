import PropTypes from "prop-types";

const SubmitAssignment = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg w-full max-w-md sm:max-w-2xl p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <i className="fas fa-times"></i>
        </button>

        {/* Modal Content */}
        <h2 className="text-lg font-semibold mb-1">
          <i className="fas fa-copy text-primary"></i> &nbsp; Submit Your
          Assignment
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Please add remarks and/or attachment if you have any.
        </p>

        {/* Form */}
        <form className="space-y-5">
          {/* Remarks */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Remarks
            </label>
            <textarea
              placeholder="Enter your Remarks Here..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Attachments */}
          <div>
            <div className="flex justify-between text-center">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Attachments
              </label>

              <p className="text-[0.75rem] text-gray-600 mb-2">
                Max file size: 10MB
              </p>
            </div>

            <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <input type="file" name="" id="" />
            </div>

            {/* <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full text-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500">
              <i className="fas fa-paperclip text-gray-400"></i>

              <label
                htmlFor="file-upload"
                className="ml-2 text-gray-500 flex-1 cursor-pointer text-[0.75rem]"
              >
                Enter an URL or click on the attachment icon to upload a file
              </label>

              <input id="file-upload" type="file" className="hidden" required />
            </div> */}
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#344CC6] text-white py-2 px-6 rounded-md text-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Submit Assignment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitAssignment;

SubmitAssignment.propTypes = {
  onClose: PropTypes.func.isRequired,
};
