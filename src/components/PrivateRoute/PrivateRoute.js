import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router';
import {userContext} from '../../App';

function PrivateRoute({children, ...rest}) {
    const [loginUser] = useContext(userContext)
    return (
        <Route
          {...rest}
          render={({ location }) =>
          loginUser.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/login",
                  state: { from: location }
                }}
              />
            )
          }
        />
      );
}

export default PrivateRoute;
