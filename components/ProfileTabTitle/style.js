import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize } from "../../assets/styles/scaling";

const profileTabTitlelStyle = StyleSheet.create ({

    title:{
        color: '#022150',
        fontFamily: getFontFamily('Inter', 500),
        fontWeight: 500,
        fontSize: scaleFontSize(16),
        padding: horizontalScale(15)
    },

    titleNotFocused:{
        color: '#79869F',
        fontFamily: getFontFamily('Inter', 400),
        fontSize: scaleFontSize(16),
        fontWeight: 400
    }
});

export default profileTabTitlelStyle;