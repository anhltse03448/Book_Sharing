import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/BookContentStyle'
import {
  Icon,
  Button,
  CardItem
} from 'native-base'
import colors from '../Themes/Colors'
export default class BookContent extends Component {
  render () {
    const item = {key: 'a'}
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingLeft: 12,
          paddingTop: 12,
          paddingRight: 8,
          backgroundColor: 'white'
        }}
      >
        <Image style={styles.image}
          resizeMode='cover'
          source={require('../Images/cogai.png')}
        />
        <View
          style={styles.contentView}>
          <Text
            style={styles.title}
          >Chắc ai đó sẽ về</Text>
          <Text
            style={styles.author}
          >Tô Hoài
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 50
            }}>
            <Button transparent iconLeft bordered small
              onPress={() => {
                this.props.onAddBookPress(item)
              }}
              style={styles.btnAdd}>
              <Icon name='ios-add-circle-outline'
                style={styles.icon}
              />
              <Text style={styles.textAdd}>Thêm sách</Text>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
