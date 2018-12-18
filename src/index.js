import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')

);
registerServiceWorker();



// class BrowserRouter extends React.Component {
//   static propTypes = {
//     basename: PropTypes.string,
//     forceRefresh: PropTypes.bool,
//     getUserConfirmation: PropTypes.func,
//     keyLength: PropTypes.number,
//     children: PropTypes.node
//   }
//
//   history = createHistory(this.props)
//
//   render() {
//     return <Router history={this.history} children={this.props.children}  />
//   }
// }
