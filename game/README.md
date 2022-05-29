## Project Build front end
ein npm mit der Version 8.5.0 (version hier ist wichtig) muss auf die Maschiene lauffähig sein
zu den orner Game navigieren 
dann der Befehl: npm i   
dann : npm start

der App wird auf den localhost 3000 gestartet
um den Intergame seite anzusehen
http://localhost:3000/intergame
um den dashboard anzusehen
http://localhost:3000/dashboard
Klicken Sie auf den Challenge Team Up, um einen Challenge Vorlage anzusehen

## Project Build back-end
Um die notwendigen Packete runterzuladen müssen Sie zuerst in den Ornder Server gehen
- "cd server"
dann mit npm die Packete laden
- "npm i"
anschließend mit dem node Befehl, die Verbindung schaffen
- "node server.js"
das backend läuft lokal auf dem Port 4000, da aber eine Verbindung mit dem Frontend besteht, geht es nur um den Port 3000
- "http://localhost:3000"
Um die Funktionalität zu testen, müssen Sie zum 
 http://localhost:3000/intergame wechseln und dann anschließend ein neues Spiel starten "New Game" wenn Sie dann auf den Button drücken, erscheint in allen anderen Tabs, also alle anderen Clients eine Nachricht

## Projekt Database
MongoDB - The database shell (uses interactive javascript).
Sign in with Mongo DB Atlas (Cloud hosting Server). 
Follow the instructions that are given from the public MongoDB Atlas Cloud. Connect the cluster by klicking ,,connect‘‘ button in database history. Copy the provided link by ,,connect your application‘‘ and paste it in your terminal in the application, after you downloaded the MongoShell, if it’s not done yet.
After you run MongoShell (interactive mongo Version with Cloud based Atlas) on your application, you can now create or drop collections, documents, etc… with mongos user frindly syntax.
Now you good to go with your free database.

### `npm start`

Runs the app in the development mode.\
Open [http://localho st:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
