import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import DiseaseCard from './DiseaseCard';

const DetectedDiseaseCard = ({scanData}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.diseaseCardWrapper}>
      {scanData.predictions.map((disease, i) => (
        <View key={i} style={styles.detectedDiseaseWrapper}>
          <DiseaseCard
            isDetected={true}
            index={i}
            name={disease.class}
            score={(disease.score * 100).toFixed(2)}
            predictedDisease={
              scanData.predictedDiseases.filter(
                pd => pd.name === disease.class,
              )[0]
            }
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default DetectedDiseaseCard;

const styles = StyleSheet.create({
  diseaseCardWrapper: {
    // margin: 4,
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    // borderRadius: 25,
    // elevation: 3,
    gap: 24,
    justifyContent: 'center',
  },

  diseaseCard: {gap: 8},

  detectedDiseaseWrapper: {gap: 5},
  progressBar: {
    height: 4,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  progressBarWrapper: {
    height: 4,
    backgroundColor: '#CFE4B4',
    justifyContent: 'center',
    borderRadius: 30,
  },
  detectedDiseaseDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  diseaseScore: {
    color: 'gray',
    fontSize: 10,
    marginBottom: -8,
    fontWeight: 'medium',
  },
  diseaseNotDetected: {
    color: 'green',
    fontSize: 10,
    fontWeight: 'medium',
  },
  diseaseName: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    marginTop: 2,
  },
  diseaseTitle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Gilroy-SemiBold',
    marginTop: 2,
  },
  diseaseDescription: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Gilroy-Regular',
    lineHeight: 22,
    marginTop: 2,
  },

  dropdownIconWrapper: {width: '100%', alignItems: 'flex-end'},
});
