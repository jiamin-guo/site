import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} /> */}
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
