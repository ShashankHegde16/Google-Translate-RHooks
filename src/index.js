import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'

const Widget = () => {

    return (
        <App />
    )

}


ReactDOM.render(<Widget />, document.querySelector('#root'));