import React from 'react';

const Link = ({ href, className, children }) => {
    const onListClick = (event) => {
        if (event.metaKey || event.ctrlKey)
            return;
        event.preventDefault();
        window.history.pushState({}, 'route', href);
        const navigationEvt = new PopStateEvent('urlchanged');
        window.dispatchEvent(navigationEvt);

    }

    return (
        <div className="ui">
            <a href={href} className={className} onClick={onListClick}>{children}</a>
        </div>
    );

}

export default Link;