import React from 'react';
import './App.css';
import {Button} from "./components/Button";

function App() {

    /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello! I am Vasya!')
    }
    const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log('Hello! I am Ivan!')
    }
    const onClickHandler=(name:string)=>{
        console.log(`Hello! I am ${name}!`)
    }
    const foo1 = () => {
        console.log(100200)
    }
    const foo2 = (num:number) => {
        console.log(num)
    }*/

    const Button1Foo = (subscriber: string, age: number, address: string) => {
        console.log(subscriber, age, address)
    }

    const Button2Foo = (subscriber: string) => {
        console.log(subscriber)
    }

    const Button3Foo = () => {
        console.log('I am stupid button!')
    }

    return (
        <div className="App">
            {/*<button onClick={(event) => console.log('Hello!')}>MyYouTubeChanel-1</button>
             <button onClick={()=>onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
            <button onClick={()=>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
            <button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel-3</button>
            <button onClick={foo1}>1</button>
            <button onClick={()=>foo2(100200)}>2</button>*/}
            {/* <button>MyYouTubeChanel-1</button>
            <button>MyYouTubeChanel-2</button>*/}
            <Button name="MyYouTubeChanel-1" callBack={() => Button1Foo('I am Vasya!', 21, 'live in Minsk')}/>
            <Button name="MyYouTubeChanel-2" callBack={() => Button2Foo('I am Ivan!')}/>
            <Button name="stupid BUTTON" callBack={Button3Foo}/>
        </div>
    )
        ;
}

export default App;


/* Microtask 1

function App() {
    return (
        <>
            <Header titleForHeader="NEW HEADER"/>
            <Body titleForBody="NEW BODY"/>
            <Footer titleForFooter="NEW FOOTER"/>
        </>
    )
        ;
}*/


/* Microtask 2

function App() {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    return (
        <>
            <NewComponent cars={topCars}/>
        </>
    )
        ;
}*/
