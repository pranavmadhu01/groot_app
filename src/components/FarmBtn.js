import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';

const FarmBtn = ({title}) => {
  return (
    <TouchableOpacity style={styles.farmBtnWrapper} activeOpacity={0.5}>
      <Image source:source style={styles.imageIconStyle} />
      <Text style={styles.textStyle}> {title} </Text>
    </TouchableOpacity>
  );
};

export default FarmBtn;

const styles = StyleSheet.create({
  farmBtnWrapper: {
    padding: (16,12),
    borderRadius: 30,
    borderColor: "#CDD3C5",
  },
  imageIconStyle: {
    width: 16,
    height: 16
  },
  textStyle: {
    fontWeight: 600,
    fontSize: 11,
    lineHeight: 14
  }
});
