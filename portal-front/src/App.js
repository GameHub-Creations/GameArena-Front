import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Title from './components/Title';
import RegistrationForm from './components/RegistrationForm';
import SignInForm from './components/SignInForm';

function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Title />} />
          <Route path="/registration" element={<RegistrationForm />} />
          <Route path="/signin" element={<SignInForm />} />
        </Routes>
      </Router>
  );
}

export default App;
