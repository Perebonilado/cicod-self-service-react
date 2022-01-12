import './App.css';
import './Mobile.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './screens/Home'
import StatusHistory from './screens/StatusHistory';
import TicketInfo from './screens/TicketInfo';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} exact />
        <Route path='/statushistory' element={<StatusHistory />} exact />
        <Route path='/ticketinfo' element={<TicketInfo />} exact />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
