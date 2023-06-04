import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import {Text, ProgressBar} from 'react-native-paper';
import {CustomButton} from '../../components/buttons';

import {NotificationIcon, SettingsIcon} from '../../components/icons';
import {Leaves} from '../../components/logos';
import {mainStyles} from '.';
import {TimelineCard} from '../../components/cards';
import {TimelineCardStack} from '../../components/elements';
import {Dropdown} from 'react-native-element-dropdown';
import {getTimelineByUser, getTimelineEventsByTimeline} from '../../api';
import {LoginContext} from '../../../App';
import {Toast} from '../../utils/Toast.util';
import Loadingcomponent from '../../components/Loadingcomponent/Loadingcomponent';
import {date_diff_indays} from '../../helpers/date.helper';

const vw = Dimensions.get('window').width;

const Timeline = ({navigation}) => {
  const [alltimelines, setAllTimelines] = useState([]);
  const [selectedtimelineId, setSelectedTimelineId] = useState('');
  const [loading, setLoading] = useState(true);
  const [selectedTimeline, setSelectedTimeline] = useState([]);
  const data = useContext(LoginContext);
  useEffect(() => {
    data.setLoading(true);
    getTimelineByUser(data.token)
      .then(response => {
        setAllTimelines(response.data.data.timelines);
        data.setLoading(false);
      })
      .catch(error => {
        Toast(error.response.data.message);
        data.setLoading(false);
      });
  }, [data.reload]);
  const handleSelectTimeline = async timeline_id => {
    setLoading(true);
    await getTimelineEventsByTimeline(data.token, {timeline_id: timeline_id})
      .then(response => {
        setSelectedTimeline(response.data.data.timelines);
        setLoading(false);
      })
      .catch(error => {
        Toast(error.response.data.message);
        setLoading(false);
      });
  };
  if (data.loading) {
    return <Loadingcomponent />;
  } else {
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
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={alltimelines
            .filter(aT => aT.farm_id === data.farmId)
            .map(({_id}, index) => ({
              value: _id,
              label: `Timeline${index + 1}`,
            }))}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select Timeline"
          searchPlaceholder="Search Timeline"
          value={selectedtimelineId}
          onChange={item => {
            setSelectedTimelineId(item.value);
            handleSelectTimeline(item.value);
          }}
        />
        {selectedTimeline.length <= 0 ? (
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>Please select a timeline to view the stats and events</Text>
          </View>
        ) : (
          <View style={styles.timelineWrapper}>
            {loading ? (
              <Loadingcomponent />
            ) : (
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.timelineContentWrapper}
                stickyHeaderIndices={[0]}>
                <View style={mainStyles.stickyHeader}>
                  <Text style={mainStyles.titleText}>Timeline</Text>
                </View>
                <View>
                  <View style={styles.progressTextWrapper}>
                    <Text style={styles.farmingProgressText}>
                      Farming Progress
                    </Text>
                    <View style={styles.progressDetailsWrapper}>
                      <Text style={styles.progressPercentText}>
                        {(date_diff_indays(
                          selectedTimeline[0].start_date,
                          new Date(),
                        ) /
                          date_diff_indays(
                            selectedTimeline[0].start_date,
                            selectedTimeline[selectedTimeline.length - 1]
                              .end_date,
                          )) *
                          100}
                        % Completed
                      </Text>
                      <View style={styles.daysTextWrapper}>
                        <Text style={styles.completedDaysText}>
                          Day{' '}
                          {date_diff_indays(
                            selectedTimeline[0].start_date,
                            new Date(),
                          )}
                          /
                        </Text>
                        <Text style={styles.totalDaysText}>
                          {date_diff_indays(
                            selectedTimeline[0].start_date,
                            selectedTimeline[selectedTimeline.length - 1]
                              .end_date,
                          )}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View style={styles.progressBarWrapper}>
                    <ProgressBar
                      progress={
                        date_diff_indays(
                          selectedTimeline[0].start_date,
                          new Date(),
                        ) /
                        date_diff_indays(
                          selectedTimeline[0].start_date,
                          selectedTimeline[selectedTimeline.length - 1]
                            .end_date,
                        )
                      }
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
                      <Text style={styles.value}>
                        {(date_diff_indays(
                          selectedTimeline[0].start_date,
                          new Date(),
                        ) /
                          date_diff_indays(
                            selectedTimeline[0].start_date,
                            selectedTimeline[selectedTimeline.length - 1]
                              .end_date,
                          )) *
                          100}
                        %
                      </Text>
                    </View>
                    <View style={styles.statsCardTextWrapper}>
                      <Text style={styles.labelText}>Days Left</Text>
                      <Text style={styles.value}>
                        {date_diff_indays(
                          new Date(),
                          selectedTimeline[selectedTimeline.length - 1]
                            .end_date,
                        )}
                      </Text>
                    </View>
                    {/* <View style={styles.statsCardTextWrapper}>
                      <Text style={styles.labelText}>Fertilizers Used</Text>
                      <Text style={styles.value}>24 kg</Text>
                    </View>
                    <View style={styles.statsCardTextWrapper}>
                      <Text style={styles.labelText}>Total Cost</Text>
                      <Text style={styles.value}>25.6 K</Text>
                    </View> */}
                  </View>
                </View>
                {/* <View style={styles.timelineStackWrapper}>
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
                </View> */}
                {selectedTimeline.map(
                  ({name, start_date, end_date, description}, index) => (
                    <View style={styles.timelineWrapper} key={index}>
                      <TimelineCard
                        inTimeline={true}
                        isHighlighted={false}
                        startDate={new Date(start_date).toDateString()}
                        endDate={new Date(end_date).toDateString()}
                        // year={2023}
                        title={name}
                        description={description}
                      />
                    </View>
                  ),
                )}
              </ScrollView>
            )}
          </View>
        )}
      </View>
    );
  }
};

export default Timeline;

const styles = StyleSheet.create({
  dropdown: {
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    height: 64,
    backgroundColor: '#E2EFD2',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
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
    paddingVertical: 45,
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
