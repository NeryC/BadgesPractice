import React from 'react';
import ReactDOM from 'react-dom';

// import Badge from './components/Badge.js';
import BadgeNew from './pages/BadgeNew.js'
// import avatar from './images/MyAvatar.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'

const container = document.getElementById('app');

ReactDOM.render(
    <BadgeNew />, 
    container
);


//<Badge 
// firstName='Nery' 
// lastName='Cano'
// avatarImage={avatar}  
// jobTitle='Informatics Engineer' 
// twitter='nery_cano0'
// />