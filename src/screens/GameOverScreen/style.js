import { StyleSheet,Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    container: {
        height: height * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
    },
    image: {
        width: '70%',
        height: 200,
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#212121',
        marginBottom: 10,
    },
    buttonContainer: {
        height: height * 0.05,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 18,
    

    },

    cardContainer: {

        height: height * 0.25,
        width: width * 0.7,
        
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 8,
        

    }


});