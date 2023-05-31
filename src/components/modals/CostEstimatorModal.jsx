import {Modal, Portal, Provider, Text} from 'react-native-paper';

const CostEstimatorModal = ({showModal, setShowModal}) => {
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
        <Text>Example Modal. Click outside this area to dismiss.</Text>
      </Modal>
    </Portal>
  );
};
export default CostEstimatorModal;
