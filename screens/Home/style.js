import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const globalStyle = StyleSheet.create({

    header: {
        marginLeft: horizontalScale(27), 
        marginRight: horizontalScale(17), 
        marginTop: verticalScale(10),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    messageIcon: {
        padding: horizontalScale(10), 
        borderRadius: horizontalScale(100), 
        backgroundColor: '#F9FAFB'
    },
    messageNumberContainer: {
        backgroundColor: '#F35BAC',
        justifyContent: 'center',
        flexDirection: 'row',
        width: horizontalScale(10),
        height: horizontalScale(10),
        borderRadius: horizontalScale(10),
        alignItems: 'center',
        position: 'absolute',
        right: horizontalScale(5),
        top: verticalScale(5),
    },
    messageNumber: {
        color: 'white',
        fontSize: scaleFontSize(6),
        fontWeight: 600,
        fontFamily: getFontFamily('Inter', 600),
    },
    userStoryContainer: {
        marginTop: verticalScale(15),
        marginHorizontal: horizontalScale(23)
    },
    userPostContainer:{
        marginHorizontal: horizontalScale(20),
    }
})

export default globalStyle;