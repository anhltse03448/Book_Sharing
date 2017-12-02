import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, Platform } from 'react-native'
import styles from './Styles/BookContentStyle'
import {
  Icon,
  Button,
  Text as NBText,
  Badge
} from 'native-base'
import colors from '../Themes/Colors'

export default class BookContent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isPress: false,
      isCheckedBookmark: this.props.listBookFavorite.filter(
        (item) => item.id === this.props.item.id).length > 0
    }
  }

  handleCheckBookmark = () => {
    this.props.onPressFavorite(!this.state.isCheckedBookmark)
    this.setState({isCheckedBookmark: !this.state.isCheckedBookmark})
  }

  render () {
    const { item, navigation } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.contentViewContainer}>
          <Image style={styles.image}
            resizeMode='cover'
            source={{uri: item.cover}}
          />
          <View style={{flex: 1}}>
            <View style={styles.contentView}>
              <Text style={styles.title}>{item.name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 8}}>
                <Icon name='md-person' style={{color: colors.mainColor, fontSize: 22}} />
                <Text style={styles.author}>
                  &nbsp;&nbsp;Tô Hoài
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', marginTop: 8, marginLeft: 8}}>
              <Badge style={{marginRight: 4}} primary>
                <NBText>truyện ngắn</NBText>
              </Badge>
              <Badge primary>
                <NBText>best seller</NBText>
              </Badge>
            </View>
          </View>
          <View style={{marginTop: 0}}>
            <Icon
              onPress={this.handleCheckBookmark}
              name={this.state.isCheckedBookmark ? 'ios-bookmark' : 'ios-bookmark-outline'}
              style={{color: colors.mainColor, fontSize: 25}}
              />
          </View>
        </View>
        <View style={{
          borderTopWidth: 1,
          borderTopColor: '#f9f9f9',
          paddingTop: 12,
          flexDirection: 'row',
          marginTop: 12
        }}>
          <View style={[styles.buttonSubBlock, {marginRight: 6}]}>
            <Button bordered small
              onPress={() => {
                this.setState({ isPress : !this.state.isPress });
                setTimeout(()=>{this.setState({isPress : !this.state.isPress})}, 2000);
                navigation.navigate('ListBookSellerScreen', {bookId: item.id})
              }}
              style={styles.buttonSub}
              disabled={this.state.isPress}>
              <View style={styles.icon}>
                <Text style={{fontSize: 14, color: '#fff'}}>41</Text>
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <NBText>Đang bán</NBText>
              </View>
            </Button>
          </View>
          <View style={[styles.buttonSubBlock, {marginLeft: 6}]}>
            <Button bordered small
              onPress={() => {
                this.setState({ isPress : !this.state.isPress });
                setTimeout(()=>{this.setState({isPress : !this.state.isPress})},2000);
                this.props.onAddBookPress(item)
              }}
              style={styles.buttonSub} disabled={this.state.isPress}>
              <View style={styles.icon}>
                <Icon style={{color: '#000', fontSize: 18}}
                      ios='ios-add-circle-outline' android='md-bookmarks' />
              </View>
              <View style={{flex: 1, alignItems: 'center'}}>
                <NBText>Thêm sách</NBText>
              </View>
            </Button>
          </View>
        </View>
      </View>
    )
  }
}
