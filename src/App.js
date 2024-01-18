import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomePage';
import AboutScreen from './pages/AboutPage';
import Layout from './components/Layout';

function App() {
  return (
    <div className="ic_main_wrappr">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
