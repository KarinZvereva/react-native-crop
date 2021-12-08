import {NativeModules} from 'react-native';

const getCropImage = NativeModules.GetCropImage;

export const setImage = (base64) => new Promise((resolve, reject) => {
  getCropImage.init(base64, (err, result) => {
    if (err) {
      return reject(err);
    }
    if (result) {
      resolve(result);
    }
  });
});

export default {
  setImage,
};
