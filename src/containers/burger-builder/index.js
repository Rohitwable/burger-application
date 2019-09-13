import React, { Component } from 'react'
import Aux from '../../components/hoc/aux'
import Burger from '../../components/burger'
import BuildControls from '../../components/burger/build-controls'
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.5,
    meat: 0.3,
    bacon: 0.7
}
 class BurgerBuilder extends Component {
     state = {
         ingredient : {
             salad: 1,
             cheese:2 ,
             bacon: 2,
             meat: 2
         },
         totalPrice: 4.0
     }
     addIngredientHandler =(type) =>{
        const oldCount = this.state.ingredient[type]
        const newCount = oldCount + 1
        let updatedIngredientCount = {
            ...this.state.ingredient
        }
        updatedIngredientCount[type] = newCount
         const priceAddition = INGREDIENT_PRICES[type]
         const oldPrice = this.state.totalPrice
         const newPrice = oldPrice + priceAddition
         this.setState({totalPrice:newPrice, ingredient: updatedIngredientCount })
     }
    render() {
        return (
            <Aux>
                <div>
                    <Burger ingredients ={this.state.ingredient}/>
                </div>
                <div>
                    <BuildControls ingredientAdded={this.addIngredientHandler}/>
                </div>
            </Aux>
        )
    }
}
export default BurgerBuilder