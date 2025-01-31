import { Icon } from "@iconify/react/dist/iconify.js";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-[80%] sm:w-[60%]">
        <div className="flex justify-between items-center pb-2">
            <div className="bg-[#E8EDFB] p-2 rounded-[50%]">
                <Icon
                    icon={"ic:outline-download"}
                    width={24}
                    color="#013B7D"
                />
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <Icon
                icon={"material-symbols:cancel-outline"}
                width={30}
                color="#013B7D"
            />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
