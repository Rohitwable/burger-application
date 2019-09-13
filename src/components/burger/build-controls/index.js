import React from 'react'
import classes from './styles.css'
import BuildControl from './build-control'
export default function buildControls(props) {
    const control = [
        {label: 'Cheese', type: 'cheese'},
        {label: 'Bacon', type: 'bacon'},
        {label: 'Meat', type: 'meat'},
        {label: 'Salad', type: 'salad'},

    ]
    return (
        <div className={classes.build_controls}>
           {control.map(ctrl=>(<BuildControl 
           key={ctrl.label} 
           label={ctrl.label}
           added={()=> props.ingredientAdded(ctrl.type)}
           removed={()=>props.ingredientRemoved(ctrl.type)}
           disabled={props.disabled[ctrl.type]}
           />))} 
        </div>
    )
}
