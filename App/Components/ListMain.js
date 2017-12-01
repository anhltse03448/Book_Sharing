import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styles from './Styles/ListMainStyle'
import ItemMain from './ItemMain'
import {
  FlatList
} from 'react-native'
import Loading from '../Components/Loading'

export default class ListMain extends Component {
  renderItem (item) {
    return (
      <ItemMain item={item} onPressItem={() => this.props.onPressItem(item)} />
    )
  }

  render () {
    return (
      this.props.items ? <FlatList horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
        data={this.props.items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => this.renderItem(item)}
      /> : <Loading />
    )
  }
}
