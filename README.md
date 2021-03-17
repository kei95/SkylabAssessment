## 🚀 How to run on your environment

### `yarn`
Since this project uses `yarn` as a package manager, make sure to install dependencies useing `yarn` before you run the project.

### `expo start`

Runs this app in development mode.
Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start --reset-cache
```


## 📝 Notes
Since `expo-image-picker` has a [bug](https://github.com/react-native-image-picker/react-native-image-picker/issues/1541) in iOS simulator, I strongly recommend you to use a real device.
