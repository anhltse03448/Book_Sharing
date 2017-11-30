import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, FlatList } from 'react-native'
import styles from './Styles/SearchResultStyle'
import FullBookCell from '../Components/FullBookCell'

export default class SearchResult extends Component {
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
      <FlatList
        data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
        renderItem={({item}) => <FullBookCell />}
      />
    )
  }
}
