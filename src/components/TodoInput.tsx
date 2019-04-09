import React, { Component } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

interface Props {
	onAdd: (text: string) => void;
}

interface State {
	text: string;
}

export default class TodoInput extends Component<Props, State> {
	state = { text: '' };
	constructor(props: Props) {
		super(props);
	}

	onPress() {
		this.props.onAdd(this.state.text);
		this.setState({ text: '' });
	}

	render() {
		return (
			<View style={styles.container}>
				<TextInput
					style={styles.input}
					placeholder={'Add Item'}
					placeholderTextColor={'#666'}
					onChangeText={(text: string) => {
						this.setState({ text });
					}}
					value={this.state.text}
				/>
				<Button style={styles.button} title="Enter" onPress={() => this.onPress()} color={'#fff'} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		margin: 16,
		padding:4,
		borderRadius: 4,
		backgroundColor: '#3a3b3d',
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		shadowRadius: 2
	},
	input: {
		flex: 1,
		fontSize: 16,
		padding: 8,
		color: "#f1f1f1"
	},
	button: {
		flex: 1,
		fontSize: 16,
		padding: 8
	}
});
