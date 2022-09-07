import { Component } from "react";

import style from './style.module.css';
import { getImage } from '../constans/getImage';

import { FaMoon, FaSun } from "react-icons/fa";



export default class JokeAside extends Component {
    render() {
        return (
            <div className={style.container}>
                <div className={style.logo}>
                    <img src={getImage(1)} alt="Logo" width={200} />
                </div>
                
                <button className={style.btnGradient} onClick={this.props.getNewJokes}>New Jokes</button>

                <button className={style.modeBtn} onClick={this.props.modeToggle}>
                    {this.props.mode ? <FaSun /> : <FaMoon />}
                </button>
            </div>
        )
    }
}