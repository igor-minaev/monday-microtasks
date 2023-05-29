import React from 'react';

type MoneyButtonPropsType = {
    name: string
    callBack: () => void
}

export const MoneyButton = (props: MoneyButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

