import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Header() {
  return (
    <div className="px-4 py-3 flex items-center justify-between border-b safe-top">
      <div className="flex items-center space-x-4">
        <ChevronLeft className="w-6 h-6 text-gray-400" />
        <ChevronRight className="w-6 h-6 text-gray-400" />
      </div>
      <div className="text-center flex-1">
        <div className="text-lg font-medium">登录</div>
      </div>
      <button className="text-blue-500 font-medium">完成</button>
    </div>
  );
}