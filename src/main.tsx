
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.tsx'
import './index.css'

const rootElement = document.getElementById("root");

// Make sure the root element exists
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

// Create a simple splash screen
const renderSplashScreen = () => {
  const splashElement = document.createElement("div");
  splashElement.style.display = "flex";
  splashElement.style.justifyContent = "center";
  splashElement.style.alignItems = "center";
  splashElement.style.height = "100vh";
  splashElement.style.width = "100vw";
  splashElement.style.position = "fixed";
  splashElement.style.top = "0";
  splashElement.style.left = "0";
  splashElement.style.backgroundColor = "#f9fafb";
  splashElement.style.zIndex = "9999";
  
  const loader = document.createElement("div");
  loader.className = "loading-spinner";
  loader.style.width = "40px";
  loader.style.height = "40px";
  loader.style.border = "4px solid #e5e7eb";
  loader.style.borderTopColor = "#3b82f6";
  loader.style.borderRadius = "50%";
  loader.style.animation = "spin 1s linear infinite";
  
  const style = document.createElement("style");
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  
  document.head.appendChild(style);
  splashElement.appendChild(loader);
  document.body.appendChild(splashElement);
  
  return splashElement;
};

// Render the app
const renderApp = () => {
  const splash = renderSplashScreen();
  
  // Remove splash screen after app is rendered
  setTimeout(() => {
    if (splash && document.body.contains(splash)) {
      splash.style.opacity = "0";
      splash.style.transition = "opacity 0.3s ease";
      setTimeout(() => {
        if (document.body.contains(splash)) {
          document.body.removeChild(splash);
        }
      }, 300);
    }
  }, 500);
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
};

// Render the app
renderApp();
