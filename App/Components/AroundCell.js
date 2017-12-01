import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/AroundCellStyle'
import {
  ListItem,
  Icon
} from 'native-base'
export default class AroundCell extends Component {
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
      <ListItem
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={require('../Images/LoginBg.png')}
        />
        <View>
          <Text>Lê Tuấn Anh</Text>
          <View style={{
            flexDirection: 'row'
          }}>
            <Icon name='ios-flag-outline' />
            <Text>50m</Text>
            <Icon />
            <Text></Text>
          </View>
        </View>
      </ListItem>
    )
  }
}
