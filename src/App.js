import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import HomePage from './components/home/HomePage';
import Header from './components/common/Header';
import Weather from './components/weather/WeatherPage';
import PageNotFound from './components/common/PageNotFound';
import store from './store';

function App() {
  return (
    <div className="container-fluid">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/weather" component={Weather} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
