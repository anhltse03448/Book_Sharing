import { StackNavigator } from 'react-navigation'
import ListBookSellerScreen from '../Containers/ListBookSellerScreen'
import BookCommentScreen from '../Containers/BookCommentScreen'
import BookDetailScreen from '../Containers/BookDetailScreen'
import BookFollowScreen from '../Containers/BookFollowScreen'
import NoticeScreen from '../Containers/NoticeScreen'
import UserSettingScreen from '../Containers/UserSettingScreen'
import NotificationScreen from '../Containers/NotificationScreen'
import SellScreen from '../Containers/SellScreen'
import SearchScreen from '../Containers/SearchScreen'
import NewfeedScreen from '../Containers/NewfeedScreen'
import MainScreen from '../Containers/MainScreen'
import InterestSelectScreen from '../Containers/InterestSelectScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  ListBookSellerScreen: { screen: ListBookSellerScreen },
  BookCommentScreen: { screen: BookCommentScreen },
  BookDetailScreen: { screen: BookDetailScreen },
  BookFollowScreen: { screen: BookFollowScreen },
  NoticeScreen: { screen: NoticeScreen },
  UserSettingScreen: { screen: UserSettingScreen },
  NotificationScreen: { screen: NotificationScreen },
  SellScreen: { screen: SellScreen },
  SearchScreen: { screen: SearchScreen },
  NewfeedScreen: { screen: NewfeedScreen },
  MainScreen: { screen: MainScreen },
  InterestSelectScreen: { screen: InterestSelectScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
