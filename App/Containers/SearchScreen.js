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
import Trend from '../Components/Trend'

class SearchScreen extends Component {  
  render () {
    const { navigation } = this.props
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
        <Content style={{          
        }}>
          <List>
            <ListItem
              onPress={() => {
                navigation.navigate('AroundScreen')
              }}
            >
              <Icon
                style={styles.icon}
                name='ios-navigate-outline'
              />
              <Text
                style={styles.text}
              >Tìm kiếm quanh đây</Text>
            </ListItem>
            <ListItem
              style={styles.list}
              onPress={() => {
                
              }}>
              <Icon
                style={styles.icon}
                name='ios-trending-up' />
              <Text
                style={styles.text}
              >Xu hướng tìm kiếm</Text>
            </ListItem>
            <Trend />
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
