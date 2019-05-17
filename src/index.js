import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import ProtoCardTemplate from './ProtoCardTemplate';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ProtoCardTemplate/>, document.getElementById('topics'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();