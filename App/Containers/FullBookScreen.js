import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  Header,
  Item,
  Button,
  Icon,
  Input
} from 'native-base'
import Navigation from '../Components/Navigation'
import styles from './Styles/FullBookScreenStyle'
import FullBookCell from '../Components/FullBookCell'
class FullBookScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: ''
    }
  }
  renderItem (item) {
    return <FullBookCell onPressItemSearch={this.props.navigation.state.params.onPressItemSearch} />
  }
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title={this.props.navigation.state.params.book.section} />
        <Content>
          <Header searchBar rounded>
            <Item>
              <Icon name='ios-search' />
              <Input placeholder='Search'
                onChangeText={(text) => {
                  this.setState({
                    inputValue: text
                  })
                }} />
              <Icon name='ios-people' />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
          <FlatList
            data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
            renderItem={({item}) => this.renderItem(item)}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(FullBookScreen)
