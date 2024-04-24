import App from './app'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import "./normalize.css"
import "./index.scss"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
)
