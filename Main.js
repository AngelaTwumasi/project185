import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Platform,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import Filter1 from '../components/Filter1';

export default class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasCameraPermission: null,
			faces: [],
		};

		this.onFacesDetected = this.onFacesDetected.bind(this);
	}

	async componentDidMount() {
		const { status } = await Camera.requestPermissionsAsync();
		this.setState({ hasCameraPermission: status === 'granted' });
	}

	onFacesDetected({ faces }) {
		this.setState({ faces: faces });
	}

	render() {
		var { hasCameraPermission } = this.state;
		if (hasCameraPermission === null) {
			return <View />;
		}
		if (hasCameraPermission === false) {
			return (
				<View style={styles.container}>
					<Text>No access to camera</Text>
				</View>
			);
		}

		return (
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.upperContainer}>
					<Image source={require('../assets/appIcon.png')} style={styles.appIcon} />
					<Text style={styles.appName}>Look Me....</Text>
				</View>
				<View style={styles.middleContainer}>
					<Camera
						style={{ flex: 1 }}
						type={Camera.Constants.Type.front}
						faceDetectorSettings={{
							mode: FaceDetector.FaceDetectorMode.fast,
							detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
							runClassifications: FaceDetector.FaceDetectorClassifications.all,
						}}
						onFacesDetected={this.onFacesDetected}
						onFacesDetectionError={this.onFacesDetectionError}
					/>
					{this.state.faces.map((face) => (
						<Filter1 key={`face-id-${face.faceID}`} face={face} />
					))}
				</View>
				<View style={styles.lowerContainer}>
					<View style={styles.lowerTopContainer}></View>
					<View style={styles.lowerBottomContainer}></View>
				</View>
			</View>


		);

		return (
			<View style={styles.lowerContainer}>
				<View style={styles.lowerTopContainer}></View>
				<View style={styles.lowerBottomContainer}>
					<ScrollView
						contentContainerStyle={styles.filters}
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{data.map(filter_data => {
							return (
								<TouchableOpacity
									key={'filter=button-${filter_data.id}'}
									style={[
										styles.filterButton,
										{
											borderColor:
												this.state.current_filter === filter_data.id
													? "#FFA384"
													: "#FFFF"
										}
									]}
									onPress={() =>
										this.setState({
											current_filter: '${filter_data.id}'
										})
									}

								>
									<Image
										source={filter_data.src}
										style={styles.filterImage}
									/>
								</TouchableOpacity>
							);
						})}
					</ScrollView>
				</View>
			</View>
		);

		{this.state.faces.map(face => (
			<Filter
			key={'face-id-${face.faceID}'}
			face={face}
			source={filters[this.state.current_filter].src}
			width={filters[this.state.current_filter].width}
			height={filters[this.state.current_filter].height}
			left={filters[this.state.current_filter].left}
			right={filters[this.state.current_filter].right}
			top={filters[this.state.current_filter].top}
			/>
         ))}

		return (
			<View style={styles.lowerContainer}>
				<View style={styles.lowerTopContainer}></View>
				<View style={styles.lowerBottomContainer}>
					<ScrollView
						contentContainerStyle={styles.categories}
						horizontal
						showsHorizontalScrollIndicator={false}
					>
						{Objects.keys(data).map => (
						<TouchableOpacity
							key={'category-button-$(category)'}
							style={[
								styles.category,
								{
									backgroundColor:
										this.state.selected === category ? "#FFA384" : "#E7F2F8"
								}
							]}
							onPress={() =>
								this.setState({
									selected: category,
									current_filter: data[category][0].id
								})
							}

						>
							<Text>{category}</Text>
						</TouchableOpacity>
                            
                        ))}
					</ScrollView>
				</View>
			</View>
		);
	}
}

const data = {
	Crown: [
		{ id: "crown-pic1", src: require("../assets/crown-pic1.png") },
		{ id: "crown-pic2", src: require("../assets/crown-pic2.png") },
		{ id: "crown-pic3", src: require("../assets/crown-pic3.png") }
	],
	Flowers: [
		{ id: "flower-pic1", src: require("../assets/flower-pic1.png") },
		{ id: "flower-pic2", src: require("../assets/flower-pic2.png") },
		{ id: "flower-pic3", src: require("../assets/flower-pic3.png") },
	],
	Hairs: [{ id: "hair-pic1", src: require("../assets/hat-pic1.png") }],
	Hats: [
		{ id: "hat-pic1", src: require("../assets/hat-pic1.png") },
		{ id: "hat-pic2", src: require("../assets/hat-pic2.png") }
	],
	Others: [
		{ id: "other-pic1", src: require("../assets/other-pic1.png") },
		{ id: "other-pic2", src: require("../assets/other-pic2.png") },
		{ id: "other-pic3", src: require("../assets/other-pic3.png") }
	]
};


 var data= {
	category1: [
		{ id: “imageFilter_id_1”, src: require(“./assets/imageFilter1.png”) },
        { id: “imageFilter_id_2”, src: require(“./assets/imageFilter2.png”) },
        { id: “imageFilter_id_4”, src: require(“./assets/imageFilter4.png”) }
	],
	category2: [
		{ id: “imageFilter_id_3”, src: “./assets/imageFilter3.png”},
	]
	

};




const filters = {
	"crown-pic1": {
		src: require("../assets/crown-pic1.png"),
		width: 3.5,
		height: 0.7,
		left: 0.46,
		right: 0.15,
		top: 1.5
	},
	"crown-pic2": {
		src: require("../assets/crown-pic2.png"),
		width: 3.5,
		height: 1.2,
		left: 0.46,
		right: 0.15,
		top: 0.7
	},
	"crown-pic3": {
		src: require("../assets/crown-pic3.png"),
		width: 2,
		height: 0.6,
		left: 0.36,
		right: 0.15,
		top: 1.5
	},

}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#E7F2F8',
	},
	droidSafeArea: {
		marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	upperContainer: {
		flex: 0.13,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#E7F2F8',
		flexDirection: 'row',
	},
	appIcon: {
		width: 50,
		height: 50,
		borderRadius: 25,
	},
	appName: {
		fontSize: 25,
	},
	middleContainer: { flex: 0.67 },
	lowerContainer: {
		flex: 0.2,
		backgroundColor: '#E7F2F8',
	},
	lowerTopContainer: {
		flex: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
	},
	lowerBottomContainer: {
		flex: 0.7,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#EFE7BC',
	},


});
