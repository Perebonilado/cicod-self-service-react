import './App.css';
import './Mobile.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import Home from './screens/Home'
import StatusHistory from './screens/StatusHistory';
import TicketInfo from './screens/TicketInfo';
import TicketView from './screens/TicketView'

function App() {
  return (
    <Router>
      <Navbar businessName={'Business name'} />

      <Routes>

        <Route path='/' element={<Home />} exact />
        <Route path='/statushistory' element={<StatusHistory />} exact />
        <Route path='/ticketinfo' element={<TicketInfo />} exact />
        <Route path='/ticketview' element={<TicketView />} exact />


      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
