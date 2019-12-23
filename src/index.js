// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';

import App from "./components/App";


// import Badge from './components/badge';

import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
/*const element = <h1>Hello, Platzi Badges!</h1>;*/
// const element = React.createElement('a', {href: 'https://google.com', target: '_blank'}, 'Ir a google');
// const element = <a href='https://google.com'> Google</a>;
// const jsx = (
//     <div>
//         <h1>Hola, soy Edwin Noriega</h1>
//         <p>Soy ingeniero Frontend.</p>
//     </div>
// );
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(jsx, container);


// ReactDOM.render(<Badge
//     firstName = "Edwin"
//     lastName = "Noriega"
//     avatar = "https://www.gravatar.com/avatar?id=identicon"
//     jobTitle = "Frontend Engineer"
//     twitter = "noriega2112"
// />, container);

ReactDOM.render(<App />, container);
