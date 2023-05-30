import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {GreenRipples, RedRipples} from '../../assets/images/images';

const DiseaseCard = ({isDetected, name, score}) => {
  return (
    <View style={styles.diseaseCard}>
      <Image source={isDetected ? RedRipples : GreenRipples} />

      <View style={styles.diseaseResult}>
        {isDetected ? (
          <>
            <Text style={styles.diseaseDetected}>{score * 100}</Text>
            <Text style={styles.diseaseName}>{name}</Text>
          </>
        ) : (
          <>
            <Text style={styles.diseaseNotDetected}>No Disease Detected</Text>
            <Text style={styles.diseaseName}>Healthy</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default DiseaseCard;

const styles = StyleSheet.create({
  diseaseCardWrapper: {
    height: 312,
    padding: '5%',
  },
  diseaseCard: {
    height: 96,
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: (28, 32),
    gap: 12,
  },
  diseaseDetected: {
    color: 'red',
    fontSize: 10,
    fontWeight: 'medium',
  },
  diseaseNotDetected: {
    color: 'green',
    fontSize: 10,
    fontWeight: 'medium',
  },
  diseaseName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 2,
  },
});
