// Firebase configuration (PASTE YOUR OWN VALUES HERE)
const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = firebase.firestore();

// ---------------- CHAT LOGIC ----------------

// HTML elements
const chatBox = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Send message
sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const message = chatInput.value.trim();
  if (message === "") return;

  db.collection("communityChat").add({
    text: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });

  chatInput.value = "";
}

// Receive messages (real-time)
db.collection("communityChat")
  .orderBy("timestamp")
  .onSnapshot(snapshot => {
    chatBox.innerHTML = "";
    snapshot.forEach(doc => {
      const msg = document.createElement("div");
      msg.className = "chat-message";
      msg.textContent = doc.data().text;
      chatBox.appendChild(msg);
    });
  });

const firebaseConfig = {
  apiKey: "PASTE_YOUR_API_KEY",
  authDomain: "PASTE_YOUR_AUTH_DOMAIN",
  projectId: "PASTE_YOUR_PROJECT_ID",
  storageBucket: "PASTE_YOUR_STORAGE_BUCKET",
  messagingSenderId: "PASTE_YOUR_SENDER_ID",
  appId: "PASTE_YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Firestore Database
const db = firebase.firestore();

// ---------------- CHAT LOGIC ----------------

// HTML elements
const chatBox = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Send message
sendBtn.addEventListener("click", sendMessage);

function sendMessage() {
  const message = chatInput.value.trim();
  if (message === "") return;

  db.collection("communityChat").add({
    text: message,
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  });

  chatInput.value = "";
}

// Receive messages (real-time)
db.collection("communityChat")
  .orderBy("timestamp")
  .onSnapshot(snapshot => {
    chatBox.innerHTML = "";
    snapshot.forEach(doc => {
      const msg = document.createElement("div");
      msg.className = "chat-message";
      msg.textContent = doc.data().text;
      chatBox.appendChild(msg);
    });
  });
