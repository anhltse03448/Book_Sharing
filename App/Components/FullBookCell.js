import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/FullBookCellStyle'
import {
  ListItem
} from 'native-base'
export default class FullBookCell extends Component {
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
    return (
      <ListItem style={styles.container}>
        <Image
          style={styles.image}
          source={require('../Images/cogai.png')}
        />
      </ListItem>
    )
  }
}
