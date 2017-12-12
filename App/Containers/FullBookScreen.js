import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListBookActions from '../Redux/ListBookRedux'
import { NavigationActions } from 'react-navigation'

// Styles
import {
  Container,
  Content,
  Header,
  Item,
  Button,
  Icon,
  Input
} from 'native-base'
import Navigation from '../Components/Navigation'
import styles from './Styles/FullBookScreenStyle'
import FullBookCell from '../Components/FullBookCell'
import Loading from '../Components/Loading'

class FullBookScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }

  componentWillMount () {
    this.props.fetchBookList()
  }

  renderItem (item) {
    return (
      <FullBookCell
        item={item}
        onPressItemSearch={(item) => this.props.navigateToBookDetail(item)}
      />
    )
  }

  render () {
    const { navigation } = this.props
    const items = navigation.state.params.items || this.props.payload
    return (
      <Container>
        <Navigation
          title={this.props.navigation.state.params.item.section} />
        {items
          ? <Content>
            <FlatList
              data={items}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => this.renderItem(item)}
            />
          </Content>
          : <Loading style={{flex: 1, flexDirection: 'row'}} />}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload } = state.listBook
  return {
    payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigateToBookDetail: (book) => dispatch(NavigationActions.navigate({
      routeName: 'BookDetailScreen',
      params: {book: book}
    })),
    fetchBookList: () => dispatch(ListBookActions.listBookRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullBookScreen)
