import React from 'react';
import DiseaseCard from '../../components/DiseaseCard';
import DiseaseDetails from '../../components/DiseaseDetails';
const {View, Image, StyleSheet, Dimensions} = require('react-native');

const DiseaseInfo = () => {
  return (
    <View>
      <Image
        source={require('../../asstes/images/grape_disease.png')}
        style={styles.diseaseImage}
      />
      <View style={styles.diseaseDetailsWrapper}>
        <DiseaseCard isDetected={true} />
        <DiseaseDetails
          name={'Anthracnose'}
          type={'Grape Disease'}
          description={`Et adipisicing dolor aliqua et ipsum et fugiat exercitation nisi. Nulla
        est tempor excepteur dolor. Enim aute ad id do reprehenderit mollit et
        duis sunt cillum dolor veniam est veniam. Veniam incididunt enim
        exercitation exercitation. Voluptate ullamco dolore et aliqua veniam ea
        nisi. Pariatur veniam aliquip labore dolore. Sint pariatur adipisicing
        tempor laboris exercitation esse ad minim mollit occaecat incididunt
        occaecat. Et adipisicing dolor aliqua et ipsum et fugiat exercitation
        nisi. Nulla est tempor excepteur dolor. Enim aute ad id do reprehenderit
        mollit et duis sunt cillum dolor veniam est veniam. Veniam incididunt
        enim exercitation exercitation. Voluptate ullamco dolore et aliqua
        veniam ea nisi. Pariatur veniam aliquip labore dolore. Sint pariatur
        adipisicing tempor laboris exercitation esse ad minim mollit occaecat
        incididunt occaecat.`}
        />
      </View>
    </View>
  );
};

export default DiseaseInfo;

const styles = StyleSheet.create({
  diseaseImage: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  diseaseDetailsWrapper: {
    paddingHorizontal: '5%',
    paddingVertical: 30,
  },
});
