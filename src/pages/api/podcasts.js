const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`
const SEARCH_ENDPOINT = `https://api.spotify.com/v1/search`

const getAccessToken = async () => {
  const params = new URLSearchParams({
    grant_type: 'client_credentials',
  })

  const response = await fetch(TOKEN_ENDPOINT, {
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

  return fetch(`${SEARCH_ENDPOINT}?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export default async function handler(req, res) {
  const { q = '', offset = 0, limit = 10 } = req.query
  const response = await searchPodcasts({ q, offset, limit })
  const data = await response.json()

  return res.status(200).json(data)
}
