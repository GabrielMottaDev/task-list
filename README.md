# Real-Time Synced Task List

This is a real-time synchronized task list application built with **ReactJS** and **Firebase**.
It allows users to create, edit, reorder, and delete tasks with real-time updates across all connected devices.
The UI is intuitive, and users can mark tasks as complete or incomplete.
The app is perfect for collaborative to-do lists or personal task management.
### Demo page: [https://task-list.gabrielmotta.dev/](https://task-list.gabrielmotta.dev/)

## Features

- **Real-Time Synchronization:** Changes are instantly reflected across all devices connected to the same Firebase instance.
- **Drag-and-Drop Reordering:** Easily reorder tasks by dragging and dropping.
- **Task Management:** Create, edit, and delete tasks seamlessly.
- **Mark Tasks as Done:** Simple checkbox to mark tasks as completed.
- **Responsive Design:** The UI adapts to different screen sizes, making it usable on mobile devices as well.
- **Firebase Backend:** Utilizes Firebase for real-time data handling and storage.

## Getting Started

### Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it [here](https://nodejs.org/).
- **Firebase Account:** Set up a Firebase project to get your configuration details.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/GabrielMottaDev/task-list.git
    cd task-list
    ```

2. Install dependencies:
    
    ```bash
    npm install
    ```
    Or with yarn:
    ```bash
    yarn install
    ```

3. Configure Firebase:

    - Modify `src/firebase.js`
    - Change to your configuration details:

    ```js
    const firebaseConfig = {
      apiKey: "your-api-key",
      authDomain: "your-auth-domain",
      databaseURL: "your-database-url",
      projectId: "your-project-id",
      storageBucket: "your-storage-bucket",
      messagingSenderId: "your-messaging-sender-id",
      appId: "your-app-id"
    };
    ```

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run eject`

**Note:** This is a one-way operation. Once you `eject`, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

### Firebase Setup

To get started with Firebase, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Set up Firestore for database usage.
4. Obtain the Firebase configuration and add it to your `src/firebase.js` file as mentioned above.

## Learn More

You can learn more about React in the [React documentation](https://reactjs.org/).

For Firebase documentation, visit the [Firebase Documentation](https://firebase.google.com/docs).

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
