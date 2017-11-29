import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native'
import styles from './Styles/TrendStyle'
import {
  Button,
  Content
} from 'native-base'

export default class Trend extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    const arr = ['Cô gái đến từ hôm qua', 'Harry Potter', 'Alibaba', 'Hello World', 'ADSDADAS'] 
    let content = arr.map(item => {
      return (
        <Button transparent bordered rounded
          style={styles.button}>
          <Text style={styles.text}>{item}</Text>
        </Button>
      )
    })
    return (
      <Content contentContainerStyle={styles.container}>
        {content}
      </Content>
    )
  }
}
