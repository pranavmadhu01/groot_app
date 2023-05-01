import {Image, StyleSheet, View} from 'react-native';
import {Logo} from '../../asstes/images';
const Opener = () => {
  return (
    <View style={styles.openerwrapper}>
      <Image source={Logo} />
    </View>
  );
};
export default Opener;
const styles = StyleSheet.create({
  openerwrapper: {
    flex: 1,
    backgroundColor: '#F3FFF2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
