# ReactNativeResponsive
react-native-responsive

setScreenSizeDefaultAndroid : set width , height for device base Android (Ex : Nexus S 480x800)

setScreenSizeDefaultIOS : set width , height for device base IOS (Ex : Nexus S 750x1334)

default screen Android : 480x800

default screen IOS : 750x1334

Ex : 

import {
  scale,
  verticalScale,
  horizontalScale,
} from '@dotrongan/react-native-responsive';

export default StyleSheet.create({
  loginForm: {
    width: widthScreen,
    height: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: horizontalScale(24),
    borderTopRightRadius: horizontalScale(24),
    alignItems: 'center',
    padding: scale(20),
    flex: 1,
  },
  title: {
    fontSize: Platform.OS === 'ios' ? scale(30) : scale(20),
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#004FB6',
  },
  buttonSubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(16),
    width: '100%',
    height: Platform.OS === 'ios' ? verticalScale(70) : verticalScale(60),
    borderRadius: horizontalScale(8),
    backgroundColor: '#162B97',
  },
  titleSignin: {
    fontSize: textSizeButtonAndInput,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#FFFFFF',
    alignItems: 'center',
    textAlign: 'center',
  },
  viewBottom: {
    width: '100%',
    flexDirection: 'row',
    marginTop: verticalScale(40),
    flex: 1,
    alignItems: 'center',
    bottom: verticalScale(20),
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: Platform.OS === 'ios' ? verticalScale(70) : verticalScale(60),
    borderRadius: horizontalScale(8),
    marginLeft: verticalScale(8),
    marginRight: verticalScale(8),
    backgroundColor: '#FBD900',
    paddingVertical: 0,
  },
  viewButton: {
    flex: 1,
    backgroundColor: 'white',
    marginRight: horizontalScale(15),
  },
  titleButton: {
    fontSize: textSizeButtonAndInput,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#004FB6',
    alignItems: 'center',
    textAlign: 'center',
  },
  inputStyle: {
    textAlign: 'center',
    color: '#1F3258',
    fontSize: textSizeButtonAndInput,
    fontStyle: 'normal',
    fontWeight: 'bold',
    width: '100%',
    height: heightButtonAndInput,
    paddingVertical: 0,
  },
  forgotButton: {
    height: verticalScale(30),
    width: horizontalScale(37),
    backgroundColor: '#EBFBFD',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: horizontalScale(10),
    paddingLeft: horizontalScale(3),
  },
  forgotTitle: {
    width: '100%',
    fontSize: horizontalScale(12),
    fontWeight: 'normal',
    fontStyle: 'normal',
    color: '#80CDD8',
    textAlignVertical: 'center',
  },
  errorText: {
    color: '#BD2624',
    fontSize: horizontalScale(12),
    fontWeight: 'normal',
    fontStyle: 'normal',
    lineHeight: verticalScale(15),
    alignItems: 'center',
    width: '100%',
    marginBottom: verticalScale(8),
    marginTop: verticalScale(8),
  },
  inputContainer: {
    height: Platform.OS === 'ios' ? verticalScale(70) : verticalScale(60),
    borderRadius: horizontalScale(8),
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#F0F0F0',
    paddingLeft: scale(16),
    paddingRight: scale(16),
    marginTop: verticalScale(16),
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  appVersion: {
    fontSize: textSizeButtonAndInput,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: '#b5bdcd',
  },
});

