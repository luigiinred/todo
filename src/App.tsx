import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Item from './components/Item';
import TodoInput from './components/TodoInput';

interface Props {}

interface State {
	items: {
			label: string;
			isCompleted?: boolean;
		}[];
}
export default class App extends Component<Props, State> {
	state = {
		items: []
	};

	onAdd(label: string) {
		this.setState({ items: [ { label }, ...this.state.items ] });
  }
  
  toggleItem(index: number) {
    console.log(index);

    const items = this.state.items;
    items[index].isCompleted = !items[index].isCompleted;

    this.setState({items});
  }

	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>My Todo App!!!</Text>
				<TodoInput onAdd={(label: string) => this.onAdd(label)} />
				<FlatList
					data={this.state.items}
					renderItem={({ item, index}) => <Item label={item.label} isCompleted={item.isCompleted} onToggleChecked={()=>{this.toggleItem(index)}} />}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 42,
		backgroundColor: '#2c2d2f'
	},
	welcome: {
		fontSize: 32,
		textAlign: 'center',
		padding: 8,
		color: '#f1f1f1'
	}
});
