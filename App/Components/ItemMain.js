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
              paddingTop: 8,
              paddingBottom: 4
            }}
          >
            <Image
              resizeMode='stretch'
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
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingTop: 4
                  }}
                >
                  <Button transparent rounded
                    style={{
                      width: 27,
                      height: 27,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: colors.mainColor
                    }}>
                    <Text
                      style={styles.priceMax}
                    >{41 + ' '}</Text>
                  </Button>
                  <Text
                    style={{
                      marginLeft: 4,
                      color: colors.textSecondColor
                    }}
                  >cuốn sách</Text>
                </View>
              </View>
            </View>
          </Card>
        </View>
      </TouchableOpacity>
    )
  }
}
