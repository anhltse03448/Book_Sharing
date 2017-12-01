import React, { Component } from 'react'
import { View, Image, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

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

// Styles
import styles from './Styles/UserSharedInfoScreenStyle'
import colors from '../Themes/Colors'

class UserSharedInfoScreen extends Component {
  onPressFull () {
    this.props.navigation.navigate('FullBookScreen', {
      book: {
        section: 'Sách chia sẻ bởi Huy Trần'
      }
    })
  }

  render () {
    return (
      <Container style={styles.container}>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Huy Trần' />
        <Content>
          <View style={styles.headerContainer}>
            <View style={styles.imageBackgroundContainer}>
              <Image
                style={styles.imageBackground}
                source={require('../Images/profile-bg.jpeg')}
              />
            </View>
            <View style={styles.imageContainer}>
              <Image
                style={styles.imageProfile}
                source={require('../Images/LoginBg.png')}
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
                Huy Trần&nbsp;&nbsp;
                <Icon name='ios-checkmark-circle' style={{fontSize: 15, color: colors.mainColor}} />
              </Text>
              <Text style={{marginBottom: 4, fontSize: 14, color: '#666'}}>
                <Icon name='ios-compass-outline' style={{fontSize: 14, color: '#666'}} />
                &nbsp;&nbsp;FPT University, Hanoi
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
                onPress={() => this.onPressFull()}
                style={styles.btnSeeAll}
              >
                <Text style={styles.seeAll}>
                  Xem tất cả
                </Text>
              </Button>
            </View>
            <ListMain onPressItem={this.onPressItem} />
          </View>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSharedInfoScreen)
