import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, FlatList, Dimensions, TouchableHighlight } from 'react-native'
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
        source={{uri: item}} />
    )
  }

  handleShowMore = () => {
    this.setState({isShowMore: !this.state.isShowMore})
    this.props.onPressMessage(this.props.item)
  }

  render () {
    const { item } = this.props
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
                <Thumbnail source={{uri: item.user.avatar ? item.user.avatar : ''}} />
                <Body>
                  <Text style={styles.title}>{item.user.username}</Text>
                  <Text style={styles.price}>Giá bán: {item.price}</Text>
                  <Text style={styles.address}>{item.user.location}</Text>
                </Body>
              </Left>
            </TouchableHighlight>
            <Right>
              {!item.isOwner && <Icon
                onPress={this.handleShowMore}
                name='ios-chatboxes'
                style={{color: colors.mainColor, fontSize: 30}} />}
            </Right>
          </CardItem>
          <CardItem style={{
            flex: 1,
            flexDirection: 'column',
            alignItems: 'flex-start'
          }}>
            <View style={{marginBottom: 8}}>
              <Text>
                {item.content}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <FlatList horizontal
                style={{width: Dimensions.get('window').width}}
                showsHorizontalScrollIndicator={false}
                data={item.images}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => this.renderItem(item)}
              />
            </View>
          </CardItem>
        </Card>
      </View>
    )
  }
}
