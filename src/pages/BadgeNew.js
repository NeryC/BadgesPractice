import React from 'react';

import './styles/BadgeNew.css'
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge.js';
import BadgeForm from '../components/BadgeForm.js'
import avatar from '../images/MyAvatar.jpg';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={header} alt='Logo' />
        </div>
        <div className='container'>
            <div className="row">
              <div className="col-6">
                <Badge 
                  firstName='Nery' 
                  lastName='Cano' 
                  twitter='nery_cano0'
                  jobTitle='Informatics Engineer'
                  avatarImage={avatar} 
                />
              </div>

              <div className="col-6">
                <BadgeForm />
              </div>
            </div>
        </div>
      </div>
    )
  }
}
export default BadgeNew;