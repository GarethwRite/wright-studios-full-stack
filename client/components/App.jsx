import React from 'react'
import { connect } from 'react-redux'


import { fetchFruits } from '../actions'
import Navbar from './Navbar'

export class App extends React.Component {
  state = {
    fruits: []
  }

  componentDidMount () {
    this.props.dispatch(fetchFruits())
  }

  render () {
    return (
      <div className='app'>
        <Navbar/>
        <h1>Wright Studios</h1>
      </div>
    )
  }
}

function mapStateToProps (globalState) {
  return {
    fruits: globalState.fruits
  }
}

export default connect(mapStateToProps)(App)


//fruits database list
{/* <ul>
  {this.props.fruits.map(fruit => (
    <li key={fruit}>{fruit}</li>
  ))}
</ul> */}