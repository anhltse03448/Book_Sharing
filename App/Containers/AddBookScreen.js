import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  ListItem,
  Picker,
  Item,
  Input,
  Button,
  Label
} from 'native-base'
import styles from './Styles/AddBookScreenStyle'
import Navigation from '../Components/Navigation'
import BookInfoAdd from '../Components/BookInfoAdd'
class AddBookScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected2: undefined
    }
  }
  onValueChange2 (value) {
    this.setState({
      selected2: value
    })
  }
  render () {
    return (
      <Container
        style={{
          backgroundColor: 'white'
        }}>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Chắc ai đó sẽ về' />
        <Content>
          <BookInfoAdd />
          <View>
            <ListItem>
              <Text>Tình trạng</Text>
              <Picker
                mode='dropdown'
                placeholder='Select One'
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item label='Mới' value='key0' />
                <Item label='Trung Bình' value='key1' />
                <Item label='Cũ' value='key2' />
              </Picker>
            </ListItem>
            <ListItem>
              <Text>Giá bán</Text>
              <Input />
            </ListItem>
            <ListItem>
              <Input
                style={{
                  height: 100
                }}
                placeholder='Ghi chú'
              />
            </ListItem>
            <Button transparent
              style={styles.doneButton}
            >
              <Text
                style={styles.done}
              >Xong</Text>
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(AddBookScreen)
