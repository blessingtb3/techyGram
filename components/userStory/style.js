import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({

    storyContainer:{
        marginRight: horizontalScale(20),
    },
    firstName:{
        fontFamily: getFontFamily('Inter', 500),
        fontWeight: 500,
        fontSize: scaleFontSize(14),
        color: '#022150',
        marginTop: verticalScale(5),
        textAlign: 'center'
    },
});

export default styles;