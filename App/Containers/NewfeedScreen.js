import React, { Component } from 'react'
import {
  SectionList, FlatList
} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import {
  Container,
  Content,
  Text,
  Button,
  View,
  Header
} from 'native-base'
import styles from './Styles/NewfeedScreenStyle'
import colors from '../Themes/Colors'
import ListMain from '../Components/ListMain'

class NewfeedScreen extends Component {
  renderItem (item) {
    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            height: 40,
            justifyContent: 'space-between',
            paddingLeft: 12,
            paddingRight: 12,
            flexDirection: 'row'
          }}>
          <Text>{item.section}</Text>
          <Button transparent
            style={{
              height: 40
            }}
          >
            <Text style={{
              color: colors.mainColor
            }}>
              Xem tất cả
            </Text>
          </Button>
        </View>
        <ListMain />
      </View>
    )
  }
  render () {
    return (
      <Container>
        <Header>
          <Text>Testing</Text>
        </Header>
        <Content contentContainerStyle={{
          flex: 1
        }}>
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

export default connect(mapStateToProps, mapDispatchToProps)(NewfeedScreen)
