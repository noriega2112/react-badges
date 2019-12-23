import React from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css'
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
    const [query, setQuery] = React.useState('');
    const [ filteredBadges, setFilteredBadges ] = React.useState(badges);

    React.useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase());
        });

        setFilteredBadges(result)
    }, [ badges, query ]);

    return { query, setQuery, filteredBadges };    
}

function BadgesList(props){
    const badges = props.badges;

    const { query, setQuery, filteredBadges } = useSearchBadges(badges);
    
        if(filteredBadges.length === 0){
            return (
                <div>
                    <div className="form-group">
                        <label> Filter Badges</label>
                        <input  type="text" className="form-control" 
                            value={query}
                            onChange={(e) => {
                                setQuery(e.target.value)
                            }}
                        />
                    </div>
                    <h3>No badges were found</h3>
                    <Link to="/badges/new" className="btn btn-primary">¡Create new badge!</Link>
                </div>
            )
        }
        return (
            <div>
                <div className="form-group">
                    <label> Filter Badges</label>
                    <input  type="text" className="form-control" 
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value)
                        }}
                    />
                </div>

                <ul className="list-unstyled list">
                    {filteredBadges.map((badge)=> {
                        return(
                            <li className="container item-list" key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                                    <Gravatar className="pic" email={badge.email} />
                                    <ul className="lista">
                                        <li className="name">{badge.firstName} {badge.lastName}</li><br/>
                                        <li className="twitt">@{badge.twitter}</li><br/>
                                        <li>{badge.jobTitle}</li>
                                    </ul>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    
}
export default BadgesList;
