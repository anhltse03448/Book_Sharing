import React, { Component } from 'react'
import { View, Image, Text, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import UserActions from '../Redux/UserRedux'
import ListBookActions from '../Redux/BookRedux'

import {
  Container,
  Content,
  Button,
  Icon,
  List,
  ListItem,
  Left,
  Body
} from 'native-base'

import Navigation from '../Components/Navigation'
import ListMain from '../Components/ListMain'
import Loading from '../Components/Loading'
// Styles
import styles from './Styles/UserSharedInfoScreenStyle'
import colors from '../Themes/Colors'

class UserSharedInfoScreen extends Component {
  componentWillMount () {
    const userId = this.props.navigation.state.params.userId
    this.props.fetchUser(userId)
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      this.props.fetchListBook(res)
    })
    .catch((error) => console.log(error))
  }

  onPressItem = (item) => {
    this.props.navigation.navigate('BookDetailScreen', {
      book: item
    })
  }

  onPressFull = (items) => {
    this.props.navigation.navigate('FullBookScreen', {
      items: items,
      item: {
        section: 'Sách chia sẻ bởi ' + this.props.navigation.state.params.username
      }
    })
  }

  render () {
    const { user, listBook, navigation } = this.props
    console.tron.log(user)
    return (
      user ? <Container style={styles.container}>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title={navigation.state.params.username} />
        <Content>
          <View style={styles.headerContainer}>
            <View style={styles.imageBackgroundContainer}>
              <Image
                style={styles.imageBackground}
                source={require('../Images/profile-bg.jpg')}
                resizeMode='cover'
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageProfile}
                source={{uri: user.avatar}}
              />
              <View style={styles.buttonInfoContainer}>
                <Button transparent>
                  <Icon name='ios-chatboxes-outline' style={{color: colors.mainColor}} />
                </Button>
                <Button transparent>
                  <Icon name='ios-heart-outline' style={{color: colors.mainColor}} />
                </Button>
              </View>
            </View>
            <View style={styles.infoContainer}>
              <Text style={{fontWeight: '700', fontSize: 16, marginBottom: 4}}>
                {user.name}&nbsp;&nbsp;
                <Icon name='ios-checkmark-circle' style={{fontSize: 15, color: colors.mainColor}} />
              </Text>
              <Text style={{marginBottom: 4, fontSize: 14, color: '#666'}}>
                <Icon name='ios-compass-outline' style={{fontSize: 14, color: '#666'}} />
                &nbsp;&nbsp;{user.location}
              </Text>
            </View>
          </View>
          <View style={styles.bodyContainer}>
            <List>
              <ListItem icon>
                <Left>
                  <Icon name='ios-phone-portrait' />
                </Left>
                <Body>
                  <Text>0129178xxxx</Text>
                </Body>
              </ListItem>
              <ListItem icon last>
                <Left>
                  <Icon name='ios-mail' />
                </Left>
                <Body>
                  <Text>abc</Text>
                </Body>
              </ListItem>
              <ListItem icon last>
                <Left>
                  <Icon name='logo-facebook' />
                </Left>
                <Body>
                  <Text>fb.me/ffoah</Text>
                </Body>
              </ListItem>
            </List>
          </View>
          <View>
            <View
              style={styles.viewHeader}>
              <Text
                style={{
                  fontWeight: '600'
                }}>
                SÁCH CHIA SẺ
              </Text>
              <Button transparent
                onPress={() => this.onPressFull(listBook)}
                style={styles.btnSeeAll}
              >
                <Text style={styles.seeAll}>
                  Xem tất cả
                </Text>
              </Button>
            </View>
            <ListMain items={listBook} onPressItem={this.onPressItem} />
          </View>
        </Content>
      </Container> : <Loading style={{flex: 1, flexDirection: 'row'}} />
    )
  }
}

const mapStateToProps = (state) => {
  const user = state.user.payload
  const listBook = state.listBook.payload
  return {
    user,
    listBook
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (userId) => dispatch(UserActions.userRequest(userId)),
    fetchListBook: (token) =>
      dispatch(ListBookActions.listBookSoldByUserRequest(token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSharedInfoScreen)
