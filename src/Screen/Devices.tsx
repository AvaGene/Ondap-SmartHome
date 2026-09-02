import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../styles/Devicesstyle";

export default function Devices() {
	return (
		<SafeAreaView style={styles.safeArea}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.title}>My Devices</Text>
				</View>

				<View style={styles.device}>
					<View>
						<Text style={styles.deviceName}>Light</Text>
						<Text style={styles.location}>Living Room</Text>
					</View>

					<Text style={styles.status}>ON</Text>
				</View>

				<View style={styles.device}>
					<View>
						<Text style={styles.deviceName}>Air Conditioner</Text>
						<Text style={styles.location}>Living Room</Text>
					</View>

					<Text style={styles.status}>20°C</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
