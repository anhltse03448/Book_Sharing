import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Image } from 'react-native'
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base'
import Navigation from '../Components/Navigation'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/UserProfileScreenStyle'

class UserProfileScreen extends Component {
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Thông tin cá nhân' />
        <Content style={styles.container}>
          <Form>
            <Image
              style={styles.imageContainer}
              source={require('../Images/LoginBg.png')}
            />
            <Item fixedLabel>
              <Label>Họ tên</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Email</Label>
              <Input />
            </Item>
            <Item fixedLabel>
              <Label>Điện thoại</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Địa chỉ</Label>
              <Input />
            </Item>
          </Form>
          <Button style={{margin: 8}} block>
            <Text>Cập nhật</Text>
          </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen)
