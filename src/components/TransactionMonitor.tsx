import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign, CreditCard, AlertCircle } from 'lucide-react';

export const TransactionMonitor = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [fraudData, setFraudData] = useState([]);

  useEffect(() => {
    const mockTransactionData = [
      { hour: '00:00', transactions: 1200, fraudulent: 12 },
      { hour: '04:00', transactions: 800, fraudulent: 8 },
      { hour: '08:00', transactions: 3200, fraudulent: 25 },
      { hour: '12:00', transactions: 4500, fraudulent: 35 },
      { hour: '16:00', transactions: 3800, fraudulent: 28 },
      { hour: '20:00', transactions: 2100, fraudulent: 18 },
    ];

    const mockFraudData = [
      { type: 'Gift Cards', count: 45, amount: '$12,450' },
      { type: 'Refund Abuse', count: 23, amount: '$8,920' },
      { type: 'Price Override', count: 18, amount: '$5,670' },
      { type: 'Account Takeover', count: 12, amount: '$3,240' },
    ];

    setTransactionData(mockTransactionData);
    setFraudData(mockFraudData);
  }, []);

  return (
    <Card className="bg-slate-800/50 border-slate-700 p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Transaction Monitoring</h3>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span className="text-sm text-slate-300">$2.4M Today</span>
          </div>
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4 text-red-400" />
            <span className="text-sm text-slate-300">0.8% Fraud Rate</span>
          </div>
        </div>
      </div>

      {/* Transaction Volume Chart */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-slate-300 mb-3">24h Transaction Volume</h4>
        <div className="h-32">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={transactionData}>
              <XAxis dataKey="hour" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis hide />
              <Bar dataKey="transactions" fill="#3b82f6" radius={[2, 2, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Fraud Detection Summary */}
      <div>
        <h4 className="text-sm font-medium text-slate-300 mb-3">Fraud Detection Summary</h4>
        <div className="space-y-2">
          {fraudData.map((item, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg">
              <div className="flex items-center space-x-3">
                <CreditCard className="h-4 w-4 text-red-400" />
                <span className="text-sm text-white">{item.type}</span>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-white">{item.count} cases</p>
                <p className="text-xs text-red-400">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
