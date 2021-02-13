import React, { useState, useEffect } from 'react';
import WikiSearch from '../services/wiki';


const Search = () => {
    const [searchText, setSearchText] = useState('');
    const [debounceText, setDebounceText] = useState(searchText);
    const [searchResult, setSearchResult] = useState([]);

    const onInputChange = (e) => {
        setSearchText(e.target.value)
    }


    useEffect(() => {
        const timeOutId = setTimeout(() => {
            setDebounceText(searchText);
        }, 1000);
        return () => {
            clearTimeout(timeOutId);
        }
    }, [searchText]);

    useEffect(() => {
        if (debounceText) {
            (async () => {
                return await WikiSearch.get('', { params: { srsearch: debounceText } });
            })().then(({ data }) => {
                setSearchResult(data.query.search);
            }).catch(err => console.error(err));
        }
    }, [debounceText]);

    const renderResult = searchResult.map((ele) => {
        return (
            <div className="item" key={ele.pageid}>
                <div className="content">
                    <div className="header">
                        {ele.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: ele.snippet }}></span>
                </div>
            </div>
        )
    })

    return (
        <div className="ui container">
            <div className="ui form">
                <label>Search</label>
                <input
                    className="input"
                    onChange={(e) => onInputChange(e)}
                />
            </div>
            <div className="ui celled list">
                {renderResult}
            </div>
        </div>

    );
}

export default Search;