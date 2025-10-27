import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header';
import './style/main.css'
import Welcome from './components/Welcome';
import SafeSpace from './components/SafeSpace';
import Logos from './components/logos';
import OurServices from './components/OurServices';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Welcome/>
    <SafeSpace/>
    <Logos/>
    <OurServices/>
  </StrictMode>,
)
