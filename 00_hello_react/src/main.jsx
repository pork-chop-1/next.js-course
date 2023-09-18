import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.scss'

import { BrowserRouter } from 'react-router-dom'
import { FavoriteContextProvider } from './store/favorite-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode >
    <FavoriteContextProvider>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </FavoriteContextProvider>
  </StrictMode>
)
