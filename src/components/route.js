import { useState, useEffect } from 'react';
const Route = ({ path, children }) => {
    const [pathName, setPathName] = useState(window.location.pathname);

    useEffect(() => {
        const onUrlChanged = () => {
            setPathName(window.location.pathname);
        }
        window.addEventListener('urlchanged', onUrlChanged);
        return () => {
            window.removeEventListener('urlchanged', onUrlChanged);
        }

    }, []);
    return pathName === path ? children : null;
}

export default Route;