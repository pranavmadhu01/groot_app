import {Modal, Portal, Text} from 'react-native-paper';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';
import {CustomButton} from '../buttons';
import {CloseIcon} from '../icons';
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

  const handleClose = () => {
    setShowModal(false);
  };

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
          <Text style={styles.totalCost}>Total Cost: Rs. 1000</Text>
        </View>

        <Text style={styles.costBreakdown}>Cost Breakdown :</Text>

        <ScrollView
          contentContainerStyle={{paddingVertical: 5}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.textBox}>
            <Text style={styles.totalSeeds}>
              Total Seeds Required : {seedquanity} g
            </Text>
            <Text style={styles.totalSeeds}>
              Total Seed Cost : Rs. {seedcost}
            </Text>
          </View>
          <Text style={styles.fertilizerBreakdown}>Fertilizer per event</Text>
          <View style={styles.eventsWrapper}>
            {fertilizerData.map(({fertilizerRequired, title}, index) => (
              <View key={index} style={styles.eventDetailsWrapper}>
                <Text style={styles.eventTitle}>{title}</Text>
                {fertilizerRequired.map(({name, cost, quantity}, index) => (
                  <View key={index} style={styles.fertilizerDetailsWrapper}>
                    <Text style={styles.eventDetailsText}>Name: {name}</Text>
                    <Text style={styles.eventDetailsText}>
                      Quantity: {quantity} kg
                    </Text>
                    <Text style={styles.eventDetailsText}>
                      Cost: Rs. {cost}
                    </Text>
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

  fertilizerBreakdown: {
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
    paddingTop: 24,
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
    paddingHorizontal: 24,
    paddingVertical: 16,
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
});
