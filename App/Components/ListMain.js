import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import styles from './Styles/ListMainStyle'
import ItemMain from './ItemMain'
import {
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import Loading from '../Components/Loading'
import { NavigationActions } from 'react-navigation'

class ListMain extends Component {
  renderItem (item) {
    return (
      <ItemMain item={item} onPressItem={() => this.props.navigateToBookDetail(item)} />
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

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToBookDetail: (book) => dispatch(NavigationActions.navigate({
      routeName: 'BookDetailScreen',
      params: {book: book}
    }))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListMain)
