import { CssBaseline } from '@material-ui/core';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './component/Home/navbar/NavBarComponent';
import PatronMember from './component/patron/PatronMember/PatronMember';
import PatronHome from './component/patron/PatronHome/PatronHome';
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