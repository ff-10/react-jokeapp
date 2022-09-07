import { Component } from "react";
import style from "./style.module.css"
import image from './loading.gif';

export default class Loading extends Component{
    render(){
        return(
            <div className={style.container}>
                <img src={image} alt={'Loading Gif'} width={100} />
            </div>
        )
    }
}