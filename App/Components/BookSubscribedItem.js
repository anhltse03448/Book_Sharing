import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Image, FlatList } from 'react-native'
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
    console.log(item)
    const featureImageData = [
      {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}
    ]

    return (
      <Card style={{paddingBottom: 4}}>
        <CardItem>
          <Left>
            <Thumbnail source={require('../Images/LoginBg.png')} />
            <Body>
              <Text>Harry Potter</Text>
              <Text note>J.K Rowling</Text>
            </Body>
          </Left>
          <Right>
            <Button style={{height: 20}} transparent>
              <Icon name='md-heart' style={{fontSize: 25, color: '#cc0000'}} />
            </Button>
          </Right>
        </CardItem>
        <CardItem cardBody>
          <FlatList horizontal
            showsHorizontalScrollIndicator={false}
            data={featureImageData}
            renderItem={({item}) => this.renderItem(item)}
          />
        </CardItem>
      </Card>
    )
  }
}
