import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import App from '../App';

const RouteMap= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <App /> } />
        <Route path="*" element= { <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteMap;