import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserProvider  } from './context/browser-context';

createRoot(document.getElementById('root')).render(
    <BrowserProvider>
        <App />
    </BrowserProvider>

)
