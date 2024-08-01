type PostItemProps = {
    title: string;
    body: string;
};

export default function PostItem({ title, body }: PostItemProps) {
    return (
        <li className="border border-black p-2 rounded-2xl">
            <h1>{title}</h1>
            <p>{body}</p>
        </li>
    );
}
