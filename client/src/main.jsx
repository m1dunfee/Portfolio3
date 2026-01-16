import { StrictMode } from 'react'
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import ScrollToTop from './components/ScrollToTop';
import './index.css'
import './index.scss';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </StrictMode>,
)
