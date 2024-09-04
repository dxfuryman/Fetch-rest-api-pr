import React from 'react';
import Cell from './Cell.jsx'; // Assuming Cell component is imported from Cell.jsx
const Row = ({ item }) => {
    return (
        <tr>
            {Object.entries(item).map(([key, value]) => {
                return (
                    <Cell key={key} cellData={JSON.stringify(value)} />
                );
            })}
        </tr>
    );
}

export default Row;
