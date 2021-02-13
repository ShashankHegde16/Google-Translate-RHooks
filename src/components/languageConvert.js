import React, { useState, useEffect } from 'react';
import axios from 'axios';

const KEY = process.env.REACT_APP_TRANS_KEY;

const LangConvert = ({ language, text }) => {
    const [translated, setTranslated] = useState('');
    const [debounceText, setDebounceText] = useState(translated);

    useEffect(() => {
        const debounce = setTimeout(() => {
            setDebounceText(text);
        }, 1000);
        return () => {
            clearTimeout(debounce);
        }
    }, [text]);

    useEffect(() => {
        (async () => {
            return await axios.post("https://translation.googleapis.com/language/translate/v2", {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: KEY
                }
            })
        })().then(({ data }) => {
            setTranslated(data.data.translations[0]['translatedText'])
        }).catch(error => {
            console.error(error);
        })

    }, [debounceText, language])



    return (<div>
        {translated}
    </div>);
}


export default LangConvert;