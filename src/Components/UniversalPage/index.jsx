import React from 'react';
import {useEffect, useState} from 'react';
import axios from 'axios';
import styles from "./styles.module.scss";
import {Link} from 'react-router-dom';

const SmallGrid = (props)=>{
    console.log(props)
    return <div>
            <h1>{props.name}</h1>
            {props.elements && props.elements.map((el, idx)=>{
                return <Link to={`${el.url.split("http://swapi.dev/api")[1]}`} className={styles.links}>{el.name}</Link>
            })}
          </div> 
};

function UniPage({match}) {
    const[data, setData] = useState({});
    const getData = async () => {
        try {
            const { data } = await axios.get(`https://swapi.dev/api${match.url}`)
            let tempObj = data;
            console.log('temp',tempObj);
            Object.keys(tempObj).map((key)=>{
                if(Array.isArray(tempObj[key])){
                    let tempArray = [];
                    tempObj[key].map((url)=>{
                        axios.get(url)
                        .then((data)=>{
                            tempArray.push(data.data)
                        })
                    });
                    tempObj[key] = tempArray;
                }
            });
            setTimeout(() => {
                setData(tempObj);  
            }, 1000);
            

        } catch (err ) {
            // errors
            console.log(err,"connection error")
        }
    } 

    useEffect(() => {
        getData()
    }, []);
 
    return (
        <div className={styles.container}>
            {
                Object.keys(data).length !=0 ? 
                <>{
                    Object.keys(data).map(key=>{
                        if(Array.isArray(data[key])){
                            return <SmallGrid name={key} url={match} elements={data[key]}/>;
                        }else{
                            return ( 
                            <div className={styles.row} key={key}>
                                <h3>{key}</h3>
                                <p>{data[key]}</p>
                            </div>
                            )
                        }
                    })
                }</> 
                : <div>Loading...</div>
            }
        </div>
    ) 
}

export default UniPage;
