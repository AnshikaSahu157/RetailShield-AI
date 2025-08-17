import React from 'react';
import { Card } from '@/components/ui/card';
import { Shield, AlertTriangle, TrendingUp, Users } from 'lucide-react';

export const SecurityMetrics = () => {
  const metrics = [
    {
      title: 'Threats Blocked',
      value: '1,247',
      change: '+12%',
      changeType: 'positive',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      title: 'Active Alerts',
      value: '23',
      change: '-8%',
      changeType: 'negative',
      icon: AlertTriangle,
      color: 'text-red-400'
    },
    {
      title: 'Fraud Prevented',
      value: '$2.4M',
      change: '+34%',
      changeType: 'positive',
      icon: TrendingUp,
      color: 'text-blue-400'
    },
    {
      title: 'Insider Incidents',
      value: '7',
      change: '+2',
      changeType: 'warning',
      icon: Users,
      color: 'text-yellow-400'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((metric, index) => (
        <Card key={index} className="bg-slate-800/50 border-slate-700 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 text-sm font-medium">{metric.title}</p>
              <p className="text-2xl font-bold text-white mt-1">{metric.value}</p>
              <div className="flex items-center mt-2">
                <span className={`text-sm font-medium ${
                  metric.changeType === 'positive' ? 'text-green-400' :
                  metric.changeType === 'negative' ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {metric.change}
                </span>
                <span className="text-slate-500 text-xs ml-1">vs last week</span>
              </div>
            </div>
            <metric.icon className={`h-8 w-8 ${metric.color}`} />
          </div>
        </Card>
      ))}
    </div>
  );
};
