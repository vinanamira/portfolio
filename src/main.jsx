/**
* @copyright 2025 Vina Namira
* @license Apache-2.0
*/

/**
 * Node modules
 */
import { StrictMode } from 'react' 
import { createRoot } from 'react-dom/client'

/**
 * Components
 */
import './index.css'
import 'lenis/dist/lenis.css'

/**
 * CSS link
 */
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
