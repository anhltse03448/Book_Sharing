import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/NavigationStyle'
import {
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right
} from 'native-base'
import colors from '../Themes/Colors'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
class Navigation extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  render () {
    return (
      <Header
        style={{
          backgroundColor: colors.mainColor
        }}>
        <Left
          style={{
            flexGrow: 1
          }}>
          <Button transparent onPress={this.props.onPressBack ? this.props.onPressBack : this.props.goBack}>
            <Icon name='arrow-back'
              style={{
                color: 'white'
              }} />
          </Button>
        </Left>
        <Body
          style={{
            flexGrow: 6
          }}>
          <Title
            style={{
              color: 'white'
            }}
          >{this.props.title}</Title>
        </Body>
        <Right
          style={{
            flexGrow: 1
          }}
        />
      </Header>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: () => dispatch(
      NavigationActions.back({
      })
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation)
