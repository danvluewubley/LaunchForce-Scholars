import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./index.css";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Community } from "./pages/Community";
import { Resources } from "./pages/Resources";
import { Team } from "./pages/Team";
import { EmailList } from "./pages/EmailList";
import { ProgramCompass } from "./pages/ProgramCompass";
import { Match } from "./pages/Match";
import { Admission } from "./pages/Admission";


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-dark-gray">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/community" element={<Community />} />
            <Route path="/program-compass" element={<ProgramCompass />} />
            <Route path="/match-revise" element={<Match />} />
            <Route path="/admissions-insider" element={<Admission />} />
            <Route path="/email-list" element={<EmailList />} />
            <Route path="/apply" element={<Team />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
