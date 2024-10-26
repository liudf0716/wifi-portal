import React from 'react';

interface LoginFormProps {
  checked: boolean;
  onCheckChange: (checked: boolean) => void;
  onConnect: () => void;
}

export function LoginForm({ checked, onCheckChange, onConnect }: LoginFormProps) {
  return (
    <div className="w-full max-w-md space-y-4 px-4">
      <label className="flex items-center justify-center space-x-2 cursor-pointer">
        <div 
          className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors
            ${checked ? 'bg-yellow-400 border-yellow-400' : 'border-gray-300'}`}
          onClick={() => onCheckChange(!checked)}
        >
          {checked && <div className="w-2 h-2 bg-white rounded-full" />}
        </div>
        <span className="text-sm text-gray-600">我已阅读并同意《入网须知》</span>
      </label>

      <button
        onClick={onConnect}
        disabled={!checked}
        className={`w-full py-3 rounded-full text-center font-medium transition-colors
          ${checked ? 'bg-yellow-400 text-black' : 'bg-gray-100 text-gray-400'}`}
      >
        立即连网
      </button>

      <button className="w-full py-3 rounded-full border border-gray-200 text-center">
        手机验证码连网
      </button>
    </div>
  );
}