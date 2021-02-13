import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown';
import LangConvert from './languageConvert';


const options = [
    {
        label: 'Africans',
        value: 'af'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    useEffect(() => {

    });

    return (
        <div className="ui container">
            <div className="ui form">
                <div className="field">
                    <label className="label">Enter a Text</label>
                    <input className="input " onChange={(e) => { setText(e.target.value) }} />
                </div>
            </div>
            <Dropdown onOptionChange={setLanguage} selectedOption={language} options={options} />
            <hr />
            <h3>Output:</h3>
            <LangConvert language={language} text={text} />
        </div>
    );


}

export default Translate;