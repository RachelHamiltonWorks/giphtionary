import React from 'react';


const DisplayWord = (props) => {
 console.log("word")
 console.log(props.word);
    return (
        <div>
            <h2>{props.word.meta.stems[0]}</h2>
        </div>
    )
}

export default DisplayWord;