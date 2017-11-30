import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, FlatList } from 'react-native'
import {
  Button,
  Card,
  CardItem,
  Left,
  Right,
  Body,
  Thumbnail,
  Icon,
  Toast
} from 'native-base'
import styles from './Styles/SellerCellStyle'

export default class SellerCell extends Component {
  // constructor (props) {
  //   super(props)
  // }
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

  render () {
    const featureImageData = [
      {key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}, {key: 'e'}
    ]

    return (
      <View style={styles.card}>
        <Card>
          <CardItem>
            <Left style={{flexGrow: 2}}>
              <Thumbnail source={require('../Images/LoginBg.png')} />
              <Body>
                <Text style={styles.title}>Huy Trần</Text>
                <Text style={styles.price}>Giá bán: 100k</Text>
                <Text style={styles.status}>Tình trạng: tốt</Text>
                <Text style={styles.address}>FPT University - 1km</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
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
