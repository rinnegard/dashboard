import PostItem from "./components/PostItem";

const posts = [
    {
        id: 1,
        title: "Post 1",
        body: "This is post 1",
    },
    {
        id: 2,
        title: "Post 2",
        body: "This is post 2",
    },
    {
        id: 3,
        title: "Post 3",
        body: "This is post 3",
    },
];

export default async function Home() {
    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Home</h1>
            <p>Please login to use the dashboard</p>
            <ul className="flex flex-row gap-3 justify-center mt-4">
                {posts.map((post) => {
                    return <PostItem key={post.id} {...post}></PostItem>;
                })}
            </ul>
        </div>
    );
}
