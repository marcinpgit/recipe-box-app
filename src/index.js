import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import Header from './components/Header';

ReactDOM.render(<Header />, document.getElementById('root'));
registerServiceWorker();