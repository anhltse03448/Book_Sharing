import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/ContentBookStyle'
import {
  Card,
  Button,
  Icon,
  CardItem,
  ListItem
} from 'native-base'
import colors from '../Themes/Colors'
import SeperatorItem from '../Components/SeperatorItem'
export default class ContentBook extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isShow: true,
      iconName: 'ios-arrow-down-outline'
    }
  }

  onPressMore () {

  }

  render () {
    const { content } = this.props
    let contentShow = content
    if (content.length >= 100 && this.state.isShow) {
      contentShow = content.substring(0, 100) + '...'
    }
    let button = <Button transparent
      onPress={() => {
        if (this.state.isShow) {
          this.setState({
            iconName: 'ios-arrow-up-outline'
          })
        } else {
          this.setState({
            iconName: 'ios-arrow-down-outline'
          })
        }
        this.setState({
          isShow: !this.state.isShow
        })
      }}
      style={styles.seeMore}>
      <Icon name={this.state.iconName} />
    </Button>
    return (
      <ListItem
        style={{
          flexDirection: 'column',
          borderTopWidth: 0.5,
          borderTopColor: colors.seperatorColor,
          borderBottomWidth: 0.5,
          borderBottomColor: colors.seperatorColor,
        }}
      >
        <Text style={styles.content}>
          {contentShow}
        </Text>
        {
          button
        }
      </ListItem>
    )
  }
}
