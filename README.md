# BUZZ Chat 

Welcome to the BUZZ Chat App! This repository contains the frontend and backend code for a real-time chat application built as part of the CSN-341 Network Project.

## Project Overview
BUZZ Chat is a real-time chat application where users can communicate through individual messages or in various chatrooms. This project is designed to explore network programming concepts and provide a collaborative, interactive platform.

---

## Table of Contents
- [Clone the Repository](#clone-the-repository)
- [Backend Documentation](#backend-documentation)
- [Frontend Documentation](#frontend-documentation)

---

## Clone the Repository
To get started, clone this repository to your local machine:

```bash
git clone https://github.com/DRDiv/BUZZ-CSN-341-Network-Project.git
```

---

## Backend Documentation

### Prerequisites
Ensure that you have the following installed:
- C++ compiler and environment


**Navigate to the Backend Directory**

```bash
    cd ./BUZZ-CSN-341-Network-Project/Backend
```

### Usage

1. **Run the Server**
   - Navigate to the `ServerSide` directory and then to the `debug` folder:
     ```bash
     cd ServerSide/debug
     ```
     
   - Run the server executable:
     ```bash
     ./Server
     ```

2. **Run the Client(s)**
   - For each client instance, navigate to the `ClientSide` directory and then to the `debug` folder:
     ```bash
     cd ../../ClientSide/debug
     ```

   - Run the client executable (repeat for as many different clients as needed):
     ```bash
     ./Client
     ```

---

## Frontend Documentation


### Prerequisites
Ensure that you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)

## Getting Started

**Navigate to the Frontend Directory**
    
```bash
    cd ./BUZZ-CSN-341-Network-Project/Frontend/chat-app
```

### Installation





1. **Install Frontend Dependencies**
    ```bash
    npm install
    npm install react-icons
    ```

2. **Navigate to the Chat Server Directory**
    ```bash
    cd ../chat-server
    ```

3. **Install Chat Server Dependencies**
    ```bash
    npm install cors
    ```

### Usage

1. **Start the Chat Server**
   - Navigate to the chat-server directory if you're not already there:
     ```bash
     cd ../chat-server
     ```
     
   - Start the chat server:
     ```bash
     node server.js
     ```

2. **Start the Frontend Application**
   - Open a new terminal window or tab, and navigate back to the chat-app folder:
     ```bash
     cd ../chat-app
     ```
     
   - Run the frontend application:
     ```bash
     npm start
     ```

3. **Open the Application**
   - Visit `http://localhost:3000` in your browser to access the chat application.

---

Now you're all set to use BUZZ Chat locally! Happy chatting!
