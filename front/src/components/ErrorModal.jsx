import ReactDOM from 'react-dom';

const ErrorModal = ({ message, onClose }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
        <h2 className="text-xl font-bold mb-4">Greška prilikom slanja forme</h2>
        <p className="text-base">{message}
        <br />
        <br />
        Hvala na razumevanju, Vaš <span className="font-bold">Kredit Links</span>.
        </p>
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-[#6c2636] text-white rounded-md hover:bg-[#b72f4f]"
        >
          Zatvori
        </button>
      </div>
    </div>,
    document.getElementById('errorModal')
  );
};

export default ErrorModal;

