## Project Scope

### Team Learning Goals





Learn more about different backend technologies
Learn to integrate client and server code 
Strive to build efficient endpoints
Learn to design and implement a web API (following the Bezos’s Dictum)
Auto testing frameworks/pipelines
Applying the latest infosec techniques to ensure privacy

Our team came to the consensus of these goals by first communicating about our strengths, 
weaknesses, previous experiences with building software and what we wanted to gain from
this project. We decided the final project focus by going through the Ehealth app use
cases together and discussing about all the areas of the application and how they fit with
our learning goals. 


### Project Focus

Our project will focus on building the endpoints to serve the following two principle APIs:
1. <ins> To support the clinician reporting user interface<\ins>
- Create web components that dynamically display a form from its SDC document description
- Save a structured report as a json object to be stored in a patient’s record
- Retrieve saved structured reports and display them
2. <ins> To support public health data administrator<\ins>
- Build routes to support public health data administrators with handling the SDC XML description of the structured reports\

We will also focus on building a structured EMR to store structured
clinician reports and externalize SDCTools service

### Omissions

Through triaging the use cases, we also considered which features
and areas of our application we will omit in order for the team to
benefit the most according to our learning goals. 

We plan to omit the following areas of the application:
- Sending PersistentFilledFormLocator as an email to Form Receivers 
- Sophisticated user interface and interactions
- Advanced query capabilities 


### Use cases

We triaged the use cases by considering our team learning goals and the
areas of the application we chose to focus on. Since our goals focus mainly
on building and testing endpoints and on designing a web API (and applying
Bezos’s Dictum), we plan to cover more use cases and focus particularly on
the SCDTools component, as it requires a well designed API. 



1. **Use cases for Actors:**

<ins>Actor Form Manager:</ins>
- Add new SDCForm for a DiagnosticProcedureID
- Delete a SDCForm
- Replace a SDCForm

<ins>Actor Form Filler:</ins>
- Search for SDCForm by DiagnosticProcedureID
- Create new SDCFormResponse with default answers
- Render SDCForm to be filled
- Enter SDCQuestion
  - Validate answers to be stored in SDCFormResponse
  - Enable dependent questions according to response to control questions 
- Save and securely store SDCFormResponse on server
- Find a saved SDCFormResponse for a given query 
- Delete SDCFormResponse (before persistent link)
- Edit SDCFormResponse (before persistent link)
- Generate PersistentFilledFormLocator

<ins>Actor Form Receiver:</ins>
- View a SDCFormResponse for a given PersistentFilledFormLocator
- View results for a given search   
  - E.g, List of SDCFormResponses for LungRADS Category 4A for female patients older than 65
  

  
  
  
2. **Use cases for SDCTools Service according to use cases for actors:**

<ins>Client interaction with SDCTools API to render an empty form:</ins>
- Get and return requested SDCForm model object to client
- List all questions and get default answer for each question
- Render each question and its dependencies (as required) 

<ins>Rendering view of filled out form (before edit):</ins>
- Get the SDCFormResponse to edit 
- Get the SDCForm and DiagnosticProcedureID corresponding to the response
- List all questions and answers for each question 

<ins>Editing a form:</ins>
- Render a filled out form
- Enter answer with field validation and propagating dependent questions as required

















