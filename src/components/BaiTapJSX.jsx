import React, { Component } from 'react'

export default class BaiTapJSX extends Component {
    showInfo(myObj) {
        if(myObj.status) {
           return <h3>myFun : {myObj.myFun()}</h3>
        }
    }
    render() {
        var myObj = {
            name : 'khai',
            class : '16CT',
            status: false,
            myFun : function() {
                return `${this.class} ${this.name}`
            }
        }

        var users = [
            {
                id : 1,
                name : "Nguyen Van A",
                age : 18
            },
            {
                id : 2,
                name : "Nguyen Van B",
                age : 28
            },
            {
                id : 3,
                name : "Nguyen Van C",
                age : 38
            },
        ]

        var ele = users.map((user,index) => {
            return <div key= {user.id}>
                <h3>{user.id}</h3>
                <h3>{user.name}</h3>
                <h3>{user.age}</h3>
            </div>
        })
        return (
            <div>
                <h1>Hello</h1>
                <h2>myObj : {myObj.name}</h2>
                <h2>myObj : {myObj.class}</h2>
                <div>{this.showInfo(myObj)}</div>
                <div>{ele}</div>
            </div>
        )
    }
}
