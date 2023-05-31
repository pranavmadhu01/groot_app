import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavbarLogo} from '../logos';
import {TimeCheckIcon, TimelineIndicatorDotIcon} from '../icons';
import {Dimensions} from 'react-native';

const vw = Dimensions.get('window').width;

const TimelineCard = ({
  startDate,
  endDate,
  year,
  title,
  description,
  logoSize,
  inTimeline,
  isHighlighted,
  isLast,
}) => {
  return (
    <View style={inTimeline && styles.timelineContainer}>
      {inTimeline && (
        <View style={styles.timelineIndicatorWrapper}>
          <NavbarLogo width={36} height={36} />
          <View style={styles.timelineIndicatorDotWrapper}>
            <TimelineIndicatorDotIcon
              width={36}
              height={36}
              isHighlighted={isHighlighted || false}
              style={styles.timelineIndicatorDot}
            />
            {isLast && (
              <TimelineIndicatorDotIcon
                width={36}
                height={36}
                isHighlighted={isHighlighted || false}
                style={styles.timelineIndicatorDot}
              />
            )}
          </View>
        </View>
      )}
      <View
        style={
          inTimeline
            ? styles.timelineCardContainer
            : styles.timelineStackCardContainer
        }>
        <View style={styles.timelineCardAbsoluteWrapper}>
          <View style={styles.cardLogoWrapper}>
            {!inTimeline && (
              <NavbarLogo width={logoSize || 32} height={logoSize || 32} />
            )}
          </View>
          {!inTimeline && <TimeCheckIcon width={16} height={16} />}
        </View>
        <View style={styles.timelineCardBg} />
        <View
          style={
            inTimeline
              ? styles.timelineCardWrapper
              : styles.timelineStackCardWrapper
          }>
          <Text style={styles.date}>
            {startDate} - {endDate}, {year}
          </Text>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </View>
  );
};

export default TimelineCard;

const styles = StyleSheet.create({
  timelineContainer: {
    width: vw,
    // backgroundColor: 'red',
    marginLeft: 16,
    marginTop: 16,
    paddingLeft: 24,
    borderLeftWidth: 1,
    borderLeftColor: 'green',
  },
  timelineIndicatorWrapper: {
    position: 'absolute',
    left: -20,
    top: -38,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: -3,
    height: '135%',
  },
  timelineIndicatorDotWrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  timelineIndicatorDot: {
    left: 11,
  },
  timelineStackCardContainer: {
    width: '85%',
  },
  timelineCardContainer: {
    width: '80%',
  },
  timelineCardWrapper: {
    backgroundColor: 'transparent',
    borderColor: 'green',
    borderWidth: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderRadius: 12,
    padding: 24,
    gap: 6,
  },
  timelineStackCardWrapper: {
    backgroundColor: 'transparent',
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
