import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { User, Clock, AlertTriangle, Eye } from 'lucide-react';

export const InsiderThreatPanel = () => {
  const [insiderEvents, setInsiderEvents] = useState([]);

  useEffect(() => {
    const mockEvents = [
      {
        id: 1,
        employeeId: 'EMP-4521',
        name: 'Sarah Johnson',
        action: 'Price Override',
        details: 'Applied 45% discount on electronics',
        riskLevel: 'high',
        timestamp: '14:32',
        location: 'Houston Heights'
      },
      {
        id: 2,
        employeeId: 'EMP-7839',
        name: 'Mike Chen',
        action: 'Inventory Adjustment',
        details: 'Removed 50 units from system',
        riskLevel: 'medium',
        timestamp: '13:45',
        location: 'Dallas Central'
      },
      {
        id: 3,
        employeeId: 'EMP-2156',
        name: 'Lisa Rodriguez',
        action: 'After Hours Access',
        details: 'System login at 2:30 AM',
        riskLevel: 'low',
        timestamp: '02:30',
        location: 'Phoenix Metro'
      },
      {
        id: 4,
        employeeId: 'EMP-9374',
        name: 'David Kim',
        action: 'Multiple Refunds',
        details: '8 refunds processed in 15 minutes',
        riskLevel: 'high',
        timestamp: '11:20',
        location: 'Seattle Pike'
      }
    ];

    setInsiderEvents(mockEvents);
  }, []);

  const getRiskColor = (level) => {
    switch (level) {
      case 'high': return 'text-red-400 bg-red-400/10 border-red-400/20';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'low': return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      default: return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  const getRiskIcon = (level) => {
    switch (level) {
      case 'high': return <AlertTriangle className="h-4 w-4" />;
      case 'medium': return <Clock className="h-4 w-4" />;
      case 'low': return <Eye className="h-4 w-4" />;
      default: return <User className="h-4 w-4" />;
    }
  };

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Insider Threat Monitoring</h3>
        <div className="flex items-center space-x-2">
          <User className="h-4 w-4 text-blue-400" />
          <span className="text-sm text-slate-400">Zero Trust Mode</span>
        </div>
      </div>

      <div className="space-y-4 max-h-80 overflow-y-auto">
        {insiderEvents.map((event) => (
          <div key={event.id} className={`p-4 rounded-lg border ${getRiskColor(event.riskLevel)}`}>
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className={`p-2 rounded-lg ${getRiskColor(event.riskLevel)}`}>
                  {getRiskIcon(event.riskLevel)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-white">{event.name}</h4>
                    <span className="text-xs text-slate-400">({event.employeeId})</span>
                  </div>
                  <p className="text-sm text-slate-300 mt-1">{event.action}</p>
                  <p className="text-xs text-slate-400 mt-1">{event.details}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-slate-400">{event.location}</span>
                    <span className="text-xs text-slate-400">{event.timestamp}</span>
                  </div>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${getRiskColor(event.riskLevel)}`}>
                {event.riskLevel.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-slate-700/30 rounded-lg">
        <div className="flex items-center justify-between text-sm">
          <span className="text-slate-300">Today's Risk Score</span>
          <span className="text-yellow-400 font-medium">Medium (6.2/10)</span>
        </div>
        <div className="mt-2 bg-slate-600 rounded-full h-2">
          <div className="bg-yellow-400 h-2 rounded-full" style={{ width: '62%' }}></div>
        </div>
      </div>
    </Card>
  );
};
