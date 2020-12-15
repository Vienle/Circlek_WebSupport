import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AdminLayout from './layout/admin/AdminLayout'
import { ADMIN_ROUTES } from './routes'

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
    <div className="App">
      <Router>
        <CssBaseline/>
        <Switch>
          {renderAdminLayout()}
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
