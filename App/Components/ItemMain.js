import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {
  Card,
  Icon,
  Button
} from 'native-base'
import styles from './Styles/ItemMainStyle'
import colors from '../Themes/Colors'
import CountBook from '../Components/CountBook'
export default class ItemMain extends Component {
  onPressItem (item) {
    this.props.onPressItem(item)
  }
  render () {
    const { item } = this.props
    let name = item.name
    if (name.length >= 20) {
      name = name.substring(0, 20) + '...'
    }
    if (name.length < 17) {
      name = name + '\n'
    }    
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => this.onPressItem(item)}
      >
        <View style={styles.container}
        >
          <Card
            style={{
              paddingTop: 8,
              paddingBottom: 4
            }}
          >
            <Image
              resizeMode='stretch'
              style={styles.image}
              onError={() => console.log('err')}
              source={{uri: item.cover}}
            />
            <View style={styles.viewText}>
              <Text
                style={styles.title}
              >{name}</Text>
              <CountBook />
            </View>
          </Card>
        </View>
      </TouchableOpacity>
    )
  }
}
