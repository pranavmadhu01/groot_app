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
              borderWidth={5}
              borderColor={'#000'}
              fontFamily={
                data.farmId === _id ? 'Gilroy-SemiBold' : 'Gilroy-Regular'
              }
              alignSelf={'center'}
              margin={(0, 6, 0, 0)}
              isNavigator={false}
              onPress={() => {
                data.setFarmId(_id);
                data.setReload(!data.reload);
                data.setfarmlatlng(locationvauge);
              }}
            />
          ))}
          <CustomButton
            buttonColor={'#6EAF1F'}
            textColor={'#FFF'}
            height={55}
            title={'Add'}
            padding={0}
            mode={'contained'}
            borderRadius={200}
            alignSelf={'center'}
            isNavigator={true}
            screenName={'addfarmscreen'}
            fontFamily={'Gilroy-SemiBold'}
          />
        </View>
      </ScrollView>
    </View>
  );
};
export default Farmcomponent;
const styles = StyleSheet.create({
  farmBar: {
    marginTop: 32,
    marginBottom: 24,
    width: vw,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  farms: {
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'row',
    gap: 12,
  },
});
