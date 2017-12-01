import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/FullBookCellStyle'
import {
  ListItem,
  Left,
  Body,
  Right
} from 'native-base'
import CountBook from '../Components/CountBook'
export default class FullBookCell extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    let item = {key: 'a'}
    return (
      <ListItem style={styles.container}
        onPress={() => this.props.onPressItemSearch(item)}>
        <Image
          style={styles.image}
          source={require('../Images/cogai.png')}
        />
        <Body style={styles.infoContainer}>
          <Text style={styles.title}>Cô gái đến từ hôm qua</Text>
          <Text style={styles.author}>Tác giả: Nguyễn Nhật Ánh</Text>
          <Text style={styles.published}>Xuất bản năm 1001</Text>
          <CountBook />
        </Body>
      </ListItem>
    )
  }
}
