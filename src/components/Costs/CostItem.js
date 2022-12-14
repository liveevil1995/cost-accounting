import './CostItem.css';
import CostDate from './CostDate';
import Card from '../UI/Card';
// import React, { useState } from 'react';

const CostItem = (props) => {

    return (
        <Card className="cost-item">
            <div>
                <CostDate date={props.date} />
            </div>
            <div className="cost-item__description">
                <h2>{props.description}</h2>
                <div className="cost-item__price">{props.amount} ₽</div>
            </div>
        </Card>
    )
}

export default CostItem;