import {StyleSheet, View} from 'react-native';
import {Divider, Text} from 'react-native-paper';
import {SunWindIcon} from '../../icons';
const Weathercomponent = ({weatherdata}) => {
  return (
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
        <Divider style={{backgroundColor: '#000'}} />
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
  );
};

export default Weathercomponent;
const styles = StyleSheet.create({
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
