# Angular 2: Monitoring Application.

## Author

[Ram Singh](ram.c.singh@capgemini.com)

## License

This project is licensed under the ISC license. See the [LICENSE](LICENSE) file for more info.

# Info

This application using webpack for compiling and building and still underdevelopment.  
App is depend on nodejs rest service to fetch data. first you need to setup  `ApiMonitoring` server app.  
available at path https://stash.capgeminidigital.com/projects/RMG/repos/api-monitoring-app/ApiMonitoring  
execute npm install

then run command `node index.js`  

this will host the service at port 8080.  


# Dev Setup
 1-git clone directory from  path.  
 https://stash.capgeminidigital.com/projects/RMG/repos/api-monitoring-app/MonitoringApp  
 2-open command line and navigate to `MonitoringAPP` folder  

 # In terminal as administrator
  npm install -g node-pre-gyp 
  npm install -g rxjs@^5.0.1 then 
  npm install -g @angular/cli 
   
 3-execute 'npm install' command  
 4- after npm packages installed execute 'npm start' command.  

 This will create a virtual "dist" folder that will be livereloaded at your localhost address.  
 
 5- open browser and put url `http://localhost:3000`.

#Prod Setup
 execute 'npm run build'.  
 This will create a physical "build" folder version that can be sent to a webserver.  
 The dist folder is 7.8MB but only 234KB is actually required to load the page in a web browser.