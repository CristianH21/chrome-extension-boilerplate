import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const SHADOW_DOM_ID = 'cappi-app';
const CONTAINER_ID = 'cappi-container';

// Find the shadow DOM container
const shadowHost = document.getElementById(SHADOW_DOM_ID);
const shadowRoot = shadowHost ? shadowHost.shadowRoot : null;
const appContainer = shadowRoot ? shadowRoot.getElementById(CONTAINER_ID) : null;

if (appContainer) {
  const root = createRoot(appContainer);
  root.render(<App />);
} else {
  console.error('React app container not found');
}