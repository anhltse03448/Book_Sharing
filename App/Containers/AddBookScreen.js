import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
// import ImagePicker from 'react-native-image-crop-picker'

// Styles
import {
  Container,
  Content,
  ListItem,
  Picker,
  Item,
  Input,
  Button,
  Icon,
} from 'native-base'
import styles from './Styles/AddBookScreenStyle'
import Navigation from '../Components/Navigation'
import BookInfoAdd from '../Components/BookInfoAdd'
import ImageCell from '../Components/ImageCell'

class AddBookScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected2: undefined,
      starCount: 0
    }
  }

  onValueChange2 (value) {
    this.setState({
      selected2: value
    })
  }

  pressStar (position) {
    this.setState({
      starCount: position
    })
  }

  renderItem (item) {
    return (
      <ListItem>
      </ListItem>
    )
  }

  handleImagePicker = () => {
    // ImagePicker.openPicker({
    //   multiple: true
    // }).then(images => {
    //   console.log(images)
    // })
  }

  render () {
    let arr = []
    for (i=0;i <= this.state.starCount;i++) {
      arr.push(true)
    }
    for(i=this.state.starCount+1;i < 5;i++) {
      arr.push(false)
    }

    let starView = arr.map((e, index) => {
      if (e === true) {
        return (
          <Icon name='ios-star'
            style={[styles.star, {color: '#FFD740'}]}
            onPress={() => this.pressStar(index)}
          />
        )
      } else {
        return (
          <Icon name='ios-star-outline'
            style={styles.star}
            onPress={() => this.pressStar(index)}
        />
        )
      }
    })
    const { navigation } = this.props
    const { item } = navigation.state.params
    return (
      <Container
        style={{
          backgroundColor: 'white'
        }}>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title={item.name} />
        <Content>
          <BookInfoAdd item={item} />
          <View>
            <ListItem
              style={[styles.listItem, {
                alignItems: 'center'
              }]}>
              <Text>Tình trạng</Text>
              <View
                style={{
                  marginLeft: 12,
                  flexDirection: 'row'
                }}
              >
                {starView}
              </View>
            </ListItem>
            <ListItem
              style={styles.listItem}
            >
              <Text>Giá bán</Text>
              <Input />
            </ListItem>
            <ListItem
              style={styles.listItem}
            >
              <Input
                style={{
                  height: 100
                }}
                placeholder='Ghi chú'
              />
            </ListItem>
            <View style={{padding: 16}}>
              <Button
                onPress={this.handleImagePicker}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 0
                }}
                bordered>
                <Icon name='ios-add-outline' />
              </Button>
            </View>
            
            {/* <FlatList horizontal
              data={[{key: 'a', section: 'Viễn tưởng'}, {key: 'b', section: 'Khoa học'}]}
              renderItem={({item}) => this.renderItem(item)} /> */}
            <Button transparent
              style={styles.doneButton}>
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
