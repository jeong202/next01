import { connectDB } from "@/util/database.js"

export default async function Home() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result.map(post => console.log(`Title: ${post.title}, Content: ${post.content}`));


  return (
    < div >

    </div>
  )
}
