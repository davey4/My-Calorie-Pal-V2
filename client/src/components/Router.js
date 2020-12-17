import { Route, Switch, withRouter } from "react-router-dom";

// import Protectedroute from "./ProtectedRoute";

import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Layout from "../pages/Layout";
import Diary from "../pages/Diary";

const Router = (props) => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route
          path="/diary"
          component={() => (
            <Layout>
              <Diary />
            </Layout>
          )}
        />
      </Switch>
    </main>
  );
};

export default withRouter(Router);
