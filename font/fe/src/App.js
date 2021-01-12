import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminLayout from './layout/admin/AdminLayout'
import { ADMIN_ROUTES } from './routes'
import configureStore from './configureStore/index'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

function App() {
  const renderAdminLayout = ()=>{
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map(route => {
      return <AdminLayout 
              key={route.path} 
              path={route.path}
              name={route.name}
              exact={route.exact}
              component={route.component}
              />
    });
    return xhtml;
  }
  return (
    <Provider store = {store}>
      <div className="App">
      <Router>
        <CssBaseline/>
        <ToastContainer/>
        <Switch>
          {renderAdminLayout()}
        </Switch>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
