var tracks = ['6hzWWZjqHcoI2KIWpldo9v', '3Y4rUyw7XBCK6hGHCOt6rp','5WoBAyXaOnKEfvsZocrPeT', '55mvtucws4Mnro27744t9X?si=3849016cc3f042e4', '7kRKlFCFLAUwt43HWtauhX', '7a8GawTVgHZvBLQOh46he7',
'4dj1qglNo2j45K8z2sDFEY', '6FfLg6FFqhCsrFOaHIGkg0', '44CZRkOxv7UItaAUmh8PgN', '7lPjS6Yd4lRk4BsboDsm1H', '5G1Xj9wn0TZRf7TSbiIY8M', '0lO5zEKJ60lvz8X192p3WK', '3REELyDyt5SPKX2387Zubv',
 '5QTxFnGygVM4jFQiBovmRo', '4d9RTWdrFLVAGhdzvqxkwn', '15EPc80XuFrb2LmOzGjuRg', '2jiPHbFX5XM8TjaTfYJ0eo']
function getRandomTrack() {
    return "https://open.spotify.com/embed/track/" + tracks[Math.floor(Math.random() * tracks.length)];
}










