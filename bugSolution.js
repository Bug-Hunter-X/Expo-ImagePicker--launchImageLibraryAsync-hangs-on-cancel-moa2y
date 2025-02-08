The corrected code handles the cancellation case by explicitly rejecting the promise when the user cancels the image picker:
```javascript
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [4, 3],
    quality: 1,
  });

  if (result.type === 'cancel') {
    return Promise.reject(new Error('Image selection cancelled'));
  }

  if (!result.cancelled) {
    // Use the selected image
    console.log(result.uri);
  }
}

//Example usage
pickImage().then(uri => console.log('Image URI:', uri))
  .catch(error => console.error('Image picker error:', error));
```