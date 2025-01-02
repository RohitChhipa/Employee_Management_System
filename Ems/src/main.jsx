import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Authprovider from './context/Authprovider.jsx'
import { setLocalStorage } from './utils/localstorage.jsx'



// Initialize local storage
setLocalStorage();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Authprovider>
        <App />

        </Authprovider>

  </React.StrictMode>,
)
