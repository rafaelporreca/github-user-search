import React, { useEffect, useState } from 'react';
import { User } from 'core/types/User';
import { useParams } from 'react-router';
import { makeRequest } from 'core/Utils/request';
import './styles.scss';
import ImageLoader from '../Loaders/ImageLoader';
import InfoLoader from '../Loaders/InfoLoader';

type ParamType = {
    searchName: string
}

const SearchDetails = () => {

    const { searchName } = useParams<ParamType>();
    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        makeRequest({url: `${searchName}`})
        .then(response => setUser(response.data) )
        .finally(() => setIsLoading(false));
    },[searchName]);

    return(
        <div className="search-detail">
            <div className="search-image">
                <img src={user?.avatar_url}/>
            </div>        
            <div className="search-details">
                <InfoLoader />
            </div>
            
        </div>
    );
};

export default SearchDetails;

