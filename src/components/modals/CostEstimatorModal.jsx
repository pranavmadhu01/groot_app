import {Modal, Portal, Text} from 'react-native-paper';
import {Image, ScrollView, View} from 'react-native';
import {useState} from 'react';
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
          backgroundColor: '#E2EFD2',
          padding: 20,
          margin: 20,
          flex: 1,
          marginBottom: 150,
        }}>
        <View>
          <Image
            source={{uri: plant.image}}
            style={{width: 50, height: 50}}
            resizeMode="cover"
          />
          <View>
            <Text>Name: {plant.name}</Text>
            <Text>DefaultPh: {plant.defaultph}</Text>
            <Text>cost: Rs {plant.seedcost}/g</Text>
            <Text>Per cent : {plant.seedpercentingram} g/cent</Text>
          </View>
        </View>
        <ScrollView>
          <View>
            <Text>Total seeds required : {seedquanity} g</Text>
            <Text>Total cost of seeds : Rs{seedcost}</Text>
          </View>
          <Text>Fertilizer per event</Text>
          <View>
            {fertilizerData.map(({fertilizerRequired, title}, index) => (
              <View key={index}>
                <Text>Title : {title}</Text>
                {fertilizerRequired.map(({name, cost, quantity}, index) => (
                  <View key={index}>
                    <Text>Name : {name}</Text>
                    <Text>Cost : Rs{cost}</Text>
                    <Text>Quantity : {quantity}Kg</Text>
                  </View>
                ))}
              </View>
            ))}
          </View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};
export default CostEstimatorModal;
