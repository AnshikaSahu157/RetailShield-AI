import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { AlertTriangle, Clock, Eye, TrendingUp } from 'lucide-react';

export const LiveAlerts = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const mockAlerts = [
      {
        id: 1,
        type: 'fraud',
        severity: 'high',
        title: 'Suspicious Transaction Pattern',
        description: 'Multiple gift card purchases detected',
        location: 'Dallas Central',
        time: '2 min ago',
        icon: AlertTriangle
      },
      {
        id: 2,
        type: 'insider',
        severity: 'medium',
        title: 'Unauthorized Price Override',
        description: 'Employee ID 4521 - unusual discount activity',
        location: 'Houston Heights',
        time: '5 min ago',
        icon: Eye
      },
      {
        id: 3,
        type: 'anomaly',
        severity: 'low',
        title: 'Traffic Spike Detected',
        description: 'Unusual login attempts from single IP',
        location: 'Phoenix Metro',
        time: '8 min ago',
        icon: TrendingUp
      }
    ];

    setAlerts(mockAlerts);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setAlerts(prev => [
        {
          id: Date.now(),
          type: 'fraud',
          severity: 'medium',
          title: 'New Threat Detected',
          description: 'Automated monitoring flagged suspicious activity',
          location: 'Auto-Generated',
          time: 'Just now',
          icon: AlertTriangle
        },
        ...prev.slice(0, 4)
      ]);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      case 'low': return 'text-blue-400 bg-blue-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Live Security Alerts</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-red-400 rounded-full pulse-dot"></div>
          <span className="text-sm text-slate-400">{alerts.length} Active</span>
        </div>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto">
        {alerts.map((alert) => (
          <div key={alert.id} className="p-4 bg-slate-700/30 rounded-lg border-l-4 border-red-400 hover:bg-slate-700/50 transition-colors">
            <div className="flex items-start space-x-3">
              <div className={`p-2 rounded-lg ${getSeverityColor(alert.severity)}`}>
                <alert.icon className="h-4 w-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-medium text-white truncate">{alert.title}</h4>
                  <span className="text-xs text-slate-400">{alert.time}</span>
                </div>
                <p className="text-sm text-slate-300 mt-1">{alert.description}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-400">{alert.location}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${getSeverityColor(alert.severity)}`}>
                    {alert.severity.toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
