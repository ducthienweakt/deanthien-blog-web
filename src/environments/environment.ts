export const environment = {
    production: false,
    appUrl: 'http://localhost:4200',
    apiUrl: 'http://localhost:1337/api',
    botThoApi: 'http://localhost:4200/botApi',
    stravaConfig: {
      "access_token"  : '',
      "client_id"     : "108204",
      "client_secret" : "b9b073e3cb73323f7d47e6ab9783bbeea366839e",
      "redirect_uri"  : "http://localhost:4200/exchange_token",
      "subscriptions_callback_url":"https://chaydi-524abe5b3fd9.herokuapp.com/api/strava-webhook",
      "apiUrl": "https://www.strava.com/api/v3"
    },
    starvaClientId:'108204',
    starvaClientSecret:'b9b073e3cb73323f7d47e6ab9783bbeea366839e'
}
