import React from 'react';
import {Text, StyleSheet} from 'react-native';

const DiseaseDetails = ({name, type, description}) => {
  return (
    <>
      <Text style={styles.diseaseTitle}>{name}</Text>
      <Text style={styles.diseaseType}>{type}</Text>
      <Text style={styles.diseaseDescription}>{description}</Text>
    </>
  );
};

export default DiseaseDetails;

const styles = StyleSheet.create({
  diseaseTitle: {
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 2,
    marginTop: 36,
  },
  diseaseType: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 20,
    color: '#808A75',
  },
  diseaseDescription: {
    fontWeight: 500,
    fontSize: 13,
    lineHeight: 16,
    color: '#48503F',
    marginTop: 20,
  },
});
