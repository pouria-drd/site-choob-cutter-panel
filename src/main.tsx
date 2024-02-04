import React from 'react'
import App from './App.tsx'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { ToastProvider } from './components/Toast/ToastProvider.tsx'

import './assets/styles/index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </AuthProvider>
  </React.StrictMode>,
)
