curl -X POST -H "Authorization: key=" -H "Content-Type: application/json" -d '{
  "to": "",
  "notification": {
    "title": "FCM Message Angular",
    "body": "This is an FCM Message",
    "icon": "assets/icons/android-chrome-192x192.png"
  }
}' https://fcm.googleapis.com/fcm/send