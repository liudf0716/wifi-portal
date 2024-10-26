import React, { useState } from 'react';
import { WifiLogo } from './components/WifiLogo';
import { LoginForm } from './components/LoginForm';

function App() {
  const [checked, setChecked] = useState(false);

  const handleConnect = () => {
    if (checked) {
      console.log('Connecting to WiFi...');
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      <main className="flex-1 flex flex-col items-center px-6">
        <div className="text-gray-600 text-center mt-8 mb-12 text-lg">
          微信授权，一键连网
        </div>

        <div className="flex-1 flex items-center justify-center mb-8">
          <WifiLogo />
        </div>

        <LoginForm 
          checked={checked}
          onCheckChange={setChecked}
          onConnect={handleConnect}
        />

        <div className="text-gray-400 text-xs mt-auto mb-8">
          powered by apfree-wifidog
        </div>
      </main>
    </div>
  );
}

export default App;