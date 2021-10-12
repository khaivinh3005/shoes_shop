import React, { Component } from 'react'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import dataGlasses from '../Data/dataGlasses.json'
import Modal from './Modal'

export default class BaiTapChonKinh extends Component {
    state = {
        img:"./glassesImage/v2.png",
        mang : {}
    }


    clickGlass = (glassNumber) => {
        this.setState({
            img: `./glassesImage/v${glassNumber.id}.png`,
            mang : glassNumber
        })
    }
    
    render() {
        return (
           <div class="glassesForBg">
               <Header />
               <Body glass = {this.state.img} />
               <Footer clickGlass={this.clickGlass} dataGlasses={dataGlasses} />
               <Modal mang={this.state.mang}/>
           </div>
        )
    }
}
