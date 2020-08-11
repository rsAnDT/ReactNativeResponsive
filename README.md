# ReactNativeResponsive
react-native-responsive

setScreenSizeDefaultAndroid : set width , height for device base Android (Ex : Nexus S 480x800)

setScreenSizeDefaultIOS : set width , height for device base IOS (Ex : Nexus S 750x1334)

default screen Android : 480x800

default screen IOS : 750x1334

Ex : 

fontSize: Platform.OS === 'ios' ? scale(30) : scale(20),

width: horizontalScale(37),

height: Platform.OS === 'ios' ? verticalScale(70) : verticalScale(60),

import {
  scale,
  verticalScale,
  horizontalScale,
} from '@dotrongan/react-native-responsive';
