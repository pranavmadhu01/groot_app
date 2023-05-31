import React from 'react';
import {View, StyleSheet} from 'react-native';
import {TimelineCard} from '../cards';

const TimelineCardStack = ({
  startDate,
  endDate,
  year,
  title,
  description,
  logoSize,
  stackLevel,
}) => {
  return (
    <View style={styles.timelineStackContainer}>
      <View style={styles.timelineStackWrapper}>
        <TimelineCard
          startDate={startDate}
          endDate={endDate}
          year={year}
          title={title}
          description={description}
          logoSize={logoSize}
          color={'#C5DFA5'}
          inTimeline={false}
        />
        <View style={styles.timelineFirstBgCard} />
      </View>
      {stackLevel > 1 && <View style={styles.timelineSecondBgCard} />}
      <View style={styles.timelineThirdBgCard} />
    </View>
  );
};

export default TimelineCardStack;

const styles = StyleSheet.create({
  timelineStackContainer: {
    width: '100%',
    paddingRight: 20,
  },
  timelineStackWrapper: {
    width: '117%',
    zIndex: 4,
  },
  timelineFirstBgCard: {
    position: 'absolute',
    width: '85%',
    height: '100%',
    bottom: 0,
    left: 0,
    backgroundColor: 'white',
    borderRadius: 12,
    zIndex: -1,
    elevation: 3,
  },
  timelineSecondBgCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 10,
    left: 10,
    backgroundColor: '#C5DFA5',
    borderRadius: 12,
    opacity: 1,
    zIndex: 2,
    elevation: 2,
  },
  timelineThirdBgCard: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    bottom: 20,
    left: 20,
    elevation: 1,
    backgroundColor: '#E2EFD2',
    borderRadius: 12,
    zIndex: 1,
  },
});
