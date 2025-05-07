import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";
import { horizontalScale, scaleFontSize, verticalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({

    usercontainer:{
        flexDirection: 'row',
    },

    userTextContainer:{
        justifyContent: 'center', 
        marginLeft: horizontalScale(10),
    },

    user:{
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    userame:{
        color: 'black', 
        fontFamily: getFontFamily('Inter', 500), 
        fontWeight: 600, 
        fontSize: scaleFontSize(16)
    },

    location:{
        color: '#79869F',
        fontFamily: getFontFamily('Inter', 400),
        fontWeight: 400, 
        letterSpacing: 0.12,
        fontSize: scaleFontSize(12),
        marginTop: verticalScale(3),
    },

    postImage:{
        alignItems: 'center',
        marginVertical: verticalScale(15),
    },

    userPostContainer:{
        marginTop: verticalScale(30),
        borderBottomWidth: 1,
        paddingBottom: verticalScale(20),
        borderBottomColor: '#EFF2F6',
    },

    actualImage:{
        width: 380,
        height: 220,
        borderRadius: 20
    },

    userPostStats:{
        marginLeft: horizontalScale(10), 
        flexDirection: 'row'
    },
    
    userPostStatButton:{
        flexDirection: 'row'
    },

    userPostStatButtonRight: {
        flexDirection: 'row', 
        marginLeft: horizontalScale(20)
    },

    userPostStatText: {
        marginLeft: horizontalScale(3), 
        color: '#79869F'
    },
});

export default styles;