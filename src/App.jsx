import './App.css';
import Home from "./Home"
import Header from './Header';
import Footer from './Footer'
import SearchPage from './SearchPage';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';



function App() {
  return (

    // BEM
    <div className="App">
      {/* <h1>hello clever Programmer, Lets build the AIRBNB App</h1> */}
      <BrowserRouter>
        <Header />

        <Switch>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>

        </Switch>


        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
