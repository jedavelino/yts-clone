import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Index from './pages/Index'
import Browse from './pages/Browse'
import Movie from './pages/Movie'

function App() {
  return (
    <Router>
      <Header />
        <Route exact path="/" component={Index} />
        <Route exact path="/browse-movies" component={Browse} />
        <Route exact path="/browse-movies/:id" component={Movie} />
      <Footer />
    </Router>
  );
}

export default App;
