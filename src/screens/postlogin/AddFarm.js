import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {Leaves} from '../../components/logos';

const AddFarm = () => {
  return (
    <View style={styles.addfarmwrapper}>
      <Pressable style={styles.pressableStyle}>
        <Leaves width={36} height={36} />
        <Text variant="headlineSmall" style={styles.addFarmText}>
          Add Farm
        </Text>
      </Pressable>
      <Text variant="labelSmall" style={styles.description}>
        You have not added any farm yet.Add a farm to continue
      </Text>
    </View>
  );
};
export default AddFarm;
const styles = StyleSheet.create({
  addfarmwrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
    backgroundColor: '#F3FFF2',
  },
  addFarmText: {
    fontWeight: '700',
  },
  description: {
    color: '#626C56',
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
