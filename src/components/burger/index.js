import React from 'react'
import classes from './styles.css'
import BurgerIngredient from './burger-ingredient'
export default function burger(props) {
    return (
        <div className={classes.burger}>
            <BurgerIngredient  type='bread-top'/>
        </div>
    )
}
