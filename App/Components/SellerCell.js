import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native'
import {
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Thumbnail,
  Icon
} from 'native-base'
import styles from './Styles/SellerCellStyle'
import colors from '../Themes/Colors'

export default class SellerCell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShowMore: false
    }
  }

  renderItem (item) {
    return (
      <Image
        style={{
          height: 150,
          width: 100,
          margin: 4
        }}
        source={require('../Images/cogai.png')} />
    )
  }

  handleShowMore = () => {
    this.setState({isShowMore: !this.state.isShowMore})
    this.props.onPressMessage(this.props.item)
  }

  render () {
    const featureImageData = [
      {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}
    ]

    const { item } = this.props
    console.log('ItemIn Seller Cell:  ', item)
    return (
      <View style={styles.card}>
        <Card>
          <CardItem>
            <TouchableHighlight
              activeOpacity={1}
              underlayColor='#fff'
              style={{flexGrow: 2}}
              onPress={this.props.onPress}>
              <Left>
                <Thumbnail source={{uri: item.avatar ? item.avatar : ''}} />
                <Body>
                  <Text style={styles.title}>{item.username}</Text>
                  <Text style={styles.price}>Giá bán: {item.price}</Text>
                  <Text style={styles.address}>{item.location}</Text>
                </Body>
              </Left>
            </TouchableHighlight>
            <Right>
              <Icon
                onPress={this.handleShowMore}
                name='ios-chatboxes'
                style={{color: colors.mainColor, fontSize: 30}} />
            </Right>
          </CardItem>
          <CardItem style={{flexDirection: 'column'}} cardBody>
            <View style={{marginBottom: 8}}>
              <Text>
                {item.content}
              </Text>
            </View>
            <FlatList horizontal
              showsHorizontalScrollIndicator={false}
              data={featureImageData}
              renderItem={({item}) => this.renderItem(item)}
            />
          </CardItem>
        </Card>
      </View>
    )
  }
}
