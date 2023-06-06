import {Modal, Portal, Switch, Text} from 'react-native-paper';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import {useContext, useState} from 'react';
import {CustomButton} from '../buttons';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {Table, Row, Rows} from 'react-native-table-component';
import {CloseIcon} from '../icons';
import {Toast} from '../../utils/Toast.util';
import {addUserTimeline} from '../../api';
import {LoginContext} from '../../../App';
import {useNavigation} from '@react-navigation/native';
import {LineChart} from 'react-native-chart-kit';
import {averageFunction} from '../../helpers/array.helper';
const CostEstimatorModal = ({
  showModal,
  setShowModal,
  plant,
  estimatordata,
  area,
  chartEssentials,
}) => {
  const navigation = useNavigation();
  const data = useContext(LoginContext);
  const [fertilizerData, setFertilizerData] = useState(
    estimatordata.fertilizerdata,
  );
  const [seedcost, setSeedcost] = useState(estimatordata.totalseedcost);
  const [seedquanity, setSeedQuantity] = useState(estimatordata.totalseeds);
  const [toggleChart, setToggleChart] = useState(false);
  const handleGenerateTimeline = (event, selecteddate) => {
    if (event === 'set') {
      const selectedDate = selecteddate.setDate(selecteddate.getDate());
      addUserTimeline(data.token, {
        area: area,
        start_date: selectedDate,
        farm_id: data.farmId,
        plant_id: plant._id,
      })
        .then(response => {
          data.setReload(!data.reload);
          navigation.navigate('timelinescreen');
          Toast(response.data.data.message);
        })
        .catch(error => Toast(error.response.data.message));
    }
  };
  const openDatePicker = () => {
    DateTimePickerAndroid.open({
      value: new Date(),
      mode: 'date',
      onChange: (event, selectedDate) => {
        event.type !== 'dismissed'
          ? handleGenerateTimeline(event.type, selectedDate)
          : Toast('You just didnt pick the date  :(');
      },
      minimumDate: new Date().setDate(new Date().getDate() + 1),
    });
  };

  const handleClose = () => {
    setShowModal(false);
  };
  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#fff',
    backgroundGradientToOpacity: 0.1,
    backgroundGradientToOffset: 1,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: true, // optional
  };
  const datass = {
    labels: chartEssentials.chartlabels,
    datasets: [
      {
        data: chartEssentials.chartdata,
        color: (opacity = 1) => `rgba(88, 140, 25,${opacity})`, // optional
        strokeWidth: 1, // optional
      },
      {
        data: Array(chartEssentials.chartdata.length).fill(
          averageFunction(chartEssentials.chartdata),
        ),
        color: (opacity = 1) => `rgba(255, 0, 0,${opacity})`,
        withDots: false,
        strokeWidth: 2, // optional
      },
    ],
    legend: [
      'Cost per Event',
      `Avg Rs${averageFunction(chartEssentials.chartdata).toFixed(1)}`,
    ], // optional
  };
  const screenWidth = Dimensions.get('screen').width;
  return (
    <Portal>
      <Modal
        dismissable={false}
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        contentContainerStyle={{
          backgroundColor: '#fff',
          display: 'flex',
          justifyContent: 'space-between',
          borderRadius: 25,
          padding: 24,
          margin: 16,
          flex: 1,
          gap: 16,
        }}>
        <TouchableOpacity style={styles.closeBtnWrapper} onPress={handleClose}>
          <CloseIcon width={32} height={32} />
        </TouchableOpacity>

        <View style={styles.plantDetailsWrapper}>
          <Image
            source={{uri: plant.image}}
            style={{width: 100, height: 100, borderRadius: 12}}
            resizeMode="cover"
          />
          <View style={styles.plantDetails}>
            <Text style={styles.plantDetailsText}>Name: {plant.name}</Text>
            <Text style={styles.plantDetailsText}>
              Default pH: {plant.defaultph}
            </Text>
            <Text style={styles.plantDetailsText}>
              Seed Cost: Rs. {plant.seedcost}/g
            </Text>
            <Text style={styles.plantDetailsText}>
              Seeds per cent: {plant.seedpercentingram} g/cent
            </Text>
          </View>
        </View>

        <View style={styles.textBox}>
          <Text style={styles.totalCost}>
            Total Cost: Rs. {estimatordata.totalcost}
          </Text>
        </View>

        <Text style={styles.costBreakdown}>Cost Breakdown :</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 20,
          }}>
          <Text style={{fontFamily: 'Gilroy-Bold'}}>
            {toggleChart ? 'Hide chart' : 'Show chart'}
          </Text>
          <Switch
            color="#6EAF1F"
            value={toggleChart}
            onValueChange={() => setToggleChart(!toggleChart)}
          />
        </View>

        {console.log(averageFunction(chartEssentials.chartdata))}
        <View style={{flex: 1}}>
          {toggleChart && (
            <LineChart
              data={datass}
              width={screenWidth - 80}
              height={220}
              chartConfig={chartConfig}
              style={{
                borderRadius: 10,
                borderWidth: 0.2,
                borderColor: '#6EAF1F',
                padding: 2,
                marginTop: 24,
              }}
              fromZero={true}
              formatXLabel={label => label.slice(0, 5) + '..'}
              verticalLabelRotation={-15}
              onDataPointClick={(value, dataset, getColor) => {
                console.log(value);
                console.log(dataset);
                console.log(getColor);
              }}
            />
          )}
        </View>
        {!toggleChart && (
          <ScrollView
            contentContainerStyle={{paddingVertical: 5}}
            showsVerticalScrollIndicator={false}
            stickyHeaderIndices={[1]}>
            <View style={{...styles.textBox, marginBottom: 24}}>
              <Text style={styles.totalSeeds}>
                Total Seeds Required : {seedquanity} g
              </Text>
              <Text style={styles.totalSeeds}>
                Total Seed Cost : Rs. {seedcost}
              </Text>
            </View>
            <View style={styles.stickyFertilizerPerEventText}>
              <Text style={styles.fertilizerBreakdown}>
                Fertilizer per event
              </Text>
            </View>
            <View style={styles.eventsWrapper}>
              {fertilizerData.map(({fertilizerRequired, title}, index) => (
                <View key={index} style={styles.eventDetailsWrapper}>
                  <Text style={styles.eventTitle}>{title}</Text>
                  <View key={index} style={styles.fertilizerDetailsWrapper}>
                    <View style={styles.container}>
                      <Table
                        borderStyle={{
                          borderWidth: 1,
                          borderColor: '#CFE4B4',
                        }}
                        style={{borderRadius: 12}}>
                        <Row
                          data={['Name', 'Quantity', 'Cost']}
                          style={styles.head}
                          textStyle={styles.title}
                        />
                        {fertilizerRequired.map(
                          ({name, cost, quantity}, index) => (
                            <Row
                              data={[name, quantity, cost]}
                              textStyle={styles.text}
                            />
                          ),
                        )}
                      </Table>
                    </View>
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        )}
        <CustomButton
          title="Generate Timeline"
          borderRadius={30}
          mode="contained"
          buttonColor="#6EAF1F"
          textColor="#fff"
          height={60}
          marginTop={32}
          isNavigator={false}
          onPress={() => openDatePicker()}
        />
      </Modal>
    </Portal>
  );
};
export default CostEstimatorModal;

styles = StyleSheet.create({
  closeBtnWrapper: {
    position: 'relative',
    alignSelf: 'flex-end',
  },

  plantDetails: {gap: 3},
  plantDetailsText: {
    fontSize: 14,
    fontFamily: 'Gilroy-SemiBold',
    maxWidth: '85%',
    color: '#FFF',
  },
  plantDetailsWrapper: {
    flexDirection: 'row',
    gap: 12,
    backgroundColor: '#588C19',
    borderRadius: 15,
    padding: 16,
    alignItems: 'center',
  },

  totalCost: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 18,
    color: '#375C0A',
  },

  costBreakdown: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 20,
    color: '#000',
    alignSelf: 'center',
  },

  textBox: {
    borderRadius: 12,
    borderColor: '#6EAF1F',
    borderWidth: 1,
    paddingVertical: 12,
    gap: 5,
    alignItems: 'center',
  },

  totalSeeds: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingHorizontal: 24,
  },

  eventsWrapper: {gap: 16},

  stickyFertilizerPerEventText: {
    position: 'sticky',
    top: 0,
    backgroundColor: '#fff',
    paddingTop: -10,
    paddingBottom: 3,
  },

  fertilizerBreakdown: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    paddingTop: 0,
    marginBottom: 12,
    alignSelf: 'center',
  },

  eventDetailsWrapper: {
    gap: 8,
    justifyContent: 'flex-start',
    backgroundColor: '#CFE4B4',
    borderRadius: 15,
    padding: 10,
    alignItems: 'center',
  },

  fertilizerDetailsWrapper: {
    width: '100%',
    gap: 3,
    justifyContent: 'flex-start',
    backgroundColor: '#FFF',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
    alignItems: 'flex-start',
  },

  eventTitle: {
    fontSize: 17,
    fontFamily: 'Gilroy-Bold',
    paddingLeft: 16,
  },
  eventDetailsText: {
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
  },

  container: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  head: {height: 40, backgroundColor: '#fff', borderRadius: 12},
  title: {margin: 6, color: '#000', fontSize: 16, fontFamily: 'Gilroy-Bold'},
  text: {margin: 6, color: '#000', fontSize: 14, fontFamily: 'Gilroy-Medium'},
});
