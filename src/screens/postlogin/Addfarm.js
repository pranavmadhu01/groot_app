import {Image, Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Logonoborder} from '../../assets/images';
const Addfarm = () => {
  return (
    <View style={styles.addfarmwrapper}>
      <Pressable style={styles.pressableStyle}>
        <Image source={Logonoborder} />
        <Text variant="headlineSmall" style={{fontWeight: '700'}}>
          Add Farm
        </Text>
      </Pressable>
      <Text variant="labelSmall" style={{color: '#626C56'}}>
        You have not added any farm yet.Add a farm to continue
      </Text>
    </View>
  );
};
export default Addfarm;
const styles = StyleSheet.create({
  addfarmwrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    backgroundColor: '#F3FFF2',
  },
  pressableStyle: {
    width: 180,
    height: 180,
    borderRadius: 30,
    backgroundColor: '#CFE4B4',
    alignItems: 'center',
    gap: 30,
    justifyContent: 'center',
  },
});
