import { Component } from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import style from './style.module.css';
import { getImage } from "../constans/getImage";


export default class Joke extends Component {
    constructor() {
        super();

        this.state = {
            vote: 0,
            isVoted: false
        }

        this.vote = this.vote.bind(this);
    }


    vote(votingType) {
        if (!this.state.isVoted) {
            this.setState({ isVoted: true });

            if (votingType) {
                this.setState({ vote: this.state.vote + 1 });
            } else {
                this.setState({ vote: this.state.vote === 0 ? 0 : this.state.vote - 1 });
            }
            
        } else {
            if (votingType) {
                this.setState({ vote: this.state.vote + 1 });
            } else {
                this.setState({ vote: this.state.vote === 0 ? 0 : this.state.vote - 1 });
            }
        }
    }

    getBorderColor() {
        if (this.state.vote <= 5) {
            return style.borderRed;
        }
        else if (this.state.vote <= 10) {
            return style.borderOrange;
        }
        else if (this.state.vote <= 15) {
            return style.borderYellow
        }
        else if (this.state.vote <= 20 || this.state.vote >= 20) {
            return style.borderGreen;
        }
    }

    render() {
        return (
            <div className={`${style.joke} ${this.props.isDark && style.dark} `} >
                <div className={style.voteArea}>
                    <button className={style.voteArrow} onClick={() => this.vote(1)}><FaArrowUp /></button>
                    <p className={`${style.votesCount} ${this.getBorderColor()} ${this.props.isDark && style.darkVoteCount} `}>{this.state.vote}</p>
                    <button className={style.voteArrow} onClick={() => this.vote()} disabled={this.state.vote === 0 ? true : false} ><FaArrowDown /></button>
                </div>
                <div className={style.jokeText}>
                    {this.props.joke}
                </div>
                <div className={style.jokeEmojiArea}>
                    {this.state.isVoted && <img src={getImage(0, this.state.vote)} alt="Emoji for this joke" />}
                </div>
            </div>
        );
    }
}