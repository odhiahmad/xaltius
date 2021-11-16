import { memo, ComponentType } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Public, Private } from "./routes";
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
    <BrowserRouter>
      <Switch>
        {!isLogin &&
          Public.map(({ key, path, component }) => (
            <Route key={key} path={path} component={component} exact></Route>
          ))}
        {isLogin &&
          Private.map(({ key, path, component }) => (
            <Route key={key} path={path} component={component} exact></Route>
          ))}
        <Route path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: StateReduxAuth) => ({
  isLogin: state.AuthReducer.isLogin,
});

const withConnect = connect(mapStateToProps, null);

export default compose<ComponentType>(withConnect, memo)(App);
