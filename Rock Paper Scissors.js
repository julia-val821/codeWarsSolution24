https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript

    const rps = (p1, p2) => {
        if ( p1 === 'paper' && p2 === 'paper' || p1 === 'scissors' && p2 === 'scissors' || p1 === 'rock' && p2 === 'rock' ) return 'Draw!';
        if ( p1 === 'scissors' && p2 === 'paper' || p1 === 'paper' && p2 === 'rock'|| p1 === 'rock' && p2 === 'scissors' ) return 'Player 1 won!';
        if ( p1 === 'paper' && p2 === 'scissors' || p1 === 'rock' && p2 === 'paper' || p1 === 'scissors' && p2 === 'rock' )return 'Player 2 won!';
    };