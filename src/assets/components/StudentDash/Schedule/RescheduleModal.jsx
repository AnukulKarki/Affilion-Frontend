import PropTypes from "prop-types";

const timeZones = [
  { label: "Kathmandu", value: "+5:45" },
  { label: "Tokyo", value: "+9:00" },
  { label: "London", value: "+0:00" },
  { label: "New York", value: "-5:00" },
  { label: "Sydney", value: "+10:00" },
  { label: "Berlin", value: "+1:00" },
  { label: "Johannesburg", value: "+2:00" },
  { label: "Los Angeles", value: "-8:00" },
  { label: "Dubai", value: "+4:00" },
  { label: "Paris", value: "+1:00" },
];

const RescheduleModal = ({ onClose }) => {
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
          <i className="fas fa-pen text-primary"></i> &nbsp; Reschedule Your
          Class
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          You are about to request a rescheduling of your class.
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Reschedule Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reschedule Date
              </label>
              <input
                defaultValue={new Date().toISOString().split("T")[0]}
                type="date"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Reschedule Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Reschedule Time
              </label>
              <input
                defaultValue={new Date().toLocaleTimeString().split(" ")[0]}
                type="time"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Time Zone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time Zone
              </label>
              <select className="w-full border border-gray-300 bg-white rounded-md px-3 py-2 text-sm focus:outline-none">
                {timeZones.map((zone) => (
                  <option key={zone.value} value={zone.value}>
                    {zone.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Reschedule Reason */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Reschedule Reason
            </label>
            <textarea
              placeholder="Enter the Reason Here..."
              rows={4}
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
              type="submit"
              className="bg-[#344CC6] text-white py-2 px-6 rounded-md text-sm hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Request Reschedule
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RescheduleModal;

RescheduleModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
