// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

function generateShortGuid() {
  return "xxxxx-xxxx".replace(/[x]/g, function (c) {
    const r = Math.floor(Math.random() * 36);
    return r.toString(36);
  });
}

function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data.ColorGame | undefined>
) {
  let data: Data.ColorGame = {
    origin: "self",
    hash: generateShortGuid(),
    result: [
      generateRandomColor(),
      generateRandomColor(),
      generateRandomColor(),
    ],
  };

  res.status(200).json(data);
}
