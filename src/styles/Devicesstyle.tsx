import { StyleSheet } from "react-native";

export default StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#f4f4f4",
	},
	container: {
		flex: 1,
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 18,
	},
	header: {
		minHeight: 64,
		justifyContent: "center",
		marginBottom: 16,
	},
	title: {
		color: "#000000",
		fontSize: 34,
		fontWeight: "900",
		letterSpacing: 0,
	},
	device: {
		minHeight: 112,
		marginBottom: 16,
		paddingHorizontal: 20,
		paddingVertical: 18,
		borderWidth: 2,
		borderColor: "#000000",
		borderRadius: 24,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	deviceName: {
		color: "#000000",
		fontSize: 25,
		fontWeight: "800",
		letterSpacing: 0,
	},
	location: {
		marginTop: 8,
		color: "#000000",
		fontSize: 18,
		fontWeight: "600",
		letterSpacing: 0,
	},
	status: {
		color: "#000000",
		fontSize: 20,
		fontWeight: "800",
		letterSpacing: 0,
	},
});
