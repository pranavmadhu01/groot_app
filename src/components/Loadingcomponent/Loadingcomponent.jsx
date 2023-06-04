import {View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

const Loadingcomponent = () => {
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <ActivityIndicator animating={true} color="#6eaf1f" />
    </View>
  );
};
export default Loadingcomponent;
