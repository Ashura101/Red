import React, {useEffect} from 'react';
import Counter from './src/counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';
import {requestUserPermission} from './src/utils/notifications';

const App = () => {
  useEffect(() => {
    requestUserPermission();
  }, []);

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
