import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string) => void
    value: string
}

export const Input = (props: InputPropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    return (
        <input value={props.value} onChange={onChangeHandler}/>
    );
};

