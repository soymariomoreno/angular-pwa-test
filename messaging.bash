curl -X POST -H "Authorization: key=AAAAjxS-IB0:APA91bHF36bmW_DDzD37e9mXF5ZhJtf6iCtbDj9FFF7Wfi5vbS98T2fHDQzMxG9r7e6tqCpq_vtEqbR9bGY_xgJVeW2o4AkuhpDk0qUMFCKJXCueofv3slFhNKSNJtZJgfC8Pt7LcEAY" -H "Content-Type: application/json" -d '{
  "to": "co4_EfXxvJo:APA91bG-4PNtHiS46KqZ8Ir_OKkZFTWtTmRrd5b0ls2H9B49XjnW7clJHZxNlY4d1zrkAtWGiSFZJXB3QTvyG01xYOFnhRLTQrqFyzE6jHQHR0A0YfssIZLkb6fhXgk3XB_gYRTIFOPe",
  "notification": {
    "title": "FCM Message",
    "body": "This is an FCM Message to vue",
    "icon": "./img/icons/android-chrome-192x192.png",
    "click_action":"https://pwa-example-96211.firebaseapp.com/home"
  }
}' https://fcm.googleapis.com/fcm/send