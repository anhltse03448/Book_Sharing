import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native'
import styles from './Styles/TrendStyle'
import {
  Button,
  Content
} from 'native-base'
import Loading from '../Components/Loading'

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
    const { items } = this.props
    let arr = []
    if (items) {
      arr.push(items[0])
      arr.push(items[3])
      arr.push(items[2])
      arr.push(items[8])
      arr.push(items[10])
    }
    let content = arr.map(item => {
      return (
        <Button
          onPress={() => this.props.onItemPress(item.name)}
          key={item.id} transparent bordered rounded
          style={styles.button}>
          <Text style={styles.text}>{item.name}</Text>
        </Button>
      )
    })
    return (
      items ? <Content contentContainerStyle={styles.container}>
        {content}
      </Content> : <Loading />
    )
  }
}
