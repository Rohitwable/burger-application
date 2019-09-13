import React from 'react'
import classes from './styles.css'
import BurgerIngredient from './burger-ingredient'
export default function burger(props) {
    let transFormedIngredient = Object.keys(props.ingredients)
    .map((ingKey => {
        return [...Array(props.ingredients[ingKey])]
        .map((_, i)=> <BurgerIngredient key={ingKey + i} type={ingKey}/>)
    }))
    .reduce((cur, nex)=> {
        return cur.concat(nex)
    }, [])
    if(transFormedIngredient.length === 0){
        transFormedIngredient = <p>Please start adding ingredients</p>
    }
    return (
        <div className={classes.burger}>
        <BurgerIngredient type='bread-top'/>
            {transFormedIngredient}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}
