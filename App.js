import React, { Component } from 'react';
import PageWrapper from './components/PageWrapper';
//moze alijas
import { BrowserRouter , Route, Link,Switch } from 'react-router-dom';

//Pages
import Home from './components/Pages/Home';
import About from './components/Pages/About';
import ContactUs from './components/Pages/ContactUs';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <PageWrapper>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={ContactUs} />
            <Route exact path="/team" component={Home} />
          </Switch>

        </PageWrapper>
      </BrowserRouter>
    );
  }

}

export default App;
