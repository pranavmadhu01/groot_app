import {Image, StyleSheet, View} from 'react-native';
import Leaves from '../../components/logos/Leaves';

const Opener = () => {
  return (
    <View style={styles.openerwrapper}>
      <Leaves width={36} height={36} />
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
