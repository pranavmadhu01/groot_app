import {useContext, useEffect, useState} from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {ActivityIndicator, Divider, Text} from 'react-native-paper';
import {LoginContext} from '../../../../App';
import {getFarmWeather} from '../../../api';
import {Toast} from '../../../utils/Toast.util';
const Weathercomponent = () => {
  const data = useContext(LoginContext);
  const [weather, setWeather] = useState({});
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    getFarmWeather(data.token, data.farmlatlng)
      .then(response => {
        setWeather(response.data.data.weather);
        setIsLoading(false);
      })
      .catch(error => {
        Toast(error.response.data.message);
      });
  }, [data.reload]);
  return (
    <View style={styles.weatherCardContainer}>
      {loading ? (
        <ActivityIndicator color="#6EAF1F" />
      ) : (
        <>
          <View style={styles.weatherCardBg} />
          <View style={styles.weatherCardWrapper}>
            <View style={styles.topPart}>
              {weather.main && (
                <>
                  <Text style={styles.temperatureText}>
                    {weather.main.temp.toFixed(1)} °C
                  </Text>
                  <View>
                    <Text style={styles.labelText}>
                      H : {weather.main.temp_max.toFixed(1)} °C
                    </Text>
                    <Text style={{...styles.labelText, letterSpacing: 0.54}}>
                      L : {weather.main.temp_min.toFixed(1)} °C
                    </Text>
                  </View>
                </>
              )}

              <Image
                style={{width: 50, height: 50}}
                source={{
                  uri: `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`,
                }}
              />
            </View>
            <Text style={styles.locationText}>{weather.name}</Text>
            <Divider style={{backgroundColor: '#000'}} />
            <View style={styles.bottomPart}>
              <View style={styles.bottomPartTextWrapper}>
                <Text style={styles.labelText}>Humidity</Text>
                {weather.main && (
                  <Text style={styles.value}>
                    {weather.main.humidity && weather.main.humidity.toFixed(2)}{' '}
                    %
                  </Text>
                )}
              </View>
              {weather.precipitation && (
                <View style={styles.bottomPartTextWrapper}>
                  <Text style={styles.labelText}>Precipitation</Text>
                  <Text style={styles.value}>
                    {weather.precipitation.value} mm
                  </Text>
                </View>
              )}
              <View style={styles.bottomPartTextWrapper}>
                <Text style={styles.labelText}>Pressure</Text>
                <Text style={styles.value}>{weather.main.pressure} hPa</Text>
              </View>
              <View style={styles.bottomPartTextWrapper}>
                <Text style={styles.labelText}>Wind</Text>
                <Text style={styles.value}>{weather.wind.speed} m/s</Text>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default Weathercomponent;
const styles = StyleSheet.create({
  weatherCardContainer: {
    fontWeight: 100,
    fontSize: 18,
    borderColor: '#6EAF1F',
    borderWidth: 0.3,
    minHeight: 100,
    borderRadius: 10,
    justifyContent: 'center',
  },
  weatherCardWrapper: {
    position: 'relative',
    paddingHorizontal: 24,
    paddingVertical: 24,
    gap: 20,
  },
  temperatureText: {fontSize: 40, fontFamily: 'Gilroy-SemiBold'},
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
  locationText: {fontSize: 14, marginVertical: -10},
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
