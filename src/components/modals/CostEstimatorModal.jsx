import {Modal, Portal, Text} from 'react-native-paper';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {useState} from 'react';
import {CustomButton} from '../buttons';
const CostEstimatorModal = ({
  showModal,
  setShowModal,
  plant,
  fertilizers,
  estimatordata,
}) => {
  const [fertilizerData, setFertilizerData] = useState(
    estimatordata.fertilizerdata,
  );
  const [seedcost, setSeedcost] = useState(estimatordata.totalseedcost);
  const [seedquanity, setSeedQuantity] = useState(estimatordata.totalseeds);
  console.log(fertilizerData);
  console.log(seedcost);
  console.log(seedquanity);
  console.log(plant);
  return (
    <Portal>
      <Modal
        dismissable
        visible={showModal}
        onDismiss={() => setShowModal(false)}
        contentContainerStyle={{
          backgroundColor: '#fff',
          borderRadius: 25,
          padding: 24,
          margin: 24,
          flex: 1,
          gap: 16,
          marginBottom: 150,
        }}>
        <View style={styles.plantDetailsWrapper}>
          <Image
            source={{uri: plant.image}}
            style={{width: 90, height: 90, borderRadius: 12}}
            resizeMode="cover"
          />
          <View style={styles.plantDetails}>
            <Text>Name: {plant.name}</Text>
            <Text>DefaultPh: {plant.defaultph}</Text>
            <Text>cost: Rs {plant.seedcost}/g</Text>
            <Text>Per cent : {plant.seedpercentingram} g/cent</Text>
          </View>
        </View>
        <View style={styles.textBox}>
          <Text style={styles.totalCost}>Total Cost: Rs.1000</Text>
        </View>
        <Text style={styles.costBreakdown}>Cost Breakdown:</Text>
        <ScrollView
          contentContainerStyle={{paddingVertical: 16}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.textBox}>
            <Text style={styles.totalSeeds}>
              Total seeds required : {seedquanity}g
            </Text>
            <Text style={styles.totalSeeds}>
              Total cost of seeds : Rs.{seedcost}
            </Text>
          </View>
          <Text style={styles.fertilizerBreakdown}>Fertilizer per event</Text>
          <View style={styles.eventsWrapper}>
            {fertilizerData.map(({fertilizerRequired, title}, index) => (
              <View key={index} style={styles.eventDetailsWrapper}>
                <Text style={styles.eventTitle}>{title}</Text>
                {fertilizerRequired.map(({name, cost, quantity}, index) => (
                  <View key={index} style={styles.fertilizerDetailsWrapper}>
                    <Text>Name : {name}</Text>
                    <Text>Quantity : {quantity}Kg</Text>
                    <Text>Cost : Rs{cost}</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
        <CustomButton
          title="Generate Timeline"
          borderRadius={30}
          mode="contained"
          buttonColor="#6EAF1F"
          textColor="#fff"
          height={60}
          marginTop={32}
          // onPress={() => generateTimeline()}
          // disabled={Object.keys(formdata).length === 0}
        />
      </Modal>
    </Portal>
  );
};
export default CostEstimatorModal;

styles = StyleSheet.create({
  plantDetails: {gap: 3, alignItems: 'flex-start'},
  plantDetailsWrapper: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#9ECC66',
    borderRadius: 15,
    padding: 16,
    alignItems: 'flex-start',
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
    gap: 8,
    alignItems: 'center',
  },

  totalSeeds: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 16,
    alignSelf: 'flex-start',
    paddingLeft: 24,
  },

  eventsWrapper: {gap: 16},

  fertilizerBreakdown: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    paddingTop: 24,
    marginBottom: 8,
  },

  eventDetailsWrapper: {
    gap: 8,
    justifyContent: 'flex-start',
    backgroundColor: '#9ECC66',
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
    paddingHorizontal: 24,
    paddingVertical: 16,
    alignItems: 'flex-start',
  },

  eventTitle: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    paddingLeft: 16,
  },
});
