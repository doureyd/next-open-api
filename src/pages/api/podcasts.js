import { searchPodcasts } from '@/libs/spotify'

export default async function handler(req, res) {
  const { q = '', offset = 0, limit = 10 } = req.query
  const response = await searchPodcasts({ q, offset, limit })

  return res.status(200).json(response)
}
