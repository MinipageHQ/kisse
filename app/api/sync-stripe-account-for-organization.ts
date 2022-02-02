// app/api/process-csv
import db from "db"
import { Queue } from "quirrel/blitz"

export default Queue("api/process-csv", async (uploadId: number) => {
  const upload = await db.uplodadedCsv.findUnique({
    where: { id: uploadId },
  })

  await doYourProcessing(upload.data)

  await db.uplodadedCsv.delete({ where: { id: uploadId } })
})
