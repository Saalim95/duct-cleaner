import PhoneIcon from "@mui/icons-material/Phone";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-blur-sm bg-white/30"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 p-6">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="bg-blue-100 rounded-full p-4">
            <PhoneIcon className="text-blue-600" sx={{ fontSize: 48 }} />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Thank You for Considering Clean Air Solution!
        </h2>

        <p className="text-gray-700 mb-6 text-center">
          For air duct cleaning estimates, please give our office a call at{" "}
          <a
            href="tel:248-349-8877"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            (248) 349-8877
          </a>
          .
        </p>

        <button
          onClick={onClose}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};
