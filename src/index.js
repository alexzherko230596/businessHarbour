import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeScreen from './screens/HomeScreen';
import './i18n' 

ReactDOM.render(
    <React.StrictMode>
      <Suspense fallback={<div>Loading...</div>} >
        <HomeScreen />
      </Suspense>
    </React.StrictMode>,
  document.getElementById('root')
);