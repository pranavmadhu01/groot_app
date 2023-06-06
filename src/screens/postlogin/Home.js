import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text, Divider} from 'react-native-paper';
import Leaves from '../../components/logos/Leaves';
import {
  NotificationIcon,
  SettingsIcon,
  SunWindIcon,
} from '../../components/icons';
import {NotificationModal} from '../../components/modals';
import Farmcomponent from '../../components/Home/Farmcomponent/Farmcomponent';
import {getFarmDataByUserId} from '../../api';
import {LoginContext} from '../../../App';
import Loadingcomponent from '../../components/Loadingcomponent/Loadingcomponent';
import Weathercomponent from '../../components/Home/Weathercomponent/Weathercomponent';
import SettingsModal from '../../components/modals/SettingsModal';

const Home = () => {
  const data = useContext(LoginContext);
  const [isVisible, setisVisible] = useState(false);
  const [isSettingsVisible, setIsSettingsVisible] = useState(false);

  const [farms, setFarms] = useState([]);
  const showNotificationModal = () => setisVisible(true);
  const hideNotificationModal = () => setisVisible(false);
  const showSettingsModal = () => setIsSettingsVisible(true);
  const hideSettingsModal = () => setIsSettingsVisible(false);

  useEffect(() => {
    data.setLoading(true);
    getFarmDataByUserId(data.token).then(response => {
      setFarms(response.data.data.farm);
      data.setFarmId(response.data.data.farm[0]._id);
      data.setfarmlatlng(response.data.data.farm[0].locationvauge);
      data.setLoading(false);
    });
  }, [data.homereload]);
  if (data.loading) {
    <Loadingcomponent />;
  } else {
    return (
      <View style={styles.homeWrapper}>
        <NotificationModal
          hideModal={hideNotificationModal}
          isVisible={isVisible}
        />
        <SettingsModal
          hideModal={hideSettingsModal}
          isVisible={isSettingsVisible}
        />
        <View style={styles.topBar}>
          <Leaves width={61} height={60} />
          <View style={styles.topBarIconWrapper}>
            <NotificationIcon
              width={26}
              height={26}
              onPress={showNotificationModal}
            />
            <TouchableOpacity onPress={showSettingsModal}>
              <SettingsIcon width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.welcomeTextWrapper}>
          <Text style={styles.heyText}>Hey</Text>
          <Text style={styles.nameText}>Groot</Text>
        </View>
        <Text style={styles.farmsReadyMessage}>Your farms are all set!</Text>
        {farms.length > 0 && <Farmcomponent farms={farms} />}
        <Weathercomponent />
      </View>
    );
  }
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
});
