import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native'
import styles from './Styles/SearchResultStyle'
import FullBookCell from '../Components/FullBookCell'

export default class SearchResult extends Component {
  render () {
    return (
      <FlatList
        data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
        renderItem={({item}) => <FullBookCell onPressItemSearch={this.props.onPressItemSearch} />}
      />
    )
  }
}
