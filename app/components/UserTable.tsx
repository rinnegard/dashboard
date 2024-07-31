import { Role } from "@prisma/client";

type User = {
    id: string;
    name: string | null;
    email: string | null;
    role: Role;
};

interface UserTableProps {
    users: User[];
    isAdmin: boolean;
}

export default function UserTable({ users, isAdmin }: UserTableProps) {
    return (
        <table className="w-full border-collapse my-4">
            <thead>
                <tr>
                    <th className="border p2">Name</th>
                    <th className="border p2">Email</th>
                    <th className="border p2">Role</th>
                    {isAdmin && <th className="border p2">Action</th>}
                </tr>
            </thead>
            <tbody>
                {users.map((user) => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>
                                <button className="bg-blue-600 text-white">
                                    test
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}
