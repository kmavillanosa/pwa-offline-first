// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { db } from "@/shared/database/DbContext";
import { useLiveQuery } from "dexie-react-hooks";
import { useState, useEffect } from "react";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<UI.PageRoute[] | undefined>
) {
  const routes: UI.PageRoute[] = [
    {
      name: "Home",
      route: "/root",
    },
    {
      name: "Share Data",
      route: "/cache-request",
    },
    {
      name: "Printing",
      route: "/printing",
    },
  ];

  res.status(200).json(routes);
}
