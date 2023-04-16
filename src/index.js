import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import {disableReactDevTools} from '@fvilers/disable-react-devtools'
import './styles.css'

if(process.env.NODE_ENV === 'production') disableReactDevTools()

ReactDOM.render(
    <App/>, document.getElementById('root')
);
