import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/AroundCellStyle'
import {
  ListItem,
  Icon,
  Right,
  Button
} from 'native-base'
import colors from '../Themes/Colors'
import CountBook from '../Components/CountBook'
export default class AroundCell extends Component {
  render () {
    const user = {key: 'a'}
    return (
      <ListItem
        onPress={() => this.props.onPress(user)}
        style={styles.container}
      >
        <Image
          style={styles.image}
          source={require('../Images/LoginBg.png')}
        />
        <View
          style={{
            paddingLeft: 12,
            flexGrow: 6
          }}>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                color: colors.textMainColor,
                paddingRight: 16
              }}
          >Lê Tuấn Anh</Text>
          </View>
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
                  alignItems: 'center'
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: '700',
                    color: colors.mainColor
                  }}
                >{41}</Text>
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
        <View
          style={{
            flexDirection: 'row',
            flexGrow: 2
          }}
        >
          <Icon name='ios-flag-outline'
            style={{
              fontSize: 22
            }}
          />
          <Text
            style={{
              marginLeft: 6,
              color: colors.textSecondColor,
              fontWeight: '500'
            }}
          >50m</Text>
        </View>
      </ListItem>
    )
  }
}
