# Socket.IO-Demo
- Complete: Sending contents from frontend to backend. 
- This demo-app (a basic chat application) is used to study Socket.IO


### NOTE
1. A network socket is an internal endpoint for sending or receiving data at a single node in a computer network.
2. Socket.IO is composed of two parts:
- A server that integrates with (or mounts on) the Node.JS HTTP Server: socket.io
- A client library that loads on the browser side: socket.io-client
3. The main idea behind Socket.IO is that you can send and receive any events you want, with any data you want. Any objects that can be encoded as JSON will do, and binary data is supported too.
4. `.on` : This is listener.

   `.emit` : This invokes and trigger the event.

### How To Use
1. Download or clone to local machine
2. Navigate into the folder (in the command line/ terminal)
3. Ensure `Node.JS` is installed
4. Run `node index.js` to start
5. In browser, type the specific URL defined in the `index.js`
