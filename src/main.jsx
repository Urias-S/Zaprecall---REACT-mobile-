import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CardsContent from "./QUESTIONS";
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App cardscontent = {CardsContent}/>
  </StrictMode>,
)
