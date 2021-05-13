import { StyleSheet } from 'react-native';

const loginStyle = StyleSheet.create({
    text:{
        fontSize: 30,
        alignContent: 'center'

    },
    container: {
        flex: 1,
        position: 'relative',
    },
    top: {
        position: 'relative',
        height: 300
    },
    backgroundImage:{
        backgroundColor: '#5257F2',
        flex: 1,
        position: 'relative',
        width: '100%',
        height: '100%',
        // opacity: 0.65,
        margin: 0
    },
    middle: {
        width: '100%',
        height: '100%',
        flex: 1,
        position: 'absolute',
        zIndex: 2,
        backgroundColor: 'transparent',
        paddingLeft: 26.3,
        paddingRight: 26.3,
    },
    bottom: {
        position: 'relative',
        height: '100%',
        paddingRight: 12.7,
        paddingLeft: 12.7,
        backgroundColor: '#64C2BE',
        // opacity: 0.75,
    },
    signin: {
        top: 0,
        color: '#2D3057',
        marginTop: 15,
    },
    formItems: {
        marginTop: 15,
        borderBottomColor: '#2D3057',
        width: '90%'
    },
    Input: {
        fontSize: 12,
        fontWeight: 'bold'
    },
    textContainer: {
        color: '#FCFDFF',
        fontSize: 24,
        marginBottom: 30,
        position: 'relative',
        top: '20%',
        alignSelf: 'center',
    },
    formArea: {
        alignSelf: 'center',
        width: '100%',
        backgroundColor: '#ffffff',
        borderRadius: 5,
        top: '20%',
        paddingBottom: 40,
    },
    Button: {
        padding: 30.8,
        borderRadius: 4,
      },
      mainBtn: {
        backgroundColor: '#64C2BE',
        shadowRadius: 0,
        shadowColor: 'red',
        shadowOffset: { height: 0, width: 0 },
      },
      btnText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
      },
      buttonRegister: {
        padding: 30.8,
        borderRadius: 4,
        marginTop: 140,
      },
      registerLink: {
          position: 'relative',
          textAlign: 'center',
          color: 'white',
            fontWeight: 'bold',
            fontSize: 12,
      }
});

export default loginStyle;