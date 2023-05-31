import React from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {Text, ProgressBar} from 'react-native-paper';
import {CustomButton} from '../../components/buttons';

import {NotificationIcon, SettingsIcon} from '../../components/icons';
import {Leaves} from '../../components/logos';
import {mainStyles} from '.';
import {TimelineCard} from '../../components/cards';
import {TimelineCardStack} from '../../components/elements';

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
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
              margin={(0, 6, 0, 0)}
            />
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <CustomButton
              buttonColor={'#fff'}
              textColor={'#000'}
              title={'Grape Farm'}
              padding={6}
              mode={'outlined'}
              borderRadius={50}
              alignSelf={'center'}
            />
            <CustomButton
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.timelineContentWrapper}
          stickyHeaderIndices={[0]}>
          <View style={mainStyles.stickyHeader}>
            <Text style={mainStyles.titleText}>Timeline</Text>
          </View>
          <View>
            <View style={styles.progressTextWrapper}>
              <Text style={styles.farmingProgressText}>Farming Progress</Text>
              <View style={styles.progressDetailsWrapper}>
                <Text style={styles.progressPercentText}>75% Completed</Text>
                <View style={styles.daysTextWrapper}>
                  <Text style={styles.completedDaysText}>Day 219/</Text>
                  <Text style={styles.totalDaysText}>365</Text>
                </View>
              </View>
            </View>
            <View style={styles.progressBarWrapper}>
              <ProgressBar
                progress={0.6}
                color="#6EAF1F"
                style={styles.progressBar}
              />
            </View>
          </View>
          <View style={styles.statsCardContainer}>
            <View style={styles.statsCardBg} />
            <View style={styles.statsCardWrapper}>
              <View style={styles.statsCardTextWrapper}>
                <Text style={styles.labelText}>Progress</Text>
                <Text style={styles.value}>75%</Text>
              </View>
              <View style={styles.statsCardTextWrapper}>
                <Text style={styles.labelText}>Days Left</Text>
                <Text style={styles.value}>146</Text>
              </View>
              <View style={styles.statsCardTextWrapper}>
                <Text style={styles.labelText}>Fertilizers Used</Text>
                <Text style={styles.value}>24 kg</Text>
              </View>
              <View style={styles.statsCardTextWrapper}>
                <Text style={styles.labelText}>Total Cost</Text>
                <Text style={styles.value}>25.6 K</Text>
              </View>
            </View>
          </View>
          <View style={styles.timelineStackWrapper}>
            <TimelineCardStack
              startDate={'23 JAN'}
              endDate={'23 MAY'}
              year={2023}
              title={'Title'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing. Consectetur adipiscing elit. Lorem ipsum dolor sit amet.'
              }
              stackLevel={2}
            />
          </View>
          <View style={styles.timelineWrapper}>
            <TimelineCard
              inTimeline={true}
              isHighlighted={true}
              startDate={'23 JAN'}
              endDate={'23 MAY'}
              year={2023}
              title={'Title'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing. Consectetur adipiscing elit. Lorem ipsum dolor sit amet.'
              }
            />
          </View>
          <View style={styles.timelineWrapper}>
            <TimelineCard
              inTimeline={true}
              startDate={'23 JAN'}
              endDate={'23 MAY'}
              year={2023}
              title={'Title'}
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing. Consectetur adipiscing elit. Lorem ipsum dolor sit amet.'
              }
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Timeline;

const styles = StyleSheet.create({
  timelineCardContainer: {
    height: 312,
    padding: '5%',
  },
  timelineCardWrapperCard: {
    height: 96,
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: (28, 32),
    gap: 12,
  },
  timelineContainer: {
    flex: 1,
    paddingTop: 30,
    paddingBottom: 108,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    color: '#151810',
  },
  timelineWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    gap: 30,
  },
  timelineContentWrapper: {
    paddingTop: 45,
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

  farmBar: {marginBottom: 16, width: vw, alignSelf: 'center'},
  farms: {paddingLeft: 24, flexDirection: 'row', gap: 6},

  progressTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'flex-end',
    paddingHorizontal: 15,
  },

  farmingProgressText: {fontFamily: 'Gilroy-Bold', fontSize: 20},
  progressDetailsWrapper: {gap: 3},
  progressPercentText: {fontFamily: 'Gilroy-Bold', fontSize: 14},
  daysTextWrapper: {flexDirection: 'row'},
  completedDaysText: {fontFamily: 'Gilroy-SemiBold', fontSize: 14},
  totalDaysText: {color: '#808A75'},

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

  labelText: {
    fontSize: 12,
    fontFamily: 'Gilroy-Medium',
  },
  value: {
    fontSize: 18,
    fontFamily: 'Gilroy-SemiBold',
  },

  statsCardContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statsCardBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: '#6EAF1F',
    opacity: 0.1,
    borderRadius: 12,
  },
  statsCardWrapper: {
    position: 'relative',
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 20,
  },
  statsCardTextWrapper: {
    gap: 5,
  },

  timelineStackWrapper: {
    marginTop: 24,
    marginBottom: 32,
  },
  timelineFlowWrapper: {
    alignItems: 'flex-end',
  },
});
