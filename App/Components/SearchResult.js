import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native'
import styles from './Styles/SearchResultStyle'
import FullBookCell from '../Components/FullBookCell'

export default class SearchResult extends Component {
  render () {
    console.log(this.props.items)
    return (
      <FlatList
        data={this.props.items}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <FullBookCell item={item} onPressItemSearch={this.props.onPressItemSearch} />}
      />
    )
  }
}
