import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, FlatList, Text } from 'react-native'
import {
  Container,
  Content
} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListBookSoldByUserActions from '../Redux/ListBookSoldByUserRedux'
import DeleteSellingBookActions from '../Redux/DeleteSellingBookRedux'
import { NavigationActions } from 'react-navigation'

// Styles
// import styles from './Styles/UserSellingBookScreenStyle'
import Navigation from '../Components/Navigation'
import BookSubscribedItem from '../Components/BookSubscribedItem'
import Loading from '../Components/Loading'

class UserSellingBookScreen extends Component {
  componentWillMount () {
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      this.props.fetchListBook(res)
    })
    .catch((error) => console.log(error))
  }

  componentWillUpdate (nextProps, nextState) {
    
  }

  onDeleteRow = (id) => {
    this.props.deleteSellingBook(id)
  }

  render () {
    console.log(this.props.listBook)
    return (
      <Container>
        <Navigation
          title='Sách đang bán' />
        <Content>
          {this.props.listBook !== null &&
            this.props.listBook.length === 0 &&
            <Text style={{
              alignSelf: 'center',
              paddingTop: 16,
              fontSize: 20
            }}>
              Không có cuốn sách nào
            </Text>}
          {this.props.listBook
            ? <FlatList
              data={this.props.listBook}
              keyExtractor={(item) => item.id}
              renderItem={(item) =>
                <BookSubscribedItem
                  onDeleteRow={() => this.onDeleteRow(item.item.id)}
                  navigate={this.props.navigate}
                  item={item.item.book} />
              }
            /> : <Loading />}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const listBook = state.listBookSoldByUser.payload
  return {
    listBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (routeName, params) => dispatch(NavigationActions.navigate({
      routeName: routeName,
      params: params
    })),
    fetchListBook: (token) =>
      dispatch(ListBookSoldByUserActions.listBookSoldByUserRequest(token)),
    deleteSellingBook: (id) =>
      dispatch(DeleteSellingBookActions.deleteSellingBookRequest(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSellingBookScreen)
