import React from 'react';

interface PopupProps {
  onClose: () => void;
}

const SubscriptionModal: React.FC<PopupProps> = ({ onClose }) => {

  const handlePayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="popup-inner bg-white p-8 rounded-lg border border-gray-300">
        <h2 className="font-spaceGrotesk font-bold text-2xl mb-4">Pay $0.99 to view content</h2>
        <button
          onClick={handlePayment}
          className="rounded-lg border-[1px] border-black bg-black text-white w-full py-3 px-8"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default SubscriptionModal;
