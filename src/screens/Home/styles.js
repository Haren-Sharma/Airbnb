import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    width: '50%',
    fontSize: 80,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 25,
    marginLeft: 25,
  },
  button_text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  search_button: {
    //we want this button always on the top
    zIndex: 100,
    //Z Index ( z-index ) is a CSS property that defines the order of overlapping HTML elements. Elements with a higher index will be placed on top of elements with a lower index. Note: Z index only works on positioned elements ( position:absolute , position:relative , or position:fixed )
    position: 'absolute',
    width: Dimensions.get('screen').width - 20, //20 is twice of marginHorizontal
    marginHorizontal: 10,
    flexDirection: 'row',
    top: 20,
    backgroundColor: '#fff',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30, //half of height to get rounded corners
  },
  search_button_text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});
export default styles;
