import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import styles from './Styles/BookContentStyle'
import {
  Card,
  ListItem,
  List
} from 'native-base'
export default class BookContent extends Component {
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
    return (
      <Card
        style={{
          flexDirection: 'row'
        }}
      >
        <Image style={styles.image}
          resizeMode='cover'
          source={require('../Images/LoginBg.png')}
        />
        <View
          style={styles.contentView}>
          <Text
            style={styles.title}
          >Chắc ai đó sẽ về</Text>
          <List>
            <ListItem>
              <Text>Tác giả: </Text>
              <Text>Tô Hoài</Text>
            </ListItem>
            <ListItem>
              <Text></Text>
              <Text>Nhà Xuất Bản Phụ Nữ</Text>
            </ListItem>
            <ListItem>
              <Text>Gía bìa</Text>
              <Text>100k</Text>
            </ListItem>
          </List>
        </View>
      </Card>
    )
  }
}
