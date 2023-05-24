import React, {FC} from 'react';

type NewComponentPropsType = {
    cars: CarType[]
}

type CarType = {
    manufacturer: string
    model: string
}

export const NewComponent: FC<NewComponentPropsType> = (props) => {
    return (
        <table>
            <tr>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            {props.cars.map((car, index) => {
                return (
                    <tr key={index}>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}
        </table>
    );
};

