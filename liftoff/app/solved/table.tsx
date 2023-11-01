import {
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text
  } from '@tremor/react';
  
  interface Question {
    id: number;
    Question: string;
    AskedBy: string;
  }
  
  export default function UsersTable({ users }: { users: Question[] }) {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableHeaderCell>Question</TableHeaderCell>
            <TableHeaderCell>AskedBy</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.Question}</TableCell>
              <TableCell>
                <Text>{user.AskedBy}</Text>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
  