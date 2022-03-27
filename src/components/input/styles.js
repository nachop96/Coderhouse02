import { StyleSheet,Dimensions } from 'react-native';
import { colors } from '../../constants/theme';

const {width,height} = Dimensions.get('screen');


export const styles = StyleSheet.create({


    input: {
        height: height * 0.09,
        borderBottomColor: 'black',
        borderBottomWidth: 3,
        marginBottom: 10,
        fontSize: 50,
        alignSelf: 'center',
        color: colors.secondary,
        textAlign: 'center'

    },

    container: {
        marginVertical: 10,

    },

});

