
import { Shield, Activity } from 'lucide-react';

export const Header = () => {
  return (
    <header className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-blue-400" />
              <div>
                <h1 className="text-2xl font-bold text-white">RetailShield AI</h1>
                <p className="text-xs text-slate-400">Real-Time Threat Intelligence</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></div>
              <span className="text-sm text-slate-300">Live Monitoring</span>
            </div>
            
            <div className="flex items-center space-x-2 bg-slate-800 px-3 py-1 rounded-lg">
              <Activity className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-slate-300">4,247 Stores</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
