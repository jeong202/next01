import styles from './page.module.css'
import { connectDB } from "@/util/database.js"
import Link from 'next/link';

export default async function List() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <div className={styles.listWrap}>
            {result.map((list, key) => (
                <div className={styles.listItem} key={key}>
                    <Link href={`/detail/${list._id}`}>
                        <h4>{list.title}</h4>
                        <p>{list.content}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}