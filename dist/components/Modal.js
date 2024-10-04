import React, { useState } from 'react';
const Modal = ({ onClose, onGenerate, response }) => {
    const [input, setInput] = useState('');
    return (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center", onClick: onClose },
        React.createElement("div", { className: "bg-white p-8 rounded shadow-lg", onClick: (e) => e.stopPropagation() },
            React.createElement("input", { type: "text", value: input, onChange: (e) => setInput(e.target.value), className: "border p-2 mb-4 w-full", placeholder: "Type your command here" }),
            React.createElement("button", { onClick: onGenerate, className: "bg-blue-500 text-white p-2 rounded" }, "Generate"),
            response && (React.createElement("div", { className: "mt-4 border p-2" },
                React.createElement("p", null, response),
                React.createElement("button", { className: "bg-green-500 text-white p-2 rounded mt-2" }, "Insert"))))));
};
export default Modal;
