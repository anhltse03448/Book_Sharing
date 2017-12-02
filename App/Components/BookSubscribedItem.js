import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native'
import styles from './Styles/BookSubscribedItemStyle'
import {
  Card,
  CardItem,
  Thumbnail,
  Left,
  Right,
  Body,
  Icon,
  Button,
  Text
} from 'native-base'

export default class BookSubscribedItem extends Component {
  renderItem (item) {
    return (
      <View style={styles.imageFeatureContainer}>
        <Image style={styles.imageFeature} source={require('../Images/LoginBg.png')} />
      </View>
    )
  }

  render () {
    const { item } = this.props

    return (
      <Card>
        <TouchableHighlight
          underlayColor='#fff'
          onPress={() => this.props.navigate('BookDetailScreen', {book: item})} style={{paddingBottom: 4}}>
          <CardItem>
            <Left style={{flex: 1, flexGrow: 3}}>
              <Thumbnail source={{uri: item.cover}} />
              <Body>
                <Text>{item.name}</Text>
                <Text note>J.K Rowling</Text>
              </Body>
            </Left>
          </CardItem>
        </TouchableHighlight>
      </Card>
    )
  }
}
