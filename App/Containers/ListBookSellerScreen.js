import React, { Component } from 'react'
import { FlatList, View, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import ListSellerBookActions from '../Redux/ListSellerBookRedux'

// Styles
import {
  Container,
  Content
} from 'native-base'
import styles from './Styles/ListBookSellerScreenStyle'
import SellerCell from '../Components/SellerCell'
import Navigation from '../Components/Navigation'
class ListBookSellerScreen extends Component {
  componentWillMount () {
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      this.props.fetchListSellerBook({
        token: res,
        bookId: this.props.navigation.state.params.bookId
      })
    })
    .catch((error) => console.log(error))
  }

  renderItem (item) {
    return (
      <SellerCell
        item={item}
        onPress={() => this.props.navigation.navigate('UserSharedInfoScreen')}
        onPressMessage={this.onPressMessage.bind(this)} />
    )
  }

  onPressMessage (user) {
    this.props.navigation.navigate('ChatScreen', {user: user})
  }

  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Người chia sẻ' />
        <Content>
          <View style={styles.container}>
            <FlatList
              data={this.props.payload}
              keyExtractor={(item) => item.id}
              renderItem={({item}) => this.renderItem(item)}
            />
          </View>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const { payload } = state.listSellerBook
  return {
    payload
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchListSellerBook: ({token, bookId}) =>
      dispatch(ListSellerBookActions.listSellerBookRequest({token, bookId}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookSellerScreen)
