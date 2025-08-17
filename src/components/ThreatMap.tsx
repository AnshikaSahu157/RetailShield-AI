import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, AlertCircle, Shield, Clock } from 'lucide-react';

export const ThreatMap = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    // Simulate store data with threat levels
    const mockStores = [
      { id: 1, name: 'Dallas Central', lat: 32.7767, lng: -96.7970, threat: 'high', incidents: 3 },
      { id: 2, name: 'Houston Heights', lat: 29.7604, lng: -95.3698, threat: 'medium', incidents: 1 },
      { id: 3, name: 'Austin Downtown', lat: 30.2672, lng: -97.7431, threat: 'low', incidents: 0 },
      { id: 4, name: 'San Antonio Plaza', lat: 29.4241, lng: -98.4936, threat: 'safe', incidents: 0 },
      { id: 5, name: 'Phoenix Metro', lat: 33.4484, lng: -112.0740, threat: 'high', incidents: 2 },
      { id: 6, name: 'Denver Mile High', lat: 39.7392, lng: -104.9903, threat: 'medium', incidents: 1 },
      { id: 7, name: 'Seattle Pike', lat: 47.6062, lng: -122.3321, threat: 'safe', incidents: 0 },
      { id: 8, name: 'Portland Bridge', lat: 45.5152, lng: -122.6784, threat: 'low', incidents: 0 },
    ];
    setStores(mockStores);
  }, []);

  const getThreatColor = (threat) => {
    switch (threat) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-blue-500';
      case 'safe': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getThreatIcon = (threat) => {
    switch (threat) {
      case 'high': return <AlertCircle className="h-4 w-4 text-red-400" />;
      case 'medium': return <Clock className="h-4 w-4 text-yellow-400" />;
      case 'low': return <Shield className="h-4 w-4 text-blue-400" />;
      case 'safe': return <Shield className="h-4 w-4 text-green-400" />;
      default: return null;
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Threat Intelligence Map</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-400 rounded-full pulse-dot"></div>
          <span className="text-sm text-slate-400">Real-time Updates</span>
        </div>
      </div>

      {/* Simulated Map View */}
      <div className="bg-slate-900 rounded-lg p-4 mb-4 h-64 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 opacity-50"></div>
        <div className="relative h-full">
          {/* Map Grid Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="grid grid-cols-8 grid-rows-6 h-full gap-1">
              {Array.from({ length: 48 }, (_, i) => (
                <div key={i} className="border border-slate-600"></div>
              ))}
            </div>
          </div>
          
          {/* Store Markers */}
          {stores.map((store, index) => (
            <div
              key={store.id}
              className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${15 + (index * 10)}%`,
                top: `${20 + (index % 3) * 25}%`
              }}
            >
              <div className={`w-4 h-4 rounded-full ${getThreatColor(store.threat)} pulse-dot border-2 border-white`}>
              </div>
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 bg-slate-800 px-2 py-1 rounded text-xs text-white whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity">
                {store.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Store Status List */}
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {stores.map((store) => (
          <div key={store.id} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors">
            <div className="flex items-center space-x-3">
              {getThreatIcon(store.threat)}
              <div>
                <h4 className="text-sm font-medium text-white">{store.name}</h4>
                <p className="text-xs text-slate-400 capitalize">{store.threat} threat level</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-white">{store.incidents}</p>
              <p className="text-xs text-slate-400">incidents</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
