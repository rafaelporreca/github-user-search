import React, { useState } from 'react';
import './styles.scss';
import SearchCard from 'pages/Search/components/SearchCard';
import Button from 'core/components/Button';
import { makeRequest } from 'core/Utils/request';

type FormState = {
    search: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
    const [formData,setFormData] = useState<FormState>({
        search: ''
    });

    const handleOnChange = (event: FormEvent) =>{
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data,[name]:value }));
    }

    const handleSubimit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const payload = {
            ...formData
        }

        makeRequest({url: formData.search, method:'GET', data: payload});
    }



    return(
        <form onSubmit={handleSubimit}>
            <SearchCard>
                <div className="search-content">
                    <p className="search-title">Encontre um perfil Github</p>
                    <input type="text" className="form-control input-search" placeholder="Usuário Github" value={formData.search} name="search" onChange={handleOnChange}/>
                    <Button text="Encontrar" />
                </div>
            </SearchCard>
        </form>
    );
}

export default Search;