import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem
} from 'reactstrap';

// CSS
import './app.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

const App = () => {

  // MODULE FEDERATION
  // import ("nameApp/nameComponent")
  const HomePage = React.lazy(() => import("HomeApp/HomePage"));
  const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

  return(
    <Router>
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/contact">Contact</Link>
            </NavItem>
          </Nav>
        </Navbar>
        {/* React Router resource */}
        <Switch>
          <Route exact path='/'>
            <Suspense fallback={<div>Loading...</div>}>
              <HomePage />
            </Suspense>
          </Route>
          <Route exact path='/contact'>
            <Suspense fallback={<div>Loading...</div>}>
              <ContactPage />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  )

}

export default App;