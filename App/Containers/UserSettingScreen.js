import React, { Component } from 'react'
import {
  AsyncStorage
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import { NavigationActions } from 'react-navigation'

// Styles
import {
  Container,
  Content,
  List,
  Header,
  Body,
  Title
} from 'native-base'
import styles from './Styles/UserSettingScreenStyle'
import UserInfo from '../Components/UserInfo'
import ListItem from '../Components/ListItem'
import HeaderDefault from '../Components/HeaderDefault'
import colors from '../Themes/Colors'

class UserSettingScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null
    }
  }
  componentWillMount () {
    AsyncStorage.getItem('@BookSharing:user')
    .then((res) => {
      if (res) {
        this.setState({user: JSON.parse(res)})
      }
    })
    .catch((error) => console.log(error))
  }

  handleLogout = async () => {
    AsyncStorage.removeItem('@BookSharing:user').done(() => {
      AsyncStorage.removeItem('@BookSharing:token').done(() => {
        this.props.resetApp()
      })
    })
  }

  render () {
    const { navigation } = this.props
    const { user } = this.state
    return (
      <Container>
        <HeaderDefault title='Cá nhân' />
        <Content>
          {user &&
            <UserInfo user={user} onPress={() => navigation.navigate('UserProfileScreen')} />
          }
          <List style={styles.listWrapper}>
            <ListItem
              style={{
                textColor: colors.mainColor
              }}
              onPress={() => navigation.navigate('UserSellingBookScreen')}
              ios='ios-albums-outline'
              android='md-albums'
              text='Sách đang bán'
              hasSubPage
            />
          </List>
          <List style={styles.listWrapper}>
            <ListItem
              onPress={() => navigation.navigate('BookSubscribedScreen')}
              ios='ios-bookmarks-outline'
              android='md-bookmarks'
              text='Sách yêu thích'
              hasSubPage
            />
            <ListItem
              onPress={() => navigation.navigate('InterestedCategoryScreen')}
              ios='ios-cafe-outline'
              android='md-cafe'
              text='Danh mục quan tâm'
              hasSubPage
            />
          </List>
          <List style={styles.listWrapper}>
            <ListItem
              onPress={() => navigation.navigate('PersonalSettingScreen')}
              ios='ios-settings-outline'
              android='md-settings'
              text='Thiết lập cá nhân'
              hasSubPage
            />
            <ListItem
              onPress={this.handleLogout}
              ios='ios-log-out-outline'
              android='md-log-out'
              text='Thoát tài khoản'
              textColor='#e60000'
            />
          </List>
        </Content>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetApp: () => dispatch(
      NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'LaunchScreen' })
        ]
      })
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingScreen)
