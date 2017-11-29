import { StackNavigator } from 'react-navigation'
import RatingSettingScreen from '../Containers/RatingSettingScreen'
import InterestedCategoryScreen from '../Containers/InterestedCategoryScreen'
import BookSubscribedScreen from '../Containers/BookSubscribedScreen'
import PersonalSettingScreen from '../Containers/PersonalSettingScreen'
import UserProfileScreen from '../Containers/UserProfileScreen'
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
  RatingSettingScreen: { screen: RatingSettingScreen },
  InterestedCategoryScreen: { screen: InterestedCategoryScreen },
  BookSubscribedScreen: { screen: BookSubscribedScreen },
  PersonalSettingScreen: { screen: PersonalSettingScreen },
  UserProfileScreen: { screen: UserProfileScreen },
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
