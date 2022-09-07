import logo from '../images/logo.svg';
import _0 from '../images/faces/0.png';
import _1 from '../images/faces/1.png';
import _2 from '../images/faces/2.png';
import _3 from '../images/faces/3.png';
import _4 from '../images/faces/4.png';
import _5 from '../images/faces/5.png';
import _6 from '../images/faces/6.png';


// vote <= 0 || _0

// vote <= 5 || _1

// vote <= 10 || _2

// vote <= 15 || _3

// vote <= 20 || _4

// vote <= 25 || _5

// vote >= 25 || _6

function getImage(isLogo, jokeVotingCount) {
    if (isLogo) {
        return logo;
    } else {
        if (jokeVotingCount <= 0) return _0;
        else if (jokeVotingCount <= 5) return _1;
        else if (jokeVotingCount <= 10) return _2;
        else if (jokeVotingCount <= 15) return _3;
        else if (jokeVotingCount <= 20) return _4;
        else if (jokeVotingCount <= 25) return _5;
        else if (jokeVotingCount >= 25) return _6;
        else return _0;
    }
}


export { getImage }