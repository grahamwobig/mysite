import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// Supports weights 100-900
import '@fontsource-variable/montserrat/wght.css';
// Supports weights 400-700
import '@fontsource-variable/lora/wght.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
