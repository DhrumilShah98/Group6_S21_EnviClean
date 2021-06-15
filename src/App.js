import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/Navbar';
import PatronMember from './component/PatronMember/PatronMember';
import Home from './component/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/patron" component={PatronMember} />
          <Route exact path="/patron/posts" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;