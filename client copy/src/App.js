import './App.css';
import HomePage from './pages/HomePage';
import ProducerSignup from './pages/ProducerSignup';
import ConsumerSignup from './pages/ConsumerSignup';
import ProducerLogin from './pages/ProducerLogin';
import ConsumerLogin from './pages/ConsumerLogin';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProducerDashboard from './pages/ProducerDashboard';
import ConsumerDashboard from './pages/ConsumerDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/producer-signup" element={<ProducerSignup />} />
        <Route path="/consumer-signup" element={<ConsumerSignup />} />
        <Route path="/producer-login" element= {<ProducerLogin />} />
        <Route path="/consumer-login" element= {<ConsumerLogin />} />
        <Route path="/producer-dashboard" element= {<ProducerDashboard />} />
        <Route path="/consumer-dashboard" element= {<ConsumerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
