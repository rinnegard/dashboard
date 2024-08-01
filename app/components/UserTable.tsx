import { Role } from "@prisma/client";
import { updateUserRoleAction } from "../actions/updateUserRole";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

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
        <Table className="w-full border-collapse my-4">
            <TableHeader>
                <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    {isAdmin && <TableHead>Action</TableHead>}
                </TableRow>
            </TableHeader>
            <TableBody>
                {users.map((user) => {
                    return (
                        <TableRow key={user.id}>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.role}</TableCell>
                            {isAdmin && (
                                <TableCell>
                                    <form
                                        action={updateUserRoleAction}
                                        className="flex flex-row"
                                    >
                                        <input
                                            type="hidden"
                                            name="userId"
                                            value={user.id}
                                        />
                                        <Select
                                            name="newRole"
                                            defaultValue={user.role}
                                        >
                                            <SelectTrigger>
                                                <SelectValue></SelectValue>
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value={Role.USER}>
                                                    User
                                                </SelectItem>
                                                <SelectItem value={Role.ADMIN}>
                                                    Admin
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <Button type="submit">Submit</Button>
                                    </form>
                                </TableCell>
                            )}
                        </TableRow>
                    );
                })}
            </TableBody>
        </Table>
    );
}
