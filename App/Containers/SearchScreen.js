import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SearchScreenStyle'
import {
  Container,
  Content,
  Header,
  Item,
  Icon,
  Input,
  Button,
  ListItem,
  List
} from 'native-base'

class SearchScreen extends Component {
  render () {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name='ios-search' />
            <Input placeholder='Search' />
            <Icon name='ios-people' />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Icon />
              <Text>Bạn bè xung quanh</Text>
            </ListItem>
            <ListItem>
              <Text>Xu hướng tìm kiếm</Text>
            </ListItem>
          </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen)
