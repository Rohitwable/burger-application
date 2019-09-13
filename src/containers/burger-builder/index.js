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
             salad: 0,
             cheese:0,
             bacon: 0,
             meat: 0
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
     removeIngredientHandler =(type) =>{
        const oldCount = this.state.ingredient[type]
        if(oldCount <= 0){
            return 
        }
        const newCount = oldCount - 1
        let updatedIngredientCount = {
            ...this.state.ingredient
        }
        updatedIngredientCount[type] = newCount
         const priceDeduction = INGREDIENT_PRICES[type]
         const oldPrice = this.state.totalPrice
         const newPrice = oldPrice - priceDeduction
         this.setState({totalPrice:newPrice, ingredient: updatedIngredientCount })
     }
    render() {
        const disabledInfo = {
            ...this.state.ingredient
        }
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
                <div>
                    <Burger ingredients ={this.state.ingredient}/>
                </div>
                <div>
                    <BuildControls 
                    ingredientAdded={this.addIngredientHandler} 
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    />
                </div>
            </Aux>
        )
    }
}
export default BurgerBuilder