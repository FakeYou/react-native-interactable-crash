import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Interactable from 'react-native-interactable';

export default () =>
	<View style={styles.interactable}>
		<Interactable.View
			style={styles.interactable}
			snapPoints={[{ x: 0, y: 0 }]}
		>
			<View style={styles.normal}>
				<Text style={styles.text}>Normal</Text>
			</View>
			<View style={styles.crasher} pointerEvents="box-none">
				<Text style={styles.text}>Crash!</Text>
			</View>
		</Interactable.View>
	</View>

const styles = StyleSheet.create({
	interactable: {
		backgroundColor: 'pink',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},

	crasher: {
		width: 200,
		height: 200,
		backgroundColor: 'red',
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},

	normal: {
		width: 200,
		height: 200,
		backgroundColor: 'green',
		margin: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},

	text: {
		fontSize: 24,
		color: '#000',
	},
})