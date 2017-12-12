import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage, FlatList, Text } from 'react-native'
import {
  Container,
  Content
} from 'native-base'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListBookFavoriteActions from '../Redux/ListBookFavoriteRedux'
import { NavigationActions } from 'react-navigation'

// Styles
// import styles from './Styles/BookSubscribedScreenStyle'
import Navigation from '../Components/Navigation'
import BookSubscribedItem from '../Components/BookSubscribedItem'
import Loading from '../Components/Loading'

class BookSubscribedScreen extends Component {
  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      this.props.fetchListBookFavorite(res)
    })
    .catch((error) => console.log(error))
  }

  render () {
    console.log(this.props.payload)
    return (
      <Container>
        <Navigation
          title='Sách đang theo dõi' />
        <Content>
          {this.props.payload !== null &&
            this.props.payload.length === 0 &&
            <Text style={{
              alignSelf: 'center',
              paddingTop: 16,
              fontSize: 20
            }}>
              Không có cuốn sách nào
            </Text>}
          {this.props.payload
            ? <FlatList
              data={this.props.payload}
              keyExtractor={(item) => item.id}
              renderItem={(item) =>
                <BookSubscribedItem
                  navigate={this.props.navigate}
                  item={item.item} />
              }
            /> : <Loading />}
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload } = state.listBookFavovite
  return {
    payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (routeName, params) => dispatch(NavigationActions.navigate({
      routeName: routeName,
      params: params
    })),
    fetchListBookFavorite: (token) =>
      dispatch(ListBookFavoriteActions.listBookFavoriteRequest(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookSubscribedScreen)
