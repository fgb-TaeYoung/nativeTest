import {GestureResponderEvent, TouchableOpacity, useColorScheme,Text} from 'react-native'

const BottomButton = ({
	text,
	onPress,
	disabled,
}: {
	text: string;
	onPress: (event: GestureResponderEvent) => void;
	disabled: boolean;
}) => {
	const dark = useColorScheme() === "dark";
	return (
		<TouchableOpacity
			style={{
				backgroundColor: dark
					? disabled
						? "#FFF"
						: "#ccc"
					: disabled
					? "#0000"
					: "#fff",
				flex: 1,
				margin: 4,
				borderRadius: 4,
			}}
			disabled={disabled}
			onPress={(e:GestureResponderEvent) => !disabled && onPress(e)}>
			<Text style={{textAlign: "center", padding: 10}}>{text}</Text>
		</TouchableOpacity>
	);
}

export default BottomButton