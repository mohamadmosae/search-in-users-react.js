import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../node_modules/bootstrap/dist/css/bootstrap.rtl.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import App from './Components/App/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
