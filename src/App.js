import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/Navbar/NavBarComponent';
import PatronMember from './component/Patron/PatronMember/PatronMember';
import PatronHome from './component/Patron/PatronHome/PatronHome';
import DepositorLandingPage from "./component/Home/DepositorLandingPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={DepositorLandingPage}/>
          <Route exact path="/patron" component={PatronMember} />
          <Route exact path="/patron/posts" component={PatronHome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;