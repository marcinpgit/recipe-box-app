import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import RecipeApp from './components/RecipeApp';

ReactDOM.render(<RecipeApp />, document.getElementById('root'));
registerServiceWorker();