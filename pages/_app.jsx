import '../styles/globals.css';
import LayOut from '../components/LayOut';
import {Provider} from 'react-redux';
import {store , persistor} from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

function MyApp({Component, pageProps}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <LayOut>
          <Component {...pageProps} />
        </LayOut>
      </PersistGate>
    </Provider>
  );
}
export default MyApp
