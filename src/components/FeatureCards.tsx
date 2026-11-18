'use client';

import { ComponentType } from 'react';

interface Feature {
  icon: ComponentType<{ size?: number }>;
  title: string;
  desc: string;
}

interface FeatureCardsProps {
  features: Feature[];
}

export default function FeatureCards({ features }: FeatureCardsProps) {
  return (
    <div className="flex flex-col space-y-4">
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-slate-900">Highlights</h3>
        <p className="text-xs text-slate-500">Features for selected view</p>
      </div>

      <div className="space-y-3">
        {features.map((feature, idx) => {
          const Icon = feature.icon;
          return (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 transition shadow-sm"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-3 border border-blue-100">
                <Icon size={18} />
              </div>
              <h4 className="font-semibold text-sm text-slate-900 mb-1">{feature.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}