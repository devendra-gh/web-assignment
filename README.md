# Client

## Available Scripts

In the project directory, you can run:

### `Installation`
Node 18 >=


### `yarn`
Runs to download all dependencies

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Available Features

### `Signup`

User can create new account with the help of email, password, first name and last name

### `Login`

User can login with help of registered email id and password

### `Dashboard`

User can navigate to Dashboard and see all the user information

### `Push Notification`

Implemented push notification with help of firebase
sending notification Process:
- Login firebase console [https://console.firebase.google.com/project/web-app-8c036/notification/compose]
- Compose notification
- Add Token
- Send message

### `Multiple Regions`

Implemented localization of USA, UAE, France and Germany

### `Language direction`

Implemented direction bases on selected regions

### `Theme Change`

Implemented functionality to change theme and mode also

### `Unit Test coverage`

Implemented Test coverage 

<br/>
<br/>

# Security

## `Implemented JWT`

Implemented JWT in both Backend and Frontend side

<br/>
<br/>

# Server

## `Mock Live API server with JWT`

Implemented mock api server with the help of node.js, server endpoint [http://localhost:5050]

### `Signup`
[http://localhost:5050/api/auth/register] \
payload { \
&emsp; email: "", \
&emsp; password: "", \
&emsp; firstname: "", \
&emsp; lastname: "" \
}

### `Login`
[http://localhost:5050/api/auth/login] \
payload { \
&emsp; email: "", \
&emsp; password: "", \
}
