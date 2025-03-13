
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Check for browser support of certain features
const supportsGPUAcceleration = 'gpu' in navigator;
if (supportsGPUAcceleration) {
  document.documentElement.classList.add('gpu-accelerated');
}

// Detect slow connections
if ('connection' in navigator) {
  const connection = (navigator as any).connection;
  if (connection && (connection.saveData || connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g')) {
    document.documentElement.classList.add('reduced-motion');
  }
}

// Create the app with error boundary
const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
