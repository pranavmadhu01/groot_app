import React from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';
import {Modal, Portal, Provider, Text} from 'react-native-paper';
import Leaves from '../../components/logos/Leaves';
import {NotificationIcon, SettingsIcon} from '../../components/icons/Icons';
import CustomButton from '../../components/CustomButton';
import {NotificationModal} from '../../components/modals/Modals';

const vw = Dimensions.get('window').width;

const Home = () => {
  const [isVisible, setisVisible] = React.useState(false);

  const showModal = () => setisVisible(true);
  const hideModal = () => setisVisible(false);

  return (
    <Provider>
      <Portal>
        <Modal visible={isVisible} onDismiss={hideModal}>
          <NotificationModal />
        </Modal>
      </Portal>
      <View style={styles.homeWrapper}>
        <View style={styles.topBar}>
          <Leaves width={61} height={60} />
          <View style={styles.topBarIconWrapper}>
            <NotificationIcon width={26} height={26} onPress={showModal} />
            <SettingsIcon width={20} height={20} />
          </View>
        </View>

        <View style={{flexDirection: 'row', gap: 5, marginVertical: 5}}>
          <Text style={{fontWeight: 100, fontSize: 28}}>Hey</Text>
          <Text style={{fontWeight: 900, fontSize: 28}}>Groot</Text>
        </View>
        <Text style={{fontWeight: 100, fontSize: 18}}>
          Your farms are all set!
        </Text>

        <View style={styles.farmBar}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.farms}>
              <CustomButton
                buttonColor={'#fff'}
                textColor={'#000'}
                title={'Grape Farm'}
                padding={6}
                mode={'outlined'}
                borderRadius={50}
                alignSelf={'center'}
                margin={(0, 6, 0, 0)}
              />
              <CustomButton
                buttonColor={'#fff'}
                textColor={'#000'}
                title={'Grape Farm'}
                padding={6}
                mode={'outlined'}
                borderRadius={50}
                alignSelf={'center'}
              />
              <CustomButton
                buttonColor={'#fff'}
                textColor={'#000'}
                title={'Grape Farm'}
                padding={6}
                mode={'outlined'}
                borderRadius={50}
                alignSelf={'center'}
              />
              <CustomButton
                buttonColor={'#fff'}
                textColor={'#000'}
                title={'Grape Farm'}
                padding={6}
                mode={'outlined'}
                borderRadius={50}
                alignSelf={'center'}
              />
              <CustomButton
                buttonColor={'#6EAF1F'}
                textColor={'#000'}
                title={'+'}
                padding={0}
                mode={'outlined'}
                borderRadius={200}
                alignSelf={'center'}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Provider>
  );
};

export default Home;

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
    color: '#151810',
  },

  topBar: {
    height: '10%',
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

  farmBar: {
    marginVertical: 16,
    width: vw,
    alignSelf: 'center',
  },
  farms: {
    paddingLeft: 24,
    flexDirection: 'row',
    gap: 6,
  },
});
