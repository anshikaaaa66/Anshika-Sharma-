import React from 'react';

interface AIIconProps {
  onClick: () => void;
  visible: boolean;
}

const AIIcon: React.FC<AIIconProps> = ({ onClick, visible }) => {
  return (
    visible && (
      <button onClick={onClick} className="absolute right-4 bottom-4 p-2 bg-blue-500 rounded-full">
        <img src="/path-to-icon.svg" alt="AI Icon" className="w-6 h-6" />
      </button>
    )
  );
};

export default AIIcon;
