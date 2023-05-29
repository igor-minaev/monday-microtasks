import React from 'react';
import {FilterValuesType} from "./App";
import {MoneyButton} from "./MoneyButton";

type MoneyComponentPropsType = {
    currentMoney: BanknotType[]
    onClickFilterHandler: (filter: FilterValuesType) => void
}

export type BanknotType = {
    banknots: 'Dollars' | 'RUBLS'
    value: number
    number: string
}


export const MoneyComponent = (props: MoneyComponentPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map(el => {
                    return (
                        <li key={el.number}>
                            <span>{el.banknots} </span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
              {/*  <button onClick={() => props.onClickFilterHandler('All')}>All</button>
                <button onClick={() => props.onClickFilterHandler('Dollar')}>Dollars</button>
                <button onClick={() => props.onClickFilterHandler('RUBLE')}>RUBLS</button>*/}
                <MoneyButton name='All' callBack={() => props.onClickFilterHandler('All')}/>
                <MoneyButton name='Dollars' callBack={() => props.onClickFilterHandler('Dollar')}/>
                <MoneyButton name='RUBLS' callBack={() => props.onClickFilterHandler('RUBLE')}/>
            </div>
        </>
    );
};

