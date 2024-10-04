import React, { useState } from 'react';

interface ModalProps {
  onClose: () => void;
  onGenerate: () => void;
  response: string;
}

const Modal: React.FC<ModalProps> = ({ onClose, onGenerate, response }) => {
  const [input, setInput] = useState('');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" onClick={onClose}>
      <div className="bg-white p-8 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 mb-4 w-full"
          placeholder="Type your command here"
        />
        <button onClick={onGenerate} className="bg-blue-500 text-white p-2 rounded">
          Generate
        </button>
        {response && (
          <div className="mt-4 border p-2">
            <p>{response}</p>
            <button className="bg-green-500 text-white p-2 rounded mt-2">
              Insert
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
