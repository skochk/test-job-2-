import React from 'react';
import styles from './styles.module.scss';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

function Page({match}) {
    const[data,setData]=useState([]);
    const [constData,setConstData] = useState([]);
    const [search,setSearch] = useState([]);
    const [alphabeticalSort, setAlphabeticalSort] = useState(false);

    useEffect(()=>{
        axios.get(`http://swapi.dev/api${match.path}/`)
        .then(result=>{
            setData(result.data.results);
            setConstData(result.data.results)
        });
        
    },[])

    useEffect(()=>{
        if(match.url = '/films'){
            let tempArray = constData.filter(element=>{
                if(element['title'].toLowerCase().indexOf(search.toLowerCase()) == -1){
                    return false;
                }
                return true;
            })
            setData(tempArray);
        }else{
            let tempArray = constData.filter(element=>{
                if(element['name'].toLowerCase().indexOf(search.toLowerCase()) == -1){
                    return false;
                }
                return true;
            })
            setData(tempArray);
        }
        
    },[search]);

    useEffect(()=>{
        let tempArray=[];
        if(match.url = '/films'){
            if(alphabeticalSort == true){
                tempArray = data.sort((a,b)=>a.title.localeCompare(b.name));
            }else{
                tempArray = data.sort((a,b)=>b.title.localeCompare(a.name));
            }
            setData(tempArray);
        }else{
            if(alphabeticalSort == true){
                tempArray = data.sort((a,b)=>a.name.localeCompare(b.name));
            }else{
                tempArray = data.sort((a,b)=>b.name.localeCompare(a.name));
            }
            setData(tempArray);
        }
    },[alphabeticalSort])

    return (
        <div className={styles.container}>
            <div className={styles.searchArea}>
                <button className={styles.sort} onClick={()=>setAlphabeticalSort(!alphabeticalSort)}>SORT BY NAME</button>
                <h2>Live search</h2>                                
                <input className={styles.search} onChange={event=>setSearch(event.target.value)} placeholder="search by name"/>
            </div>
            <div className={styles.cardBox}>
                {data.map(element=>(
                    <Link to={`${match.path}/${element.url.substr(-3).replace(/\//g,'')}`} className={styles.card}>
                        {Object.keys(element).map(key=>{
                            if(!Array.isArray(element[key])){
                                return <div className={styles.row}>
                                            <h2>{key}</h2> 
                                            <p>{element[key]}</p>
                                        </div>
                            }
                        })}
                    </Link>
                ))
                }
                </div>
        </div>
    )
}

export default Page;
