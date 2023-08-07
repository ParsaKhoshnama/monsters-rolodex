import React from 'react'
import {Card} from '../Card/Card.Component'
import './Card-List.Component.styles.css'
export const CardList=(props)=>{
    console.log(props)
    return(<div className="Card-List">
        {props.monsters.map((item)=><Card key={item.id} monster={item}></Card>)}
    </div>)
}