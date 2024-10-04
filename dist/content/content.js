import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AIIcon from '../components/AIIcon';
import Modal from '../components/Modal';
const Content = () => {
    const [isIconVisible, setIsIconVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [response, setResponse] = useState('');
    const handleFocus = () => setIsIconVisible(true);
    const handleBlur = () => setIsIconVisible(false);
    const handleGenerate = () => {
        setResponse("Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.");
    };
    return (React.createElement("div", null,
        React.createElement("textarea", { onFocus: handleFocus, onBlur: handleBlur, className: "w-full p-2 border", placeholder: "Type your message..." }),
        React.createElement(AIIcon, { onClick: () => setIsModalOpen(true), visible: isIconVisible }),
        isModalOpen && React.createElement(Modal, { onClose: () => setIsModalOpen(false), onGenerate: handleGenerate, response: response })));
};
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(React.createElement(Content, null), app);
