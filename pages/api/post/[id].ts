import { NextApiRequest, NextApiResponse } from "next";

const post = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query
  res.status(200).json({ message: 'OK', error: false, id})
}

export default post