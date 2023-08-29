import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-70 bg-black z-50">
      <div className="w-10 h-10 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

export default Loading;
