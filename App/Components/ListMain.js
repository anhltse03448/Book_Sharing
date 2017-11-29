import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styles from './Styles/ListMainStyle'
import ItemMain from './ItemMain'
import {
  FlatList
} from 'react-native'
export default class ListMain extends Component {
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

  renderItem (item) {
    return (
      <ItemMain />
    )
  }

  render () {
    return (
      <FlatList horizontal
        style={styles.flatList}
        data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
        renderItem={({item}) => this.renderItem(item)}
      />
    )
  }
}
