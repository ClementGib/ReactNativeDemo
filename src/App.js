import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Navigation from './components/Navigation'

//redux
import { Provider } from 'react-redux'
import Store from './store/configureStore'

export default class App extends Component {
  render () {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}
