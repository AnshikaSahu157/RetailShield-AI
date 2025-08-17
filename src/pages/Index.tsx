
import React, { useState, useEffect } from 'react';
import { ThreatMap } from '@/components/ThreatMap';
import { LiveAlerts } from '@/components/LiveAlerts';
import { TransactionMonitor } from '@/components/TransactionMonitor';
import { AIResponder } from '@/components/AIResponder';
import { SecurityMetrics } from '@/components/SecurityMetrics';
import { InsiderThreatPanel } from '@/components/InsiderThreatPanel';
import { Header } from '@/components/Header';

const Index = () => {
  const [realTimeUpdates, setRealTimeUpdates] = useState(true);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Security Metrics Overview */}
        <SecurityMetrics />
        
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Threat Map - Takes up 2 columns on large screens */}
          <div className="xl:col-span-2">
            <ThreatMap />
          </div>
          
          {/* Live Alerts Panel */}
          <div className="space-y-6">
            <LiveAlerts />
            <AIResponder />
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Transaction Monitor */}
          <TransactionMonitor />
          
          {/* Insider Threat Panel */}
          <InsiderThreatPanel />
        </div>
      </div>
    </div>
  );
};

export default Index;
