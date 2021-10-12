import React, { Component } from 'react'
import shoes from '../../Data/shoes.json'
import Shoe from './Shoe'


export default class ShoesList extends Component {
    render() {
        let {addShoes} = this.props
        return (
            <div className="row">
                {shoes.map((sp,index)=>{
                    return(
                        <Shoe addShoes={addShoes} sp={sp} key={sp.id}/>
                    )
                })}
            </div>
        )
    }
}
