import React, { useState } from 'react';




const Accordian = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onItemClick = (index) => {
        setActiveIndex(index);
    }
    const widgetList = items.map((element, index) => {
        const active = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment >
                <div key={items.title}
                    className={"title" + active}
                    onClick={() => { onItemClick(index) }}
                >
                    <i className="dropdown icon"></i>
                    {element.title}
                </div>
                <div className={"content" + active}>
                    <p>{element.content}</p>
                </div>
            </React.Fragment>
        );
    });
    return (
        <div className="ui styled fluid accordion">
            {widgetList}
        </div>
    );
}

export default Accordian;