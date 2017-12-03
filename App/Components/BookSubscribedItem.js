import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image, TouchableHighlight } from 'react-native'
import styles from './Styles/BookSubscribedItemStyle'
import colors from '../Themes/Colors'
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
        <CardItem>
          <Left style={{flex: 1, flexGrow: 3}}>
            <Thumbnail source={{uri: item.cover}} />
            <TouchableHighlight
              underlayColor='#fff'
              onPress={() => this.props.navigate('BookDetailScreen', {book: item})} style={{paddingBottom: 4}}>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.author}</Text>
              </Body>
            </TouchableHighlight>
          </Left>
          <Right>
            <Button
              onPress={this.props.onDeleteRow}
              transparent>
              <Icon name='ios-close-outline' style={{color: colors.mainColor}} />
            </Button>
          </Right>
        </CardItem>
      </Card>
    )
  }
}
