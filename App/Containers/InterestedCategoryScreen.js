import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import {
  Container,
  Content
} from 'native-base'
import Navigation from '../Components/Navigation'
import InterestedCategory from '../Components/InterestedCategory'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/InterestedCategoryScreenStyle'

class InterestedCategoryScreen extends Component {
  render () {
    return (
      <Container>
        <Navigation onPressBack={() => this.props.navigation.goBack()}
          title='Danh mục quan tâm' />
        <Content>
          <View style={styles.container}>
            <InterestedCategory
              title='Trinh thám'
              checked
            />
            <InterestedCategory
              title='Ngôn tình'
              checked
            />
            <InterestedCategory
              title='Viễn tưởng'
            />
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

export default connect(mapStateToProps, mapDispatchToProps)(InterestedCategoryScreen)
