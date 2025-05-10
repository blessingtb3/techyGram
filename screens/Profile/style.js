import { StyleSheet } from "react-native";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";
import { getFontFamily } from "../../assets/fonts/helper";

const localStyle = StyleSheet.create({

    profileImageContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: verticalScale(30)
    },

    profileImageBorder:{
        borderColor: '#F35BAC',
        borderWidth: 3,
        padding: horizontalScale(4),
        borderRadius: horizontalScale(110)
    },

    profileImage:{
        width: horizontalScale(110),
        height: horizontalScale(110),
        borderRadius: 65
    },

    userName:{
        marginTop: verticalScale(10),
        textAlign: 'center',
        fontFamily: getFontFamily('Inter', 600),
        fontWeight: 600,
        fontSize: scaleFontSize(25),
    },

    userStatContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: horizontalScale(50),
        paddingVertical: verticalScale(30),
        borderBottomWidth: 1,
        borderBottomColor: '#E9EFF1',

    },

    userStatBorder:{
        borderRightWidth: 1,
        borderColor: '#E9EFF1'
    },
    
    userStat:{
        fontFamily: getFontFamily('Inter', 600),
        fontWeight: 600,
        fontSize: scaleFontSize(20),
        color: '#022150',
        textAlign: 'center'
    },

    userStatType:{
        color: '#79869F',
        fontFamily: getFontFamily('Inter', 400),
        fontWeight: 400,
        fontSize: scaleFontSize(16),
        textAlign: 'center'
    }
});

export default localStyle;