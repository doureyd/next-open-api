const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const getAccessToken = async () => {
  const params = new URLSearchParams({
    grant_type: 'client_credentials',
  })

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })

  return response.json()
}

export const searchPodcasts = async (query) => {
  const { access_token } = await getAccessToken()
  const params = new URLSearchParams({
    market: 'FR',
    type: 'episode',
    ...query,
  })

  return fetch(`https://api.spotify.com/v1/search?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
