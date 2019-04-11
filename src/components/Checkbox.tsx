import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
	checked: boolean;
}

export default (props: Props) => (
	<View style={styles.container}>
		<Text style={styles.label}>{props.checked ? '✔': ''}</Text>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		margin: 4,
		width: 28,
		height: 28,
		borderRadius: 2,
		backgroundColor: 'white',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.1,
		shadowRadius: 1
	},
	label: {
		flex: 1,
		fontSize: 16,
		padding: 4,
		color: '#f1f1f1'
	}
});
