/* eslint-disable no-undef */
import React from 'react';
//import { Link } from 'react-router-dom';
import './index.scss';
import Card from './card'
import Error from './error'
import Map from './map'
//import { Checkbox } from 'semantic-ui-react'




export default class Search extends React.Component {
    state = {
        search_img_active: false,
        search_active: false,
        map_active: false,
        text: "",
        data:{
                name: 'PedPiper',
                inn: '1223',
                ogrn: '29',
                site: "www.213.ru",
                okved: '16.01',
                okved_full: "Мультипла данных",
                adres: "улица Гроув, д.7",
                description: "Рыботом их ловят и едят другие чусно им блят плезно сука",
                logo: "profile.png",
                phone: '12321312312',
                email:"wqeqweqweqweqw",
                state: "fwqweqweqqq",
                visits:"12323",
                concurents: [
                    {
                        name: "Hooli Inc",
                        ogrn: '2342343242',
                        img: 'hooli.jpg'
                    },
                    {
                        name: "Endframe",
                        ogrn: '234234234',
                        img: 'endframe.jpg'
                    },
                    {
                        name: "Ампло Строй",
                        ogrn: '12315513434',
                        img: 'amplo.jpg'
                    },
                    {
                        name: "Google",
                        ogrn: '123123123',
                        img: 'google.jpg'
                    }
                ]
            }
        
    }

    

    //fill state text from input for request
    requestText = (e) => {
        this.setState({
            text: e.target.value
        })    
    }
    //animation for input field
    glowButton = (e) => {
        this.setState({
            search_img_active: !this.state.search_img_active 
        })  
        
    }

    returnIdle = () =>{
        this.setState({
            search_active: false
        })
    }

    //load data from server
    loadData() {
        fetch('/data')
            .then(response => response.json())
            .then(data => {
                console.log(data.data)
                this.setState({ data:data})
            })
    } 
    //<Checkbox toggle />
    sendData(){
        
        fetch('http://localhost:8000/search/results/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                search_string: this.state.text
            })
        })
            .then(response => {
                response.json().then( data => {
                    this.setState({
                        data : data
                    })
                })
             
            })  
            .catch(function (error) {  
                console.log('Request failed', error);  
            });
    }

    doSearch = () => {
        this.setState({
            search_active: true
        })
        this.sendData()
        
    }


    render() {
        const { search_active, map_active, search_img_active, data} = this.state
        return(
            <div className = "Search">
                <div className = {`content ${ search_active ? "on-top" : "on-center" }`}> 
                    <img className={`logo ${ search_active ? "on-top" : "on-center" }`} src={ search_active ? require('../../assets/2.png') : require('../../assets/1.png') } onClick = {this.returnIdle} alt="1"></img>
                    <div className={`search-field ${ search_img_active || map_active  ? "active" : "inactive" }`}>
                        <input type = "text" className = "search-text" onChange={this.requestText} onFocus = {this.glowButton} onBlur={this.glowButton} ></input>
                        <div className = "go-search" onClick = { this.doSearch }><img src={ require('../../assets/search.png') } alt="1"></img></div>
                        
                    </div>
                </div>
                <div className={`result ${ search_active ? "on-top" : "on-center" }`}>
                    <Card  data={ data }></Card>
                </div>
                <div className = {`result ${ map_active ? "on-top" : "on-center" }`}>
                    <Map app_id="y1i5pcLAieTtZvogeXVs" app_code="yeitO96x3IdHPof2eMw8cA" />
                </div>
            </div>
        )
    }
}
