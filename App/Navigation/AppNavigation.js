import { StackNavigator } from 'react-navigation'
import UserSellingBookScreen from '../Containers/UserSellingBookScreen'
import ChatHistoryScreen from '../Containers/ChatHistoryScreen'
import ChatScreen from '../Containers/ChatScreen'
import AddBookScreen from '../Containers/AddBookScreen'
import UserSharedInfoScreen from '../Containers/UserSharedInfoScreen'
import FullBookScreen from '../Containers/FullBookScreen'
import AroundScreen from '../Containers/AroundScreen'
import ListBookSellerScreen from '../Containers/ListBookSellerScreen'
import BookCommentScreen from '../Containers/BookCommentScreen'
import BookDetailScreen from '../Containers/BookDetailScreen'
import BookFollowScreen from '../Containers/BookFollowScreen'
import NoticeScreen from '../Containers/NoticeScreen'
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
  UserSellingBookScreen: { screen: UserSellingBookScreen },
  ChatHistoryScreen: { screen: ChatHistoryScreen },
  ChatScreen: { screen: ChatScreen },
  AddBookScreen: { screen: AddBookScreen },
  UserSharedInfoScreen: { screen: UserSharedInfoScreen },
  FullBookScreen: { screen: FullBookScreen },
  AroundScreen: { screen: AroundScreen },
  ListBookSellerScreen: { screen: ListBookSellerScreen },
  BookCommentScreen: { screen: BookCommentScreen },
  BookDetailScreen: { screen: BookDetailScreen },
  BookFollowScreen: { screen: BookFollowScreen },
  NoticeScreen: { screen: NoticeScreen },
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
