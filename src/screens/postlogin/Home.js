/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import {Logoborder} from '../../assets/images';
import Leaves from '../../components/logos/Leaves';
import {NotificationIcon, SettingsIcon} from '../../components/icons/icons';
import Custombutton from '../../components/Custombutton';
import {white} from 'react-native-paper/lib/typescript/src/styles/themes/v2/colors';

const vw = Dimensions.get('window').width;

const Home = () => {
  return (
    <View style={styles.homeWrapper}>
      <View style={styles.topBar}>
        <Leaves width={61} height={60} />
        <View style={styles.topBarIconWrapper}>
          <NotificationIcon width={26} height={26} />
          <SettingsIcon width={20} height={20} />
        </View>
      </View>

      <View style={{flexDirection: 'row', gap: 5, marginVertical: 5}}>
        <Text style={{fontWeight: 100, fontSize: 28}}>Hey</Text>
        <Text style={{fontWeight: 900, fontSize: 28}}>Groot</Text>
      </View>
      <Text style={{fontWeight: 100, fontSize: 18}}>
        Your farms are all set!
      </Text>

      <View style={styles.farmBar}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.farms}>
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={(3, 6, 3, 6)}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
              margin={(0, 6, 0, 0)}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={(3, 6, 3, 6)}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={(3, 6, 3, 6)}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={(3, 6, 3, 6)}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#6EAF1F'}
              textColor={'#000'}
              title={'+'}
              padding={(0, 3, 0, 3)}
              mode={'outlined'}
              borderRadius={200}
              alignSelf={'center'}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeWrapper: {
    backgroundColor: '#F3FFF2',
    flex: 1,
    padding: (0, 24, 0, 24),
  },

  topBar: {
    height: '10%',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  topBarIconWrapper: {
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 24,
    flex: 1,
  },

  farmBar: {
    marginVertical: 16,
    width: vw,
    alignSelf: 'center',
  },

  farms: {
    paddingLeft: 24,
    flexDirection: 'row',
    gap: 6,
  },
});
