import React from 'react';

import './styles/BadgesList.css'; 
import twitterLogo from '../images/twitter.svg';
import userLogo from '../images/bot.svg';

class BadgesList extends React.Component{
  render(){
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id}>
              <div className="card mb-3">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img className=" userLogo " src={userLogo} alt="User Logo"/>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title cardTitle">
                        {badge.firstName} {badge.lastName}
                      </h5>
                      <p className="card-text twitterText">
                        <img className='twitterImage' src={twitterLogo} alt="Twitter Logo"/>
                        @{badge.twitter}
                      </p>
                      <p className="card-text cardDescription">{badge.jobTitle}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <p>
                {badge.firstName} {badge.lastName}
              </p> */}
            </li>
          );
        })}
      </ul>  
    );
  }
}
export default BadgesList;