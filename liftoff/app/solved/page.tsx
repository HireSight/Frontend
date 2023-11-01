"use client"
import { Card, Title, Text } from '@tremor/react';
import UsersTable from './table';

export const dynamic = 'force-dynamic';

export default async function IndexPage() {
    const users = [
        {
          "id": 1,
          "Question": "Tell something about yourself, Walk us through your resume",
          "AskedBy": "John"
        },
        {
          "id": 2,
          "Question": "Why should we hire you? Highlight a few of your skills",
          "AskedBy": "John"
        },
        {
          "id": 3,
          "Question": "Where Do You See Yourself Five Years From Now?",
          "AskedBy": "John"
        },
        {
          "id": 4,
          "Question": "Tell something about yourself, Walk us through your resume",
          "AskedBy": "Richard"
        },
        {
          "id": 5,
          "Question": "Why should we hire you? Highlight a few of your skills",
          "AskedBy": "Richard"
        },
        {
          "id": 6,
          "Question": "Where Do You See Yourself Five Years From Now?",
          "AskedBy": "Richard"
        },
        {
          "id": 7,
          "Question": "Tell something about yourself, Walk us through your resume",
          "AskedBy": "Sarah"
        },
        {
          "id": 8,
          "Question": "Why should we hire you? Highlight a few of your skills",
          "AskedBy": "Sarah"
        },
        {
          "id": 9,
          "Question": "Where Do You See Yourself Five Years From Now?",
          "AskedBy": "Sarah"
        }
      ]
      
  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Previous Questions Asked By you</Title>
      <Text>
        A list of Questions you have solved till .
      </Text>
      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
