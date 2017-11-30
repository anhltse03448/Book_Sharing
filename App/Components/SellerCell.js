import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, FlatList } from 'react-native'
import {
  ListItem,
  Button,
  Card
} from 'native-base'
import styles from './Styles/SellerCellStyle'

export default class SellerCell extends Component {
  constructor (props) {
    super(props)
    this.state = {
      contact: 'Liên hệ'
    }
  }
  renderItem (item) {
    return (
      <Image
        style={{
          height: 150,
          width: 100,
          margin: 8
        }}
        source={require('../Images/cogai.png')} />
    )
  }

  contactPress () {
    this.setState({
      contact: 'Dang liên hệ'
    })
  }

  render () {
    return (
      <Card
        style={styles.card}>
        <View
          style={{
            flexDirection: 'row'
          }}>
          <Image
            style={styles.image}
            source={require('../Images/LoginBg.png')}
          />
          <View
            style={{
              flex: 1
            }}
          >
            <View>
              <Text>Mai</Text>
              <Text>Giá bán: 100k</Text>
              <Text>Tình trạng: tốt</Text>
              <Text>Kí túc xá ĐH FTU - 22 km</Text>
            </View>
          </View>
          <Button transparent
            onPress={() => this.contactPress()}>
            <Text>{this.state.contact}</Text>
          </Button>
        </View>
        <FlatList horizontal
          data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}, {key: 'c', section: 'Viễn tưởng'}]}
          renderItem={({item}) => this.renderItem(item)}
        />
      </Card>
    )
  }
}
