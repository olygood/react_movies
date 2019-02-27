import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ReactComponent } from '*.svg';

/*const Composant1 = () =>{
    return <h1>hello oli World</h1>
}
*/

class Composant1 extends React.Component {
    render() {
   return <h1>Hello les amis</h1>
    }
}



ReactDOM.render(<Composant1 />, document.getElementById('root'));


serviceWorker.unregister();
