## Stack
ReactJS for client components, NodeJS for backend APIs, MongoDB for database

### Client components
All client components will be rendered using ReactJS:
- Login Page: simple login interface with username/password inputs
- Form Receiver Page: Textboxes to search for a filled form by PatientID,ProcedureID. Can display the filled form.
- Form Manager Page: Table displays list of forms available; each row represents a form, and has buttons for view, delete and update.
- Form Filler Page: Searchable dropdown list shows list of forms by procedure ID. Selecting a form from that list loads and displays the empty SDC form. Fields are validated when the button for submitting a filled report is pressed.

The user must login using the Login Page; a user takes on one of the following roles: Form receiver, form manager, or form filler. Once the user logs in, they will be redirected to the corresponding web app. 

### Server components

Each client component above will make HTTP requests to their corresponding web services (NodeJS) below. Each service provides their own set of web API’s that the client can call:
- Login Service
- Form Receiver Service
- Form Manager Service
- Form Filler Service

The path for each web api follows the pattern:  /serviceName/apiName\
Ex. for the ‘authenticate’ API from the Login service: /login/authenticate\
View Api.md for details on the individual web APIs
