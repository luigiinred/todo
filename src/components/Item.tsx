import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
	label: string;
}

export default (props: Props) => (
	<View style={styles.container}>
		<Text style={styles.label}>{props.label}</Text>
	</View>
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
