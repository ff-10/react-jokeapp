import { Component } from "react";
import axios from "axios";

import style from './style.module.css';
import JokeAside from '../JokeAside';
import Joke from '../Joke';
import Loading from "../Loading";

export default class JokesContainer extends Component {

    constructor() {
        super();

        this.state = {
            jokes: '',
            isDark: false
        }

        this.toggleMode = this.toggleMode.bind(this);
        this.getJokes = this.getJokes.bind(this);
    }


    toggleMode() {
        this.setState({ isDark: !this.state.isDark });
        setTimeout(() => {
            this.setMode();
        }, 5);
    }

    setMode() {
        if (this.state.isDark) {
            document.body.classList.remove(style.light);
            document.body.classList.add(style.dark);
        } else {
            document.body.classList.remove(style.dark);
            document.body.classList.add(style.light);
        }
    }

    getJokes() {
        let randJokesCount = Math.floor(Math.random() * 30);
        if (randJokesCount < 15) {
            randJokesCount += 10;
        }
        axios.get(`https://icanhazdadjoke.com/search?limit=${randJokesCount}`,
            { headers: { "Accept": "application/json" } }).then(jokes => this.setState({ jokes: jokes.data.results }));
    }

    componentDidMount() {
        this.getJokes();
        this.setMode();
    }



    render() {
        if (!this.state.jokes.length) {
            return <Loading />
        }


        return (
            <div className={`${style.container}`}>
                <div className={style.aside}>
                    <JokeAside modeToggle={this.toggleMode} mode={this.state.isDark} getNewJokes={this.getJokes} />
                </div>

                <div className={style.jokesArea}>
                    {this.state.jokes.map(joke => <Joke isDark={this.state.isDark} key={joke.id} joke={joke.joke} />)}
                </div>
            </div>

        );
    }
}