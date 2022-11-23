import React, { useEffect } from "react";

import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

useEffect(() => {
  createUserWithEmailAndPassword(auth, "vania@email.com", "senha")
    .then((dadosDoUsuario) => {
      console.log(dadosDoUsuario);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
