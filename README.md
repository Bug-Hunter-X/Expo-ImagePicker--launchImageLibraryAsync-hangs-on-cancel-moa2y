# Expo ImagePicker Cancel Handling Bug

This repository demonstrates a bug in Expo's ImagePicker library where `launchImageLibraryAsync` fails to reject its promise when the user cancels image selection. This results in a hanging promise, potentially blocking the application.

## Bug Description

The `launchImageLibraryAsync` function, when cancelled by the user, does not trigger a rejection on the returned promise.  This prevents proper error handling and can lead to application freezes.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run the app using Expo Go.
4. Attempt to select an image from the gallery. 
5. Cancel image selection.  Observe that the app hangs indefinitely, indicating a non-rejected promise.

## Solution

The solution involves manually checking the `type` property of the returned result from `launchImageLibraryAsync`. If the `type` is `'cancel'`, we explicitly reject the promise to allow proper error handling.