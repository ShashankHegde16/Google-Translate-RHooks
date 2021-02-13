import React, { useEffect, useRef, useState } from 'react';

const Dropdown = ({ options, selectedOption, onOptionChange }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.addEventListener("click", onBodyClick);
        return () => {
            document.removeEventListener("click", onBodyClick)
        }
    }, []);

    const onBodyClick = (event) => {
        if (ref.current && ref.current.contains(event.target))
            return;
        setOpen(false);
    }

    const opt = options.map((ele) => {
        if (ele.value === selectedOption.value)
            return null;
        return (
            <div key={ele.value} className="item" onClick={() => onOptionChange(ele)}>
                {ele.label}
            </div>);
    })
    return (
        <div className="ui form" ref={ref} >
            <div className="field" >
                <label className="label">Select a Color</label>
                <div onClick={() => { setOpen(!open) }} className={"ui selection dropdown" + `${open ? " visible active" : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedOption.label}</div>
                    <div className={"menu" + `${open ? " visible transition" : ''}`}>
                        {opt}
                    </div>
                </div>
            </div>
        </div >
    );
}


export default Dropdown;