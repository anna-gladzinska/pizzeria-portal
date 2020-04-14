import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import BookingNew from './components/views/BookingNew/BookingNew';
import Booking from './components/views/Booking/Booking';
import EventsNew from './components/views/EventsNew/EventsNew';
import Events from './components/views/Events/Events';
import Waiter from './components/views/Waiter/WaiterContainer';
import OrderNew from './components/views/OrderNew/OrderNew';
import Order from './components/views/Order/Order';
import Kitchen from './components/views/Kitchen/Kitchen';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import store from './redux/store';

const theme = createMuiTheme({
  palette: {
    primary: {main: '#2B4C6F'},
  },
});

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            <MainLayout>
              <Switch>
                <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
                <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={BookingNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/*`} component={Booking} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={EventsNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/tables/events/*`} component={Events} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={OrderNew} />
                <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/*`} component={Order} />
                <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              </Switch>
            </MainLayout>
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
