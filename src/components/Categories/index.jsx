import React from "react";
import styles from './Categories.module.scss';

export default function Categories(props){

    const categories=[
        {
            key:'all',
            name:'все'
        },
        {
            key:'самолет',
            name:'самолет'
        },
        {
            key:'на пароходе',
            name:'на пароходе'
        },
        {
            key:'на автобусе',
            name:'на автобусе'
        },
        {
            key:'пешком',
            name:'пешком'
        }

    ]




    return(
        <div className={styles.categories}>
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    )
}