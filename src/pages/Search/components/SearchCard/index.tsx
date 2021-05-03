import React from 'react'
import Button from 'core/components/Button';
import './styles.scss';

type Props = {
    children: React.ReactNode;
}

const SearchCard = ({children}: Props) => (
    <div className="search-container">    
        {children}        
    </div>
);

export default SearchCard;