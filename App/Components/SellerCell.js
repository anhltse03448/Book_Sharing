import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native'
import {
  List,
  ListItem
} from 'native-base'
import styles from './Styles/SellerCellStyle'

export default class SellerCell extends Component {

  render () {
    return (
      <View
        style={styles.container}
      >
        <View>
          <Image
            style={styles.image}
            source={require('../Images/LoginBg.png')}
          />
          <Text>
            
          </Text>
        </View>
        
        <View>
          <List>
            <ListItem>
              <Text>Giá: </Text>
              <Text>100,000</Text>
            </ListItem>
            <ListItem>
              <Text>Giá: </Text>
              <Text>100,000</Text>
            </ListItem>
            <ListItem>
              <Text>Giá: </Text>
              <Text>100,000</Text>
            </ListItem>
          </List>
        </View>
      </View>
    )
  }
}
