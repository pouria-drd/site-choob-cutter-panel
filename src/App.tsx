import { BrowserRouter } from 'react-router-dom'
import CustomRoutes from './router/CustomRoutes'

import './assets/styles/App.css'

function App() {

  return (
    <BrowserRouter>
      <CustomRoutes />
    </BrowserRouter>
  )
}

export default App
