import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import styles from './Styles/ListItemStyle'
import {
  Icon,
  ListItem as NBListItem,
  Left,
  Right,
  Body,
  Text
} from 'native-base'

export default class ListItem extends Component {
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
      <NBListItem icon onPress={this.props.onPress}>
        <Left>
          <Icon
            style={this.props.textColor && {color: this.props.textColor}}
            ios={this.props.ios}
            android={this.props.android} />
        </Left>
        <Body>
          <Text style={this.props.textColor && {color: this.props.textColor}}>
            {this.props.text}
          </Text>
        </Body>
        <Right>
          {this.props.subText && <Text>{this.props.subText}</Text>}
          {this.props.hasSubPage &&
            <Icon ios='ios-arrow-forward-outline' android='md-arrow-forward' />}
        </Right>
      </NBListItem>
    )
  }
}
