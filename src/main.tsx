import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './components/App/App'

const $rootElement = document.getElementById('root')!;
const reactRoot = ReactDOM.createRoot($rootElement);
const firstNode = <React.StrictMode><App /></React.StrictMode>;
reactRoot.render(firstNode);
