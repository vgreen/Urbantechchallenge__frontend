import React from 'react';
import './index.scss';

import Concurent from './concurent'

export default class Card extends React.Component {
    state = {
        show_all: false,
        cat_names: ['Основное','Активность','Доп категория 3'],
        field_names:['Сайт','ОКВЭД','ОКВЭД (Полная версия)','Адрес','Описание'],
        curr_cat: 0
    }

    showAll = () => {
        this.setState((prevState)=>({
            show_all: !prevState.show_all
        }))
    }

    catSwitch = (i) => {
        this.setState({
            curr_cat: i
        })
    }

    render() {
        
        const { data } = this.props,
        { name, inn, ogrn , site, okved, okved_full, adres, description, logo, concurents, phone, email, state, visits} = data
        return(
            <div className = "Card">
                <div className = "minicard">
                    <div className="left-side">
                        <div className = "left-header">
                            <img className="profile-img" src={ require(`../../../assets/${ logo }`)} alt="1"></img>
                            
                            <div className = "description">
                                <div className = "title">{ name }</div>
                                <p>ИНН: { inn }</p> <p>ОГРН: { ogrn }</p>
                            </div>
                        </div>
                        <div className = "cat-holder">
                            {
                                this.state.cat_names.map((item ,i) => {
                                    return <div class = {`cat-switcher ${ (this.state.curr_cat === i)? "active" : ""}`} key = { i } onClick = { () => this.catSwitch(i) }> {item} </div>
                                })
                            }
                        </div>
                        <div className = "cat-content">
                            <div className = {`inf main ${ (this.state.curr_cat === 0)? 'active' : ''}`}>
                                <div className="wrapper"><div className = "right">Адрес</div><div className = "left">{ adres }</div></div>
                                <div className="wrapper"><div className = "right">ОКВЭД</div><div className = "left">{ okved }</div></div>
                                <div className="wrapper"><div className = "right">ОКВЭД (Расшифровка)</div><div className = "left">{ okved_full }</div></div>
                                <div className="wrapper"><div className = "right">Телефон</div><div className = "left">{ phone }</div></div>
                                <div className="wrapper"><div className = "right">Email</div><div className = "left">{ email }</div></div>
                            </div>
                            <div className = {`inf dop ${ (this.state.curr_cat === 1)? 'active' : ''}`}>
                                <div className="wrapper"><div className = "right">Состояние</div><div className = "left">{ state }</div></div>
                                <div className="wrapper"><div className = "right">Сайт</div><div className = "left">{ site }</div></div>
                                <div className="wrapper"><div className = "right">Посещения основного сайта</div><div className = "left">{ visits }</div></div>
                                <div className="wrapper"><div className = "right">Описание</div><div className = "left">{ description }</div></div>
                                
                            </div>
                        </div>

                    </div>
                    <div className = "right-side">
                        <p className = "title"> Конкуренты </p>
                        {
                            concurents.length >= 1 ? concurents.map((item, i) => {
                                return <Concurent key = {i} data = {item}></Concurent>
                            }) : (<p>No concurents</p>)
                        }
                    </div>
                </div>
                <div className = {`all-info ${ this.state.show_all ? "active" : "" }`}>
                    <div className = "info block-1">
                        <div className = "title">Категория Окунь</div>

                    </div>
                    <div className = "info block-2">
                        <div className = "title">Категория Вобла</div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}