# Angular - Socket Chat App

[Author's repo](https://github.com/start-angular/angular2-node-socket-io-chat-app)

## File Structure

Here's an overview of how the files are laid out in this project:

```
angular2-node-socket-io-chat-app/
|
├── client/                         	* Where our Angular2 client code is stored
│   ├── chat-component/               * All of our chat-component files are here
│   │   ├── chat.component.ts       	* Chat Component
│   │   ├── chat.component.html     	* chat Component HTML
│   │   ├── chat.module.ts      		* chat module 
│   │   ├── chat.route.ts      		* chat component routes
│   │   └── index.ts       		    * index file for chat Component
|   |   
│   ├── nickName-component/           * All of our TypeScript is here
|   |	|
│   │   ├── nickName.component.ts 	* nickName Component
│   │   ├── nickName.component.html   * nickName Component HTML
│   │   ├── nickName.module.ts 		* nickName module
│   │   ├── nickName.route.ts 	    * nickName component routes
│   │   └── index.ts 					* index file for nickName Component
|   |   
│   ├── service/ 		      	      * service for all components
|   |	|
│   │   └── global.ts 		        * file with global attributes
|   |  
│   ├── app.component.html 			  * Home component HTML   
│   ├── app.component.ts 			  * Home component 
│   ├── app.module.ts                 * Aap Module  
│   ├── app.routing.ts                * App images  
│   └── main.ts            			  * Angular 2 Entry point  
|    
├── public/							* Stores app images and gif
|	|
│   ├── Chat-Page.png       		  * chat page image
│   ├── chat-app.gif       		      * chat app gif
│   ├── ChatPage-Description.png      * chat page description image
│   ├── Sequence-Diagram.png      	  * app sequence diagram image
│   └── Welcome-page.png			  * welcome page image
|   
├── server/             		        * Server side code (socket.io,express,node)
│   └── index.js       			      * Aap entry point
|
├── typings/                          * tsd managed typings
├── index.html                  	    * HTML entry point 
├── styles.css                   		* Contains app CSS
├── package.json                    	* Our javascript dependencies
├── README.md                       	* This file
├── systemjs.config.js                * syatemJS configuration file
├── tsconfig.js                 	    * Some hacks to get TypeScript tests
├── tslint.json                       * Configures our TypeScript linter
└── typings.json                      * Configures our TypeScript linter 
```
