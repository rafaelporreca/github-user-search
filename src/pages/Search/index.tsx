import React, { useState } from 'react';
import './styles.scss';
import SearchCard from 'pages/Search/components/SearchCard';
import Button from 'core/components/Button';
import { makeRequest } from 'core/Utils/request';
import ImageLoader from './components/Loaders/ImageLoader';
import InfoLoader from './components/Loaders/InfoLoader';
import SearchDetails from './components/SearchDetails';
import { User, UserResponse } from 'core/types/User';
import { Link } from 'react-router-dom';
import Dayjs from 'dayjs'
import dayjs from 'dayjs';

type FormState = {
    search: string;
}

type FormEvent = React.ChangeEvent<HTMLInputElement>;

const Search = () => {
    const [formData,setFormData] = useState<FormState>({
        search: ''
    });

    const [user, setUser] = useState<User>();
    const [isLoading, setIsLoading] = useState(false);
    const [isCarregou, setIsCarregou] = useState(true);

    const handleOnChange = (event: FormEvent) =>{
        const name = event.target.name;
        const value = event.target.value;

        setFormData(data => ({ ...data,[name]:value }));
    }

    const handleSubimit = (event: React.FormEvent<HTMLFormElement>) =>{
        setIsLoading(true);

        event.preventDefault();
        const payload = {
            ...formData
        }

        makeRequest({url: formData.search, method:'GET', data: payload})
        .then(response => setUser(response.data))
        .finally(() => setIsCarregou(false));
    }

    function formataData(data: string){
        return Dayjs(data)
            .locale("pt-br)")
            .format("DD/MM/YYYY");
    }

    return(
        <div>
            <form onSubmit={handleSubimit}>
                <SearchCard>
                    <div className="search-content">
                        <p className="search-title">Encontre um perfil Github</p>
                        <input type="text" className="form-control input-search" placeholder="Usuário Github" value={formData.search} name="search" onChange={handleOnChange}/>
                        <Button text="Encontrar" />
                    </div>
                </SearchCard>
            </form>
            {isLoading ? 
                (<>  
                    <div className="search-details">
                        <div className="search-image">
                            {isCarregou ? <ImageLoader/> : (
                                <>
                                    <img src={user?.avatar_url} className="user-img-details"/>
                                    <div className="search-image-perfil">
                                        <a href={user?.html_url} target="blank">
                                            <Button text="Ver perfil"/>
                                        </a>
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="search-info">
                            {isCarregou ? <InfoLoader/> :(
                                <>  
                                    
                                        <ul className="ul-details">
                                            <li className="list-details">
                                                <div className="search-info-public maior">
                                                    <p className="details-info-public">Repositórios públicos: {user?.public_repos}</p>
                                                </div>
                                            </li>
                                            <li className="list-details">
                                                <div className="search-info-public medio">
                                                    <p className="details-info-public">Seguidores: {user?.followers}</p>
                                                </div>
                                            </li>
                                            <li className="list-details">
                                                <div className="search-info-public menor">
                                                    <p className="details-info-public">Seguindo: {user?.following}</p>
                                                </div>
                                            </li>
                                        </ul>
                                                                    
                                    <div className="search-info-deatails">
                                        <p className="search-info-title">Informações</p>
                                        <div className="info-details">
                                            <p className="info-details-p">Empresa:&nbsp;</p><p className="info-details-user">{user?.company} </p>
                                        </div>
                                        <div className="info-details">
                                            <p className="info-details-p">Website/Blog:&nbsp;</p><p className="info-details-user">{user?.blog} </p>
                                        </div>
                                        <div className="info-details">
                                            <p className="info-details-p">Localidade:&nbsp;</p><p className="info-details-user">{user?.location} </p>
                                        </div>
                                        <div className="info-details">
                                            <p className="info-details-p">Membro desde:&nbsp;</p><p className="info-details-user">{formataData(user!.created_at!)} </p>
                                        </div>
                                    </div>
                                    
                                </>
                            )}
                        </div>                        
                    </div> 
                
                </>):
                <>                     
                </>
            }
            
        </div>
    );
}

export default Search;