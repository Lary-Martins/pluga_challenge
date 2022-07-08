import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from '../pages/Home';

const RouteMap= () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element= { <Home /> } />
        <Route path="*" element= { <Navigate to="/" /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteMap;