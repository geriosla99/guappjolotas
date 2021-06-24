import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import SelectFood from './containers/SelectFood';

import { BrowserRouter, Switch, Route  } from 'react-router-dom';

class Root extends Component{
  render(){
      return(
          <BrowserRouter basename={'/'}>
              <Switch>
                  <Route exact path={`/`} component={App}/>
                  <Route exact path={`/:category/:food`} component={SelectFood}/>
              </Switch>
          </BrowserRouter>
      )
  }
}

ReactDOM.render(
    <Root />,
  document.getElementById('root')
);
