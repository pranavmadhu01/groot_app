import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SectionList,
} from 'react-native';
import {DetectionRippleIcon, DropdownIcon} from '../icons';
import {ProgressBar} from 'react-native-paper';
import {NavbarLogo} from '../logos';

const DiseaseCard = ({isDetected, name, score, index, predictedDisease}) => {
  console.log(predictedDisease);
  const [openCard, setOpenCard] = useState({condition: false, index: null});
  const [color, setColor] = useState(
    name === 'Healthy' ? '#6EAF1F' : name === 'Unknown' ? 'orange' : 'red',
  );
  const [tintColor, setTintColor] = useState(
    name === 'Healthy' ? '#CFE4B4' : name === 'Unknown' ? '#FFDB99' : '#F6C5C5',
  );

  return (
    <View style={{marginBottom: 15}}>
      <View style={styles.diseaseCard}>
        <DetectionRippleIcon width={48} height={48} color={color} />
        <View style={styles.diseaseResult}>
          <View style={{gap: 5}}>
            <Text style={styles.diseaseName}>{name}</Text>
            <Text style={{...styles.diseaseDetected, color: color}}>
              {score} %
            </Text>
          </View>
          <View
            style={{...styles.progressBarWrapper, backgroundColor: tintColor}}>
            <ProgressBar
              progress={score / 100}
              color={color}
              style={styles.progressBar}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() =>
            openCard.condition && openCard.index === index
              ? setOpenCard({condition: false, index: null})
              : setOpenCard({condition: true, index: index})
          }
          style={styles.dropdownIconWrapper}>
          <DropdownIcon
            width={20}
            height={20}
            isOpen={openCard.condition && openCard.index === index}
            isVisible={name === 'Healthy' || name === 'Others' ? false : true}
          />
        </TouchableOpacity>
      </View>

      {openCard.condition && openCard.index === index && (
        <View style={styles.diseaseDetailsWrapper}>
          <Text style={styles.diseaseTitle}>{name}</Text>
          <Image
            source={{uri: `${predictedDisease.image}`}}
            style={styles.diseaseImage}
            resizeMode="cover"
          />
          <Text style={styles.diseaseDescription}>
            {predictedDisease.description}
          </Text>

          <View>
            <View style={{gap: 10, marginBottom: 30}}>
              <Text style={styles.diseaseSubTitle}>Symptoms</Text>
              {predictedDisease.precautions.map(symptom => (
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 3,
                    paddingRight: 20,
                  }}>
                  <View style={{marginTop: 2}}>
                    <NavbarLogo width={18} height={18} />
                  </View>
                  <Text style={styles.diseaseDescription}>{symptom}</Text>
                </View>
              ))}
            </View>

            <View style={{gap: 10}}>
              <Text style={styles.diseaseSubTitle}>Precautions</Text>
              {predictedDisease.precautions.map(precaution => (
                <View
                  style={{
                    flexDirection: 'row',
                    gap: 3,
                    paddingRight: 20,
                  }}>
                  <View style={{marginTop: 2}}>
                    <NavbarLogo width={18} height={18} />
                  </View>
                  <Text style={styles.diseaseDescription}>{precaution}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default DiseaseCard;

const styles = StyleSheet.create({
  diseaseCardWrapper: {
    height: 360,
  },
  diseaseResult: {gap: 10, flex: 1},
  diseaseCard: {
    backgroundColor: 'white',
    borderRadius: 25,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    gap: 12,
  },
  diseaseDetected: {
    fontSize: 11,
    fontFamily: 'Gilroy-Medium',
  },
  diseaseName: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    marginTop: 2,
  },

  progressBar: {
    height: 4,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  progressBarWrapper: {
    height: 4,
    justifyContent: 'center',
    borderRadius: 30,
  },

  dropdownIconWrapper: {position: 'absolute', right: 24, bottom: 36},

  diseaseTitle: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'Gilroy-Bold',
    marginTop: 2,
  },
  diseaseSubTitle: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Gilroy-SemiBold',
    marginTop: 2,
  },
  diseaseDescription: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    lineHeight: 22,
    marginTop: 2,
    textAlign: 'justify',
    width: '100%',
  },

  diseaseDetailsWrapper: {
    gap: 16,
    paddingTop: 24,
  },

  diseaseImage: {width: '100%', height: 200, borderRadius: 12},
});
