import React from "react"


const Posts = ({ posts, loading }) => {
    if (loading) {
        return (
            <h2>loading...</h2>
        )

    }
    return (
        <div>
            <ul className="list-group mb-4">
                {posts.map(items =>
                    <li key={items.id} className="list-group-item">
                        {items.title}
                    </li>


                )}

            </ul>
        </div >
    )
}


export default Posts