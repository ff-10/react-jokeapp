import { Component } from "react";
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

import style from './style.module.css';
import { getImage } from "../constans/getImage";


export default class Joke extends Component {
    constructor(props) {
        super(props);

        this.state = {
            vote: 0,
            isVoted: false,
            jokeID: this.props.id
        }

        this.vote = this.vote.bind(this);
    }


    vote(votingType) {
        if (!this.state.isVoted) {
            this.setState({ isVoted: true, vote: this.state.vote + 1 });
            this.props.sendVote(this.state.jokeID,this.state.vote);
        } else {
            if (votingType) {
                this.setState({ vote: this.state.vote + 1 });
                this.props.sendVote(this.state.jokeID,this.state.vote);
                return;
            } else {
                this.setState({ vote: this.state.vote === 0 ? 0 : this.state.vote - 1 });
                this.props.sendVote(this.state.jokeID,this.state.vote);
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


    componentDidMount(){
        this.props.sendVote(this.state.jokeID,this.state.vote);
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