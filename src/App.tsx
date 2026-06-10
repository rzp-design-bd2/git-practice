import { useState } from 'react';
import PaymentMethods from './PaymentMethods';
import PaymentMethodsDefault from './PaymentMethodsDefault';
import ControlPanel, { type Mode } from './ControlPanel';
import { defaultConfig, type CardConfig } from './config';

export default function App() {
  const [mode, setMode] = useState<Mode>('default');
  const [config, setConfig] = useState<CardConfig>(defaultConfig);

  return (
    <div className="min-h-screen w-full bg-[#e9ecf1] py-8">
      {/* Phone preview — always horizontally centered in the viewport */}
      <div className="flex justify-center">
        <div
          className="relative shadow-2xl rounded-[12px] overflow-hidden bg-white"
          style={{ width: 375, height: 766 }}
        >
          {mode === 'default' ? <PaymentMethodsDefault /> : <PaymentMethods config={config} />}
        </div>
      </div>

      {/* Card config — pinned to the right edge, always visible.
       *  Contains the Default/Customize toggle as its header. */}
      <aside className="fixed right-6 top-8 w-[320px] max-h-[calc(100vh-4rem)] overflow-y-auto">
        <ControlPanel
          mode={mode}
          onModeChange={setMode}
          config={config}
          onChange={setConfig}
        />
      </aside>
    </div>
  );
}
