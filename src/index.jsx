import React from "react";

import firebase from "firebase";
import { firebaseConfig } from "./infra/config/firebaseConfig";

import Routes from "./application/routes";

function Main() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  return <Routes />;
}

export default Main;
