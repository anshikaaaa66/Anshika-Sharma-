import React from 'react';
const AIIcon = ({ onClick, visible }) => {
    return (visible && (React.createElement("button", { onClick: onClick, className: "absolute right-4 bottom-4 p-2 bg-blue-500 rounded-full" },
        React.createElement("img", { src: "/path-to-icon.svg", alt: "AI Icon", className: "w-6 h-6" }))));
};
export default AIIcon;
