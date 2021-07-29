import { CssBaseline } from "@material-ui/core";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./component/Navbar/NavBarComponent";
import PatronMember from "./component/Patron/PatronMember/PatronMember";
import PatronHome from "./component/Patron/PatronHome/PatronHome";
import LandingPage from "./component/Home/DepositorLandingPage";
import Depositor from "./component/DepositorManagement/DepositorHome/DepositorHome";
import Collector from "./component/CollectionManagement/CollectorHome";
import BlogPage from "./component/BlogComponent/BlogLandingComponent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
            <Route exact path="/blogs" component={BlogPage}/>
          {(localStorage.getItem("token") != undefined) ?
            <>
              <Route exact path="/patron" component={PatronMember} />
              <Route exact path="/patron/posts" component={PatronHome} />
              <Route exact path="/depositor" component={Depositor} />
              <Route exact path="/collector" component={Collector} />
            </>
            : <Redirect to="/" component={LandingPage} />}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;