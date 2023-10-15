import { NextApiRequest, NextApiResponse } from "next";

const posts = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: 'OK', error: false})
}

export default posts