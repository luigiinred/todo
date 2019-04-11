import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Checkbox from './Checkbox'

interface Props {
  label: string;
  isCompleted: boolean;
  onToggleChecked: () => void;
}

export default (props: Props) => (
  <TouchableOpacity onPress={props.onToggleChecked}>
    <View style={styles.container}>
      <Checkbox checked={props.isCompleted}/>
      <Text style={styles.label}>{props.label}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		marginHorizontal: 16,
		marginVertical: 2,
		padding: 4,
		borderRadius: 4,
		backgroundColor: '#3a3b3d',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 2
	},
	label: {
		flex: 1,
		fontSize: 16,
		padding: 8,
		color: '#f1f1f1'
	}
});
