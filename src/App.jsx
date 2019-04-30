import React, { Component } from 'react'
import Routes from './components/Routes/Routes'
import { connect } from "react-redux"
import { startAction } from "./actions/startAction";
import { stopAction } from "./actions/stopAction";


class App extends Component {


  render() {
    return (
      <Routes/>
    )
  }
}

const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = dispatch => ({
  startAction,
  stopAction
})

export default connect(mapStateToProps, mapDispatchToProps)(App);