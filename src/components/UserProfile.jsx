import React, { useState, useRef } from "react";
import { auth, firestore, storage } from "../firebase";

export const UserProfile = () => {
  const [displayName, setDisplayName] = useState("");
  const imageInput = useRef(null);

  const userRef = () => firestore.doc(`users/${auth.currentUser.uid}`);

  const file = () => (imageInput.current ? imageInput.current.files[0] : null);

  const handleChange = (event) => {
    setDisplayName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (displayName) {
      userRef().update({ displayName });
    }

    if (file()) {
      storage
        .ref()
        .child("user-profiles")
        .child(auth.currentUser.uid)
        .child(file().name)
        .put(file())
        .then((response) => response.ref.getDownloadURL())
        .then((photoURL) => {
          userRef().update({ photoURL });
        });
    }
  };

  return (
    <section className="UserProfile">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          defaultValue={displayName}
          name="displayName"
          placeholder="Display Name"
          onChange={handleChange}
        />
        <input type="file" ref={(ref) => (imageInput.current = ref)} />
        <input className="update" type="submit" />
      </form>
    </section>
  );
};
