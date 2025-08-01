import { useState } from 'react';
import NavBar from './components/NavBar';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
//import './App.css';


export default function App() {
  const [mailboxes, setMailboxes] = useState([]);

  function addBox(newBoxData) {
    const newBox = {
      _id: mailboxes.length + 1,
      ...newBoxData,
    };
    setMailboxes([...mailboxes, newBox]);
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>

        <Route path="/" element={<main><h1>Post Office</h1></main>} />
        
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
        

      </Routes>
    </BrowserRouter>
  );
}

