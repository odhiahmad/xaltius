import { memo, ComponentType } from "react";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Public } from "./routes";
import { NotFound } from "./pages";
import { connect, useDispatch } from "react-redux";
import { compose } from "redux";
import { getToken } from "utils/cookie";
import { login } from "redux/modules/auth/action";
import { setUpAxios } from "services";

interface StateReduxAuth {
  AuthReducer: {
    isLogin: Boolean;
  };
}
setUpAxios();
function App({ isLogin = false }) {
  const dispatch = useDispatch();
  const token = getToken();

  if (token) {
    console.log(isLogin);
    dispatch(login());
  }
  return (
    <HashRouter>
      <Switch>
        {Public.map(({ key, path, component }) => (
          <Route key={key} path={path} component={component} exact></Route>
        ))}

        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
}

const mapStateToProps = (state: StateReduxAuth) => ({
  isLogin: state.AuthReducer.isLogin,
});

const withConnect = connect(mapStateToProps, null);

export default compose<ComponentType>(withConnect, memo)(App);
