import AddFarm from './AddFarm';
import CostEstimatorForm from './CostEstimatorForm';
import DiseaseInfo from './DiseaseInfo';
import FarmForm from './FarmForm';
import Home from './Home';
import Timeline from './Timeline';
import ScanDisease from './ScanDisease';
import {StyleSheet} from 'react-native';

export {
  AddFarm,
  CostEstimatorForm,
  DiseaseInfo,
  FarmForm,
  Home,
  Timeline,
  ScanDisease,
  mainStyles,
};

const mainStyles = StyleSheet.create({
  titleTextWrapper: {
    alignItems: 'center',
    gap: 15,
  },
  titleText: {
    fontFamily: 'Gilroy-Bold',
    fontSize: 40,
  },
  stickyHeader: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 16,
    paddingBottom: 20,
    elevation: 0,
    zIndex: 2,
  },
});
