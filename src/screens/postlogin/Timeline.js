import {useState} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {Text, ProgressBar} from 'react-native-paper';
import Geolocation from '@react-native-community/geolocation';
import Custombutton from '../../components/CustomButton';

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
          <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 40}}>
            Timeline
          </Text>
        </View>

        <View>
          <View style={styles.progressTextWrapper}>
            <Text style={{fontFamily: 'Gilroy-SemiBold', fontSize: 16}}>
              Farming Progress
            </Text>
            <View>
              <Text style={{fontFamily: 'Gilroy-Bold', fontSize: 14}}>
                50% Completed
              </Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontFamily: 'Gilroy-SemiBold', fontSize: 14}}>
                  Day 183/
                </Text>
                <Text style={{color: '#808A75'}}>365</Text>
              </View>
            </View>
          </View>

          <View style={styles.progressBarWrapper}>
            <ProgressBar
              progress={0.5}
              color="#6EAF1F"
              style={styles.progressBar}
            />
          </View>
        </View>
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

  progressTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },
  progressBarWrapper: {
    height: 32,
    borderColor: '#588C19',
    borderWidth: 2,
    justifyContent: 'center',
    paddingHorizontal: 2,
    borderRadius: 30,
  },
  progressBar: {
    height: 24,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
});
