import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { Provider } from 'react-redux';
import {store} from './helpers';
import Routes from './Routes';
function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
