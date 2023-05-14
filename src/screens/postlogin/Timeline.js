import {useState} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import Custombutton from '../../components/Custombutton';

import {NotificationIcon, SettingsIcon} from '../../components/icons/Icons';
import Leaves from '../../components/logos/Leaves';

const vw = Dimensions.get('window').width;

const Timeline = ({navigation}) => {
  return (
    <View style={styles.timelineContainer}>
      <View style={styles.topBar}>
        <View style={styles.logoWrapper}>
          <Leaves width={36} height={36} />
          <Text style={styles.logoText}>Groot</Text>
        </View>
        <View style={styles.topBarIconWrapper}>
          <NotificationIcon width={26} height={26} />
          <SettingsIcon width={20} height={20} />
        </View>
      </View>

      <View style={styles.farmBar}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.farms}>
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
              margin={(0, 6, 0, 0)}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <Custombutton
              buttonColor={'#6EAF1F'}
              textColor={'#000'}
              title={'+'}
              padding={0}
              mode={'outlined'}
              borderRadius={200}
              alignSelf={'center'}
            />
          </View>
        </ScrollView>
      </View>

      <View style={styles.timelineWrapper}>
        <View style={{alignItems: 'center', gap: 15}}>
          <Text variant="headlineMedium" style={{fontWeight: '800'}}>
            Timeline
          </Text>
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  timelineContainer: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    color: '#151810',
  },
  timelineWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    gap: 30,
  },

  topBar: {
    height: '10%',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  topBarIconWrapper: {
    height: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    gap: 24,
    flex: 1,
  },
  logoWrapper: {
    flexDirection: 'row',
    gap: 5,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '900',
    paddingTop: 5,
    color: '#375C0A',
  },

  farmBar: {
    marginBottom: 16,
    width: vw,
    alignSelf: 'center',
  },
  farms: {
    paddingLeft: 24,
    flexDirection: 'row',
    gap: 6,
  },
});
