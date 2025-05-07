import { StyleSheet } from "react-native";
import { horizontalScale } from "../../assets/styles/scaling";

const styles = StyleSheet.create({

    userImageContainer:{
        borderColor: '#F35BAC',
        borderWidth: 1,
        padding: horizontalScale(3),
        borderRadius: 65,
    },
    userProfile:{
        borderRadius: 65,
    }
});

export default styles; 