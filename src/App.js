import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomePage';
import AboutScreen from './pages/AboutPage';
import Layout from './components/Layout';
import InnerLayout from './components/InnerLayout';

function App() {
  return (
    <div className="ic_main_wrappr">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="about" element={<AboutScreen />} />
          <Route path="template-inner" element={<InnerLayout />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
