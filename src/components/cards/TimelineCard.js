import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavbarLogo} from '../logos';
import {TimeCheckIcon} from '../icons';

const TimelineCard = ({
  startDate,
  endDate,
  year,
  title,
  description,
  logoSize,
}) => {
  return (
    <View style={styles.timelineCardContainer}>
      <View style={styles.timelineCardAbsoluteWrapper}>
        <View style={styles.cardLogoWrapper}>
          <NavbarLogo width={logoSize || 32} height={logoSize || 32} />
        </View>
        <TimeCheckIcon width={16} height={16} />
      </View>

      <View style={styles.timelineCardBg} />
      <View style={styles.timelineCardWrapper}>
        <Text style={styles.date}>
          {startDate} - {endDate}, {year}
        </Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export default TimelineCard;

const styles = StyleSheet.create({
  timelineCardContainer: {
    width: '85%',
  },
  timelineCardWrapper: {
    backgroundColor: 'transparent',
    borderRadius: 25,
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: 24,
    paddingLeft: 24,
    paddingRight: 45,
    gap: 12,
  },
  timelineCardAbsoluteWrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 22,
    borderRadius: 12,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingTop: 18,
    paddingBottom: 20,
  },
  cardLogoWrapper: {
    position: 'relative',
    left: 7,
  },
  timelineCardBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    right: 0,
    backgroundColor: '#6EAF1F',
    opacity: 0.2,
    borderRadius: 12,
  },

  date: {fontFamily: 'Gilroy-SemiBold', fontSize: 12, color: '#375C0A'},
  title: {fontFamily: 'Gilroy-Bold', fontSize: 20, color: '#151810'},
  description: {
    fontFamily: 'Gilroy-Medium',
    fontSize: 14,
    color: '#151810',
    lineHeight: 16,
  },
});
