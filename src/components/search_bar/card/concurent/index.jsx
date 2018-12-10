import React from 'react';
import './index.scss';


export default class Concurent extends React.Component {
    state = {
        show_all: false
    }

    

    render() {
        const { data } = this.props,
        { name , ogrn, img } = data
        return(
            <div className = "Concurent">
                <img className="profile-img" src={ require(`../../../../assets/${ img }`)} alt="1"></img>
                            
                <div className = "description">
                    <div className = "title">{ name }</div>
                    <p>ОГРН: { ogrn }</p>
                </div>
            </div>
        )
    }
}