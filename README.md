## ToDo App Project Submission

Dear Interviewers,

Thank you for the opportunity to participate in this coding challenge. Below is the guide to installing, running, and navigating the ToDo App I've developed as per the test assignment. This application is a simple, cross-platform todo list that allows users to manage their tasks efficiently on both iOS and Android.

## Technical Overview

- Platform: React Native
- State Management: Redux
- Persistent Storage: AsyncStorage
- Navigation: React Navigation

# Prerequisities
## Before you begin, ensure you have the following installed on your system:

- Node.js (Recommended version: 21.2.0)
- React Native CLI 
- Android Studio (for Android emulation) or Xcode (for iOS emulation)


## Steps to run

Clone this project to your local environment using the following command:

```
git clone https://github.com/timeflowing/ToDoApp.git
```
# Install Dependencies
Navigate to the project directory and install the necessary packages:

```
cd ToDoApp
npm install
cd ios
pod install
cd ..
```

# Running the App
To start the app on your chosen platform, execute one of the following commands:

iOS:
```
npx react-native run-ios
```
Android:
```
npx react-native run-android
```
# Troubleshooting

Should you encounter any issues, please do not hesitate to contact me via email at vojtech.tomasek@icloud.com.

## Features and Functionality

- Login Screen: Simple authentication with hardcoded credentials.
- Task List Screen: Displays all tasks with options to add, delete, and mark tasks as completed.
- Add Task Screen: Allows users to create new tasks, which are persisted between sessions.

# Considerations and Enhancements

- Authentication: Implemented with static credentials for demonstration purposes. For production, integrating with a secure backend service is recommended.
- Error Handling: A comprehensive approach would include more user feedback and error logging.
- UI/UX: Focused on functionality for this assignment. Future iterations could include enhanced visual design and user experience improvement.

# General Edge Cases
- Network Issues on Data Sync: If app syncs data with a backend, handling network issues is important.
    Suggestion: Implement retries for network requests and provide user feedback about the network status.
- Concurrency Issues: If the app allows for multi-device use with the same user account, handling concurrent edits can be tricky.
    Suggestion: Implement a conflict resolution strategy on the backend and update the UI to reflect the latest state.
- Accessibility: Ensure the app is usable for everyone, including people with disabilities.
    Suggestion: Test with screen readers, ensure adequate color contrast, and make interactive elements large enough for easy interaction.

# Conclusion

Time spent on this project: 5:30h ![image](https://github.com/timeflowing/ToDoApp/assets/56201239/79b90760-8cb3-42e4-8210-805c7f472b3f)


I hope this project meets your expectations and demonstrates my skills in React Native development. I look forward to discussing this project and any potential improvements or questions you might have.

Best regards,

Vojtěch Tomášek
