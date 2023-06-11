import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./components/universal/FullInput";
import {Input} from "./components/universal/Input";
import {SuperButton} from "./components/universal/SuperButton";

export type FilterValuesType = 'All' | 'Dollar' | 'RUBLE'

function App() {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'}
    ])

    const [title, setTitle] = useState('')

    const addMessage = (title: string) => {
        const newMessage = {message: title}
        setMessage([newMessage, ...message])
    }


    const addMessageHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            {/*<div>*/}
            {/*    <input/>*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input value={title} setTitle={setTitle}/>
            <SuperButton name='+' callBack={addMessageHandler}/>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })}
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

// Microtask 3
//
// function App() {
//
//     /*const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//         console.log('Hello! I am Vasya!')
//     }
//     const mySecondSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
//         console.log('Hello! I am Ivan!')
//     }
//     const onClickHandler=(name:string)=>{
//         console.log(`Hello! I am ${name}!`)
//     }
//     const foo1 = () => {
//         console.log(100200)
//     }
//     const foo2 = (num:number) => {
//         console.log(num)
//     }*/
//
//     const Button1Foo = (subscriber: string, age: number, address: string) => {
//         console.log(subscriber, age, address)
//     }
//
//     const Button2Foo = (subscriber: string) => {
//         console.log(subscriber)
//     }
//
//     const Button3Foo = () => {
//         console.log('I am stupid button!')
//     }
//
//     return (
//         <div className="App">
//             {/*<button onClick={(event) => console.log('Hello!')}>MyYouTubeChanel-1</button>
//              <button onClick={()=>onClickHandler('Vasya')}>MyYouTubeChanel-1</button>
//             <button onClick={()=>onClickHandler('Ivan')}>MyYouTubeChanel-2</button>
//             <button onClick={()=>onClickHandler('some info')}>MyYouTubeChanel-3</button>
//             <button onClick={foo1}>1</button>
//             <button onClick={()=>foo2(100200)}>2</button>*/}
//             {/* <button>MyYouTubeChanel-1</button>
//             <button>MyYouTubeChanel-2</button>*/}
//             <Button name="MyYouTubeChanel-1" callBack={() => Button1Foo('I am Vasya!', 21, 'live in Minsk')}/>
//             <Button name="MyYouTubeChanel-2" callBack={() => Button2Foo('I am Ivan!')}/>
//             <Button name="stupid BUTTON" callBack={Button3Foo}/>
//         </div>
//     )
//         ;
// }


// Microtask 4
//
// function App() {
//
//     let [a, setA] = useState<number>(1)
//     const onClickHandler = () => {
//         setA(++a)
//     }
//
//     const onClickResetHandler = () => {
//         setA(0)
//     }
//     return (
//         <div className="App">
//             <h1>{a}</h1>
//             <button onClick={onClickHandler}>number</button>
//             <button onClick={onClickResetHandler}>0</button>
//         </div>
//     )
//         ;
// }


// Microtask 5
// export type FilterValuesType = 'All' | 'Dollar' | 'RUBLE'
//
// function App() {
//     const [money, setMoney] = useState<BanknotType[]>([
//         {banknots: 'Dollars', value: 100, number: ' a1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' z1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
//         {banknots: 'Dollars', value: 100, number: ' e1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' c1234567890'},
//         {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
//         {banknots: 'Dollars', value: 50, number: ' x1234567890'},
//         {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
//     ])
//
//     const [filter, setFilter] = useState<FilterValuesType>('All')
//
//     let currentMoney = money
//     if (filter === 'RUBLE') {
//         currentMoney = money.filter(el => el.banknots === 'RUBLS')
//     }
//     if (filter === 'Dollar') {
//         currentMoney = money.filter(el => el.banknots === 'Dollars')
//     }
//     const onClickFilterHandler = (filter: FilterValuesType) => {
//         setFilter(filter)
//     }
//
//     return (
//         <MoneyComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
//     )
//         ;
// }
//
// export default App;