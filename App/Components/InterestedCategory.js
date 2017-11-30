import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { Icon } from 'native-base'
import styles from './Styles/InterestedCategoryStyle'

export default class InterestedCategory extends Component {
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
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  handleOnPress = () => {
    this.setState({ checked: !this.state.checked })
  }

  render () {
    return (
      <TouchableHighlight
        activeOpacity={1}
        underlayColor='#fff'
        style={styles.wrapper}
        onPress={this.handleOnPress}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          <Image
            style={styles.imageContainer}
            source={require('../Images/LoginBg.png')}
          />
          <View style={styles.checkedContainer}>
            {this.state.checked
              ? <Icon name='md-heart' style={{fontSize: 18, color: '#cc0000'}} />
              : <Icon name='md-heart-outline' style={{fontSize: 18}} />}
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}
