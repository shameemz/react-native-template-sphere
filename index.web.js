import React from 'react';
import ReactNative from 'react-native';
import App from './src/App';
import registerServiceWorker from './src/registerServiceWorker';

ReactNative.render(<App />, document.getElementById('root'));
registerServiceWorker();
