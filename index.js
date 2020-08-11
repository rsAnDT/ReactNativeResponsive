import {Dimensions, Platform} from 'react-native';

const screenWidth = Dimensions.get('window').width;

const screenHeight = Dimensions.get('window').height;

//Nexus S
let standardWidthAndroid = 480;

let standardHeightAndroid = 800;

//iPhone X
let standardWidthIOS = 750;

let standardHeightIOS = 1334;

const setScreenSizeDefaultAndroid = (width, height) => {
    standardWidthAndroid = width;
    standardHeightAndroid = height;
};

const setScreenSizeDefaultIOS = (width, height) => {
    standardWidthIOS = width;
    standardHeightIOS = height;
};

export const getScreenSizeDefault = () => {
    console.log("screenSizeDefault width = ", standardWidthIOS + " height = "+standardHeightIOS);
};

export const scale = (size) => Platform.OS === 'android'
    ? (screenWidth / standardWidthAndroid) * size
    : (screenWidth / standardWidthIOS) * size;

export const verticalScale = (size) => Platform.OS === 'android'
    ? (screenHeight / standardHeightAndroid) * size
    : (screenHeight / standardHeightIOS) * size;

export const horizontalScale = (size) => (size, factor = 0.5) =>
    size + (scale(size) - size) * factor;

