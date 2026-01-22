// Firebase config (YOUR VALUES)
const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_AUTH_DOMAIN",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_STORAGE_BUCKET",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

// Init Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Wait until page loads
window.onload = () => {
  const chatBox = document.getElementById("chat-messages");
  const chatInput = document.getElementById("chat-input");
  const sendBtn = document.getElementById("send-btn");

  // SEND MESSAGE
  sendBtn.onclick = () => {
    const text = chatInput.value.trim();
    if (!text) return;

    db.collection("communityChat").add({
      text,
      time: firebase.firestore.FieldValue.serverTimestamp()
    });

    chatInput.value = "";
  };

  // RECEIVE MESSAGES
  db.collection("communityChat")
    .orderBy("time")
    .onSnapshot(snapshot => {
      chatBox.innerHTML = "";
      snapshot.forEach(doc => {
        const div = document.createElement("div");
        div.className = "chat-message";
        div.textContent = doc.data().text;
        chatBox.appendChild(div);
      });
    });
};
