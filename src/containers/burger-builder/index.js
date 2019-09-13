import React, { Component } from 'react'
import Aux from '../../components/hoc/aux'
import Burger from '../../components/burger'
 class BurgerBuilder extends Component {
     state = {
         ingredient : {
             salad: 1,
             cheese:2 ,
             bacon: 2,
             meat: 2
         }
     }
    render() {
        return (
            <Aux>
                <div>
                    <Burger ingredients ={this.state.ingredient}/>
                </div>
                <div>
                    Build controls
                </div>
            </Aux>
        )
    }
}
export default BurgerBuilder