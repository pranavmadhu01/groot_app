import React from 'react';
import DiseaseCard from '../../components/cards/DiseaseCard';

const {View, Image, StyleSheet, Dimensions} = require('react-native');

const DiseaseInfo = ({route, navigation}) => {
  return (
    <View>
      <Image
        source={{uri: `${route.params.image}`}}
        style={styles.diseaseImage}
      />
      <View style={styles.diseaseDetailsWrapper}>
        {route.params.scanData.map((data, i) => (
          <DiseaseCard
            isDetected={true}
            name={data.class}
            key={i}
            score={data.score}
          />
        ))}
        {/* <DiseaseDetails
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
        /> */}
      </View>
    </View>
  );
};

export default DiseaseInfo;

const styles = StyleSheet.create({
  diseaseImage: {
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: 300,
  },
  diseaseDetailsWrapper: {
    paddingHorizontal: '5%',
    paddingVertical: 30,
    gap: 10,
  },
});
