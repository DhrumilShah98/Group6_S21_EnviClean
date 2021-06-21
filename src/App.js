import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar/NavBarComponent";
import PatronMember from "./component/Patron/PatronMember/PatronMember";
import PatronHome from "./component/Patron/PatronHome/PatronHome";
import DepositorLandingPage from "./component/Home/DepositorLandingPage";
import Depositor from "./component/DepositorManagement/DepositorHome/DepositorHome";
import Collector from "./component/CollectionManagement/CollectorHome";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={DepositorLandingPage} />
          <Route exact path="/patron" component={PatronMember} />
          <Route exact path="/patron/posts" component={PatronHome} />
          <Route exact path="/depositor" component={Depositor} />
          <Route exact path="/collector" component={Collector} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
