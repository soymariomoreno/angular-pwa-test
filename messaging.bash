curl -X POST -H "Authorization: key=AAAAjxS-IB0:APA91bHF36bmW_DDzD37e9mXF5ZhJtf6iCtbDj9FFF7Wfi5vbS98T2fHDQzMxG9r7e6tqCpq_vtEqbR9bGY_xgJVeW2o4AkuhpDk0qUMFCKJXCueofv3slFhNKSNJtZJgfC8Pt7LcEAY" -H "Content-Type: application/json" -d '{
  "to": "fMMJZ_5FrvQ:APA91bERMcVixscqYkHU2HN3eWcIwYM0AfvaFfOdBlHPCdypQYGRQBdeqF5vt11C5WZ6gfew1Q_Polqw-QKCIzBLEnWYD5DeAQhc8kLuRgHe32pDTQNrEwlnDsrVP6YYYXIzRwaMzo9L",
  "notification": {
    "title": "FCM Message Angular",
    "body": "This is an FCM Message",
    "icon": "assets/icons/android-chrome-192x192.png"
  }
}' https://fcm.googleapis.com/fcm/send