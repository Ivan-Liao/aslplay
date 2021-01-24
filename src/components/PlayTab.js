import React from 'react';

const alphabet = 'ABCDEFGIJKLMNOPQRSTUVWXYZ'.split('');
var cur_alphabet = '';

function PlayTab() {
    function getAlphabetHandler() {
        cur_alphabet = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(cur_alphabet);
    }
    return (
        <React.Fragment>
            <div className="play-prompt"> {cur_alphabet} </div>
            <button onClick={ getAlphabetHandler }>New Prompt</button>
        </React.Fragment>
    )
}

export default PlayTab;