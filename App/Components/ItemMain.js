import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import {

} from 'native-base'
import styles from './Styles/ItemMainStyle'

export default class ItemMain extends Component {
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
      <View style={styles.container}>
        <Image
          resizeMode='contain'
          style={{
            width: 170,
            height: 180,
            marginBottom: 12
          }}
          source={require('../Images/cogai.png')}
        />
        <Text>Cô gái đến từ hôm qua</Text>
        <Text>150000 -> 2000</Text>
      </View>
    )
  }
}
