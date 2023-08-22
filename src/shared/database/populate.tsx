import { db } from "./DbContext";
export async function populate() {
  await db.profiles.bulkAdd([
    {
      id: 1,
      firstName: "kim",
      lastName: "avillanosa",
    },
    {
      id: 2,
      firstName: "mark",
      lastName: "peralta",
    },
    {
      id: 3,
      firstName: "elmer",
      lastName: "robles",
    },
  ]);
  await db.tranx.bulkAdd([
    {
      id: 1,
      telNo: "+63 923 123 123 0",
      tranx_code: "ABC-1-2-ABC",
      tranx_date: "08/08/2023",
      tranx_timestamp: "05:25:29 PM",
      receiver_name: "Mark Peralta",
      sender_name: "Elmer Robles",
      amount_humanized: "One Thousand Pesos Only",
      fee_breakdown: "Less: Handling Fee=100.00, Admin Fee=100.0",
      fee_total: "1200",
      amount_transferred: "1000",
      code_1: "Z15",
      code_2: "R03",
    },

    {
      id: 2,
      telNo: "+63 923 123 123 0",
      tranx_code: "ABC-1-2-ABC",
      tranx_date: "08/08/2023",
      tranx_timestamp: "05:25:29 PM",
      receiver_name: "Mark Peralta",
      sender_name: "John Doe",
      amount_humanized: "One Thousand Pesos Only",
      fee_breakdown: "Less: Handling Fee=100.00, Admin Fee=100.0",
      fee_total: "1200",
      amount_transferred: "1000",
      code_1: "Z15",
      code_2: "R03",
    },
    {
      telNo: "1234567890",
      tranx_code: "TX123",
      tranx_date: "2023-08-22",
      tranx_timestamp: "2023-08-22T12:34:56",
      receiver_name: "John Doe",
      sender_name: "Jane Smith",
      amount_humanized: "$100",
      fee_breakdown: "Fee details",
      fee_total: "$5",
      amount_transferred: "$95",
      code_1: "Code1",
      code_2: "Code2",
    },
  ]);
}
