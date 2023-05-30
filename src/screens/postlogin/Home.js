import React from 'react';
import {Dimensions, StyleSheet, View, ScrollView} from 'react-native';
import {Modal, Portal, Provider, Text, Divider} from 'react-native-paper';
import Leaves from '../../components/logos/Leaves';
import {
  NotificationIcon,
  SettingsIcon,
  SunWindIcon,
} from '../../components/icons';
import {CustomButton} from '../../components/buttons';
import {NotificationModal} from '../../components/modals';

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

        <View style={styles.welcomeTextWrapper}>
          <Text style={styles.heyText}>Hey</Text>
          <Text style={styles.nameText}>Groot</Text>
        </View>
        <Text style={styles.farmsReadyMessage}>Your farms are all set!</Text>

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

        <View style={styles.weatherCardContainer}>
          <View style={styles.weatherCardBg} />

          <View style={styles.weatherCardWrapper}>
            <View style={styles.topPart}>
              <Text style={styles.temperatureText}>24°C</Text>
              <View>
                <Text style={styles.labelText}>H: 32°C</Text>
                <Text style={styles.labelText}>L: 21°C</Text>
              </View>
              <SunWindIcon width={75} height={75} color={'#151810'} />
            </View>

            <Divider />

            <View style={styles.bottomPart}>
              <View style={styles.bottomPartTextWrapper}>
                <Text style={styles.labelText}>Humidity</Text>
                <Text style={styles.value}>30%</Text>
              </View>
              <View style={styles.bottomPartTextWrapper}>
                <Text style={styles.labelText}>Precipitation</Text>
                <Text style={styles.value}>5.1ml</Text>
              </View>
              <View style={styles.bottomPartTextWrapper}>
                <Text style={styles.labelText}>Pressure</Text>
                <Text style={styles.value}>450hPa</Text>
              </View>
              <View style={styles.bottomPartTextWrapper}>
                <Text style={styles.labelText}>Wind</Text>
                <Text style={styles.value}>23m/s</Text>
              </View>
            </View>
          </View>
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

  welcomeTextWrapper: {flexDirection: 'row', gap: 5, marginVertical: 5},
  heyText: {fontWeight: 100, fontSize: 28},
  nameText: {fontWeight: 900, fontSize: 28},
  farmsReadyMessage: {fontWeight: 100, fontSize: 18},

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

  weatherCardContainer: {fontWeight: 100, fontSize: 18},
  weatherCardWrapper: {
    position: 'relative',
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 20,
  },
  temperatureText: {fontSize: 48, fontFamily: 'Gilroy-SemiBold'},
  weatherCardBg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: '#6EAF1F',
    opacity: 0.1,
    borderRadius: 12,
  },
  topPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 12,
    fontFamily: 'Gilroy-Medium',
  },
  value: {
    fontSize: 14,
    fontFamily: 'Gilroy-SemiBold',
  },
  bottomPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomPartTextWrapper: {
    gap: 5,
  },
});
