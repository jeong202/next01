export default function Write() {
    return (
        <div>
            <h4>글 작성하기</h4>
            <form action="/api/page" method="post">
                <button type="submit">작성하기</button>
            </form>
        </div>
    )
}