import React, { useState } from 'react';
import Accordian from './accordian';
import Search from './search';
import Translate from './translate';
import Dropdown from './dropdown';
import Route from './route';
import Header from './header';

const widgetItems = [
    {
        title: "What is React?",
        content: "React is front end JS Framework."
    },
    {
        title: "Why use React?",
        content: "React is a favorite JS Library among engineers."
    },
    {
        title: "How do you use React?",
        content: "You can use react by creating components."
    }
];

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

const App = () => {
    const [selectedOption, setOptionValue] = useState(options[0]);
    return (
        <div className="ui container">
            <Header />
            <Route path={"/"}>
                <Accordian items={widgetItems} />
            </Route>
            <Route path={"/list"}>
                <Search />
            </Route>
            <Route path={"/dropdown"}>
                <Dropdown options={options} selectedOption={selectedOption} onOptionChange={setOptionValue} />
            </Route>
            <Route path={"/translate"}>
                <Translate />
            </Route>
        </div>
    );
}

export default App;