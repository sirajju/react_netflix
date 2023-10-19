import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import NotFound from './components/404'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='*' Component={NotFound} />
    </Routes>

  </Router>
);

