import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styles from './Styles/ListMainStyle'
import ItemMain from './ItemMain'
import {
  FlatList
} from 'react-native'
export default class ListMain extends Component {
  renderItem (item) {
    return (
      <ItemMain />
    )
  }

  render () {
    return (
      <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
        renderItem={({item}) => this.renderItem(item)}
      />
    )
  }
}
