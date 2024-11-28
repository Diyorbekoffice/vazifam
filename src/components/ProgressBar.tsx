import React from 'react';

interface ProgressBarProps {
  value: number;
  label: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, label }) => {
  const validValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="w-96 max-w-md p-4 rounded-lg overflow-hidden relative">
      <div className="flex items-center justify-between mb-2 gap-5">
        <span className=" text-blue-700 text-5xl">{validValue}%</span>
        <span className="text-lg font-medium text-white absolute bottom-6 left-10">{label}</span>
      </div>
      <div className="w-full h-10 bg-gray-300 rounded-lg">
        <div className="h-full bg-green-600 rounded-lg" style={{ width: `${validValue}%` }} />
      </div>
    </div>
  );
};

export default ProgressBar;

