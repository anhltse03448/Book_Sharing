import { StyleSheet, Dimensions } from 'react-native'
import colors from '../../Themes/Colors'

const window = Dimensions.get('window')

export default StyleSheet.create({
  container: {
  },
  headerContainer: {
    backgroundColor: '#fff',
    paddingBottom: 8,
    marginBottom: 16
  },
  bodyContainer: {
    backgroundColor: '#fff'
  },
  imageBackgroundContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    alignItems : 'center'
  },
  imageBackground: {
    height: 150,
    width: window.width,
    opacity: 0.8
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 150
  },
  imageProfile: {
    marginTop: -40,
    marginLeft: 8,
    width: 100,
    height: 100,
    borderRadius: 50
  },
  buttonInfoContainer: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  infoContainer: {
    flex: 1,
    marginTop: 16,
    marginLeft: 12
  },
  seeAll: {
    color: colors.mainColor
  },
  viewHeader: {
    alignItems: 'center',
    height: 40,
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 8,
    flexDirection: 'row'
  },
  btnSeeAll: {
    height: 40
  }
})
