import React from 'react';

import './styles/BadgesList.css'; 
import twitterLogo from '../images/twitter.svg';
import Gravatar from './Gravatar'
import { Link } from 'react-router-dom';

function useSearchBadges(badges){
  const [query,setQuery] = React.useState('');
  const [filteredBadges,setFilteredBadges] = React.useState(badges);

  React.useMemo(() =>{
      const result = badges.filter(badge =>{
      return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
    })
    setFilteredBadges(result)
  },[badges,query]);

  return {query,setQuery,filteredBadges};
}

function BadgesList(props){
  const badges = props.badges;

  const {query,setQuery,filteredBadges} = useSearchBadges(badges);

  if (filteredBadges.length === 0 ) {
    return(
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input type="text" className='form-control'
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create a new badge
        </Link>
      </div>
    );
  }
  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input type="text" className='form-control'
          value={query}
          onChange={(e)=>{
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id}>
              <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <Gravatar className="userLogo" email={badge.email} />
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
              </Link>
            </li>
          );
        })}
      </ul>  
    </div>
  );
}
export default BadgesList;