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
npm start
```

### 📄 License

This repository is licensed under the [MIT License](LICENSE).

### ♦️ About Mercury

This repository contains the code for a package from the Mercury infrastructure.
If you want to know more about Mercury check out the [Mercury Organization](https://github.com/Mercury-Smartstores).
