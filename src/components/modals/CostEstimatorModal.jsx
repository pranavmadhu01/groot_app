import {Modal, Portal, Provider, Text} from 'react-native-paper';
import {ScrollView, View} from 'react-native';
const CostEstimatorModal = ({showModal, setShowModal, plant, fertilizers}) => {
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
        <ScrollView>
          <View></View>
          <View></View>
        </ScrollView>
      </Modal>
    </Portal>
  );
};
export default CostEstimatorModal;
