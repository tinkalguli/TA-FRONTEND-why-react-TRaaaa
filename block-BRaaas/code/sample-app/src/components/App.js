let fruits = [
    { id: 'apple', value: '🍎 apple' },
    { id: 'orange', value: '🍊 orange' },
    { id: 'grape', value: '🍇 grape' },
    { id: 'pear', value: '🍐 pear' },
];

export default function App() {
    return (
        <>
        <div className="container">
            <button onClick={alertText}>Click Me</button>
            <hr/>
            <button onClick={alertHelpText}>How can I help you?</button>
            <hr/>
            <button onClick={eventHandler}>Arya</button>
            <button onClick={eventHandler}>John</button>
            <button onClick={eventHandler}>Bran</button>
        </div>
        <div className="container">
            <Button onClick={alertText} text="Click Me"/>
            <hr/>
            <Button onClick={alertHelpText} text="How can I help you?"/>
            <hr/>
            <Button onClick={eventHandler} text="Arya"/>
            <Button onClick={eventHandler} text="John"/>
            <Button onClick={eventHandler} text="Bran"/>
        </div>
        <div className="container">
            {
                fruits.map(fruit => {
                    return <MyButton key={fruit.id} {...fruit} />
                })
            }
        </div>
        </>
    )
}

function alertText() {
    alert(`Hello React Event`);
}

function alertHelpText() {
    alert("To learn React use https://reactjs.org");
    alert("React and ReactDOM works together");
    alert("Babel helps in writing JSX");
}

function eventHandler(event) {
    let name = event.target.innerText;
    alert(`Hello ${name}`);
}

function Button(props) {
    return(
        <button onClick={props.onClick}>{props.text}</button>
    )
}

function MyButton(props) {
    return (
        <button onClick={() => alertFruit(props.value)}>{props.id}</button>
    )
}

function alertFruit(value) {
    alert(value);
}