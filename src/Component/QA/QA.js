import React from 'react';
import './QA.css'


const QA = () => {
    return (
        <div className='qa-container'>
            <div>

                <h2>Q1. How React Works?</h2>
                <p>Ans: ReactJSj divides the UI into isolated resuable pieces of code known as Component. React components works similarly to JavaScript function as the accept aribitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering the code</p>
                <p>React uses a declarative paradigm that makes it easier to reason about our application ansa React will efficient and flexibvle. It designs simple views for each state inb your application and react will efficieantly update and render just the right component when your data changes.</p>

            </div>
            <div>
                <h2>Q2. Difference between state and props</h2>
                <p>Ans: 1. In props the data is pass from one component to another.While In state the data i passed within the component only</p>
                <p>2. Props is immutable (can't be modified) but state is mutable (can be modified)</p>
                <p>Props can be used with state and functional components. State can be used only with the state components / class component</p>
                <p>Props are read-only and state is both read and write</p>
            </div>
            <div>
                <h2>Q3. How useState works?</h2>
                <p>useSate is a Hook (function) that allow you to have state variables in function comppoentns. You pass the initial sate to thei function and it returns a variale with the current state value and another  function to update this value.</p>
            </div>
        </div >
    );
};

export default QA;