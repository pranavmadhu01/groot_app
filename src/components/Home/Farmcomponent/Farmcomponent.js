import {useContext, useEffect} from 'react';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';
import {LoginContext} from '../../../../App';
import {CustomButton} from '../../buttons';

const vw = Dimensions.get('window').width;
const Farmcomponent = ({farms}) => {
  const data = useContext(LoginContext);
  // useEffect(() => {}, [data.reload]);
  return (
    <View style={styles.farmBar}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.farms}>
          {farms.map(({name, _id, locationvauge}, index) => (
            <CustomButton
              key={index}
              buttonColor={
                data.farmId === _id ? 'rgba(110, 175, 31, 0.3)' : '#fff'
              }
              textColor={'#000'}
              title={name}
              padding={6}
              mode={data.farmId === _id ? 'contained' : 'outlined'}
              borderRadius={50}
              alignSelf={'center'}
              margin={(0, 6, 0, 0)}
              isNavigator={false}
              onPress={() => {
                data.setFarmId(_id);
                data.setfarmlatlng(locationvauge);
              }}
            />
          ))}
          <CustomButton
            buttonColor={'#6EAF1F'}
            textColor={'#000'}
            height={55}
            title={'Add'}
            padding={0}
            mode={'contained'}
            borderRadius={200}
            alignSelf={'center'}
            isNavigator={true}
            screenName={'addfarmscreen'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Farmcomponent;
const styles = StyleSheet.create({
  farmBar: {
    marginVertical: 16,
    width: vw,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  farms: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    gap: 6,
  },
});
