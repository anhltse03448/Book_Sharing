import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Header
} from 'native-base'
import colors from '../Themes/Colors'
import styles from './Styles/MainScreenStyle'
import NewfeedScreen from './NewfeedScreen'
import SearchScreen from './SearchScreen'
import SellScreen from './SellScreen'
import NotificationScreen from './NotificationScreen'
import UserSettingScreen from './UserSettingScreen'

class MainScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedTab: 'HOME'
    }
  }
  onPress (type) {
    console.log('TYPE PRESS: ', type)
    this.setState({ selectedTab: type })
  }

  getStyleIcon (type) {
    if (type === this.state.selectedTab) {
      return {
        fontSize: 33,
        color: colors.mainColor
      }
    }
    return styles.icon
  }

  getStyleText (type) {
    if (type === this.state.selectedTab) {
      return {
        fontSize: 11,
        color: colors.mainColor
      }
    }
    return styles.text
  }

  getContent (type) {
    switch (type) {
      case 'HOME':
        return <NewfeedScreen />
      case 'SEARCH':
        return <SearchScreen />
      case 'SELL':
        return <SellScreen />
      case 'NOTIFICATION':
        return <NotificationScreen />
      default:
        return <UserSettingScreen navigation={this.props.navigation} />
    }
  }
  render () {
    console.log(this.props.navigation)
    let content = this.getContent(this.state.selectedTab)
    return (
      <Container>
        {content}
        <Footer>
          <FooterTab>
            <Button vertical
              onPress={() => this.onPress('HOME')}>
              <Icon name='home'
                style={this.getStyleIcon('HOME')} />
              <Text
                style={this.getStyleText('HOME')}
              > Home </Text>
            </Button>
            <Button vertical
              onPress={() => this.onPress('SEARCH')}>
              <Icon name='search'
                style={this.getStyleIcon('SEARCH')} />
              <Text
                style={this.getStyleText('SEARCH')}
              > Search </Text>
            </Button>
            <Button vertical rounded
              onPress={() => this.onPress('SELL')}>
              <Icon
                name='logo-instagram'
                style={this.getStyleIcon('SELL')}
              />
              <Text
                style={this.getStyleText('SELL')}
              > Sell </Text>
            </Button>
            <Button vertical
              onPress={() => this.onPress('NOTIFICATION')}>
              <Icon name='ios-notifications-outline'
                style={this.getStyleIcon('NOTIFICATION')} />
              <Text
                style={this.getStyleText('NOTIFICATION')}
              > Notify </Text>
            </Button>
            <Button vertical
              onPress={() => this.onPress('PERSON')}>
              <Icon name='person'
                style={this.getStyleIcon('PERSON')} />
              <Text
                style={this.getStyleText('PERSON')}
              > User </Text>
            </Button>
          </FooterTab>
        </Footer>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)
