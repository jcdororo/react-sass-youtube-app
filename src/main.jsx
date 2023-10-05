import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import './scss/main.scss'
import { BrowserRouter } from 'react-router-dom'
import { SearchContextProvider } from './context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchContextProvider>
      <App />
    </SearchContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
