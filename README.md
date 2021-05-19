# Mercury Client Manager

This package contains the code to create a Node.js server with Express for the communication with the customers of Mercury Smart Store. It will open a TCP/IP communication with [Mercury iOS App](https://github.com/Mercury-Smartstores/Mercury-iOS-App) and exchange messages by using [Socket.IO](https://socket.io/). Those messages will introduce updates in the shopping cart and inform about the situation of the customer: entering the shop or exiting the shop.

### 🔧 Installation

In order to install the dependencies for Socket.IO and Express, just move to the package and execute
```
npm install
```

### 📦 Deploying 

You can deploy the server (at localhost:3000, although you can change the port and host) by running
```
node server.js
```

### 📄 License 

This repository is licensed under the [MIT License](LICENSE).

### ♦️ About Mercury

TODO: Explain what is Mercury and link to other resources
