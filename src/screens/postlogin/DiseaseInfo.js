import React from 'react';
import DiseaseCard from '../../components/cards/DiseaseCard';
import {ArrowBackIcon} from '../../components/icons';
import {DetectedDiseaseCard} from '../../components/cards';

const {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} = require('react-native');

const DiseaseInfo = ({route, navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity
        style={styles.goBackBtn}
        onPress={() => navigation.goBack()}>
        <ArrowBackIcon width={32} height={32} color="black" />
      </TouchableOpacity>
      <Image
        source={{uri: `${route.params.image}`}}
        style={styles.diseaseImage}
      />
      <View style={styles.diseaseDetailsWrapper}>
        <DetectedDiseaseCard scanData={route.params.scanData} />
      </View>
    </ScrollView>
  );
};

export default DiseaseInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 24,
  },
  goBackBtn: {
    position: 'absolute',
    top: 35,
    left: -12,
    paddingVertical: 3,
    paddingRight: 8,
    paddingLeft: 36,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 15,
    zIndex: 1,
  },

  diseaseImage: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 300,
  },
  diseaseDetailsWrapper: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: 20,
    gap: 10,
  },
});
