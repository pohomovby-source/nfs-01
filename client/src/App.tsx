import React from 'react';
import { Router, Route, Switch } from 'wouter';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import CarDetailPage from './pages/CarDetailPage';

function App() {
  return (
    <div className="min-h-screen">
      <Router>
        <Header />
        <main>
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/catalog" component={CatalogPage} />
            <Route path="/catalog/:category" component={CatalogPage} />
            <Route path="/car/:id" component={CarDetailPage} />
            <Route>
              <HomePage />
            </Route>
          </Switch>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;