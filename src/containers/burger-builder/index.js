import React, { Component } from 'react'
import Aux from '../../components/hoc/aux'
import Burger from '../../components/burger'
 class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>
                    <Burger/>
                </div>
                <div>
                    Build controls
                </div>
            </Aux>
        )
    }
}
export default BurgerBuilder