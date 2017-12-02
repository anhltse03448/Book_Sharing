import React, { Component } from 'react'
import { View, Text, FlatList, Image, AsyncStorage } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import AddSellerActions from '../Redux/AddSellerRedux'
import ImagePicker from 'react-native-image-crop-picker'

// Styles
import {
  Container,
  Content,
  ListItem,
  Picker,
  Label,
  Item,
  Form,
  Input,
  Button,
  Icon,
  Text as NBText
} from 'native-base'
import styles from './Styles/AddBookScreenStyle'
import Navigation from '../Components/Navigation'
import BookInfoAdd from '../Components/BookInfoAdd'
import ImageCell from '../Components/ImageCell'
import Loading from '../Components/Loading'

class AddBookScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected2: undefined,
      starCount: 0,
      images: null,
      isChoosingImage: false,
      price: null,
      note: null,
      submitted: false
    }
  }

  handleOnSubmit = () => {
    AsyncStorage.getItem('@BookSharing:token')
    .then((res) => {
      this.props.addSeller({
        token: res,
        bookid: this.props.navigation.state.params.item.id,
        price: this.state.price,
        content: this.state.note,
        photos: []
      })
      this.setState({ submitted: true })
    })
    .catch((error) => console.log(error))
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
      <Image
        style={{
          flex: 1,
          width: 100,
          height: 150,
          marginRight: 4
        }}
        onError={() => console.log('error')}
        source={{uri: `data:image/png;base64,${item.data}`}} />
    )
  }

  handleImagePicker = () => {
    this.setState({
      images: null,
      isChoosingImage: true
    })
    ImagePicker.openPicker({
      multiple: true,
      includeBase64: true
    }).then(images => {
      this.setState({ images })
    }).catch(() => {
      this.setState({isChoosingImage: false})
    })
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
          <Icon key={index} name='ios-star'
            style={[styles.star, {color: '#FFD740'}]}
            onPress={() => this.pressStar(index)}
          />
        )
      } else {
        return (
          <Icon key={index} name='ios-star-outline'
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
        {(this.state.submitted &&
          this.props.addSellerState)
            ? <Loading style={{flex: 1, flexDirection: 'row'}} />
            : <Content>
              <BookInfoAdd item={item} />
              <Form>
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
                <Item inlineLabel>
                  <Label>Giá bán</Label>
                  <Input
                    onChangeText={(text) => this.setState({price: text})}
                    keyboardType='numeric' />
                </Item>
                <Item inlineLabel>
                  <Label>Ghi chú</Label>
                  <Input
                    onChangeText={(text) => this.setState({note: text})}
                    style={{
                      maxHeight: 100,
                      minHeight: 100
                    }} multiline numberOfLines={5} />
                </Item>
                <View style={{flex: 1, padding: 12}}>
                  <Button onPress={this.handleImagePicker}
                    iconLeft bordered transparent>
                    <Icon name='ios-camera-outline' />
                    <NBText>Lựa chọn ảnh</NBText>
                  </Button>
                </View>
                <View style={{
                  flex: 3,
                  flexDirection: 'row',
                  padding: 16
                }}>
                  {this.state.isChoosingImage && (
                    this.state.images ? <FlatList horizontal
                      showsHorizontalScrollIndicator={false}
                      data={this.state.images}
                      keyExtractor={(item) => item.filename}
                      renderItem={({item}) => this.renderItem(item)} />
                    : <Loading />)
                  }
                </View>
                <Button
                  onPress={this.handleOnSubmit}
                  disabled={
                    this.state.images === null ||
                      this.state.price === null ||
                        this.state.note === null
                  }
                  style={styles.doneButton}>
                  <Text
                    style={styles.done}
                  >Xong</Text>
                </Button>
              </Form>
            </Content>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  const addSellerState = state.addSeller.payload
  return {
    addSellerState
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addSeller: ({token, bookid, price, content, photos}) =>
      dispatch(AddSellerActions.addSellerRequest({token, bookid, price, content, photos}))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBookScreen)
