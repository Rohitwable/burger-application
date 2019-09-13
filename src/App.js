import React, { Component } from 'react'
import Layout from './components/layout'
import BurgerBuilder from './containers/burger-builder'
class App extends Component {
  render() {
    return (
     <Layout>
      <BurgerBuilder/>
     </Layout>
    )
  }
}

export default App
