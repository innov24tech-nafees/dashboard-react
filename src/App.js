import React from "react";
import HomePage from './pages/home'
import { Helmet } from "react-helmet";
import Favicon from './img/logout.png';
import ToDoList from "./pages/ToDoList";
import { BrowserRouter, Router, Route, Switch, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Dashboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@600&family=DM+Sans:opsz,wght@9..40,600&family=Karla:wght@700&family=Nunito:wght@600&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/src/css/icons.min.css" type="text/css" />

        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/morris.js/0.5.1/morris.css"
        />

        <link rel="stylesheet" href="../src/css/input.css" />

        <link rel="shortcut icon" href={Favicon} />

      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/todolist" element={< ToDoList />} />
        </Routes>
      </BrowserRouter>




      {/* < ToDoList /> */}


    </div>
  );
}

export default App;