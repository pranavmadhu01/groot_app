import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Leaves} from '../logos';

const FormTitleWrapper = ({title, isCompact}) => {
  const logoSize = isCompact ? 30 : 60;

  return (
    <View
      style={isCompact ? styles.compactTitleWrapper : styles.formTitleWrapper}>
      <Leaves width={logoSize} height={logoSize} />
      <Text variant="headlineMedium" style={styles.formTitle}>
        {title}
      </Text>
    </View>
  );
};

export default FormTitleWrapper;

const styles = StyleSheet.create({
  formTitleWrapper: {alignItems: 'center', gap: 15},
  compactTitleWrapper: {
    position: 'relative',
    bottom: 40,
    flexDirection: 'row',
    gap: 10,
    alignSelf: 'center',
    paddingBottom: 0,
  },
  formTitle: {fontFamily: 'Gilroy-SemiBold'},
});
