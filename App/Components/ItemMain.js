import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {
  Card,
  Icon
} from 'native-base'
import styles from './Styles/ItemMainStyle'
import { Colors } from '../Themes/index'

export default class ItemMain extends Component {
  onPressItem (item) {
    this.props.onPressItem(item)
  }
  render () {
    const item = {c: 'A'}
    return (
      <TouchableOpacity
        onPress={() => this.onPressItem(item)}
      >
        <View style={styles.container}
        >
          <Card
            style={{
              borderRadius: 8,
              paddingTop: 4,
              paddingBottom: 4
            }}
          >
            <Image
              resizeMode='contain'
              style={styles.image}
              source={require('../Images/cogai.png')}
            />
            <View style={styles.viewText}>
              <Text
                style={styles.title}
              >Chắc ai đó sẽ về</Text>
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Text
                  style={styles.priceMin}
                >
                  {'150,000 '}
                </Text>
                <Icon
                  style={{
                    color: Colors.textPriceMinColor,
                    alignSelf: 'center'
                  }}
                  name='ios-arrow-round-forward' />
                <Text
                  style={styles.priceMax}
                >
                  {' 200,000'}
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </TouchableOpacity>
    )
  }
}
