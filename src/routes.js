import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Page1 from "./components/page1";
import Page2 from "./components/page2";
const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Page1} />
            <Route path="/" component={Page2} />
      </Switch>
      </BrowserRouter>
    )
}

export default Routes
