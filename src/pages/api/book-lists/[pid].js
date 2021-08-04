import { getListData } from '@/libs/nytimes'

export default async function handler(req, res) {
  const { pid } = req.query
  const response = await getListData(pid)

  return res.status(200).json(response)
}
