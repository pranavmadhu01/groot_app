import React from 'react';
import DiseaseCard from '../../components/cards/DiseaseCard';
import {ArrowBackIcon} from '../../components/icons';

const {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} = require('react-native');

const DiseaseInfo = ({route, navigation}) => {
  return (
    <View style={styles.container}>
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
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    paddingHorizontal: '5%',
    paddingVertical: 30,
    gap: 10,
  },
});
