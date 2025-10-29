'use client';

import { CodeRainBackground } from '@/components/layout/code-rain-background';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCollection, useFirebase, useMemoFirebase } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  sentAt: {
    seconds: number;
    nanoseconds: number;
  } | null;
  page: 'home' | 'contact';
}

function MessagesTable() {
  const { firestore } = useFirebase();
  
  const messagesQuery = useMemoFirebase(() => 
    firestore ? query(collection(firestore, 'contactMessages'), orderBy('sentAt', 'desc')) : null,
    [firestore]
  );
  
  const { data: messages, isLoading, error } = useCollection<ContactMessage>(messagesQuery);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-16">
        <Loader2 className="size-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive p-8 text-center">Error loading messages: {error.message}</p>;
  }

  if (!messages || messages.length === 0) {
    return <p className="p-8 text-center text-white/70">No messages yet.</p>;
  }

  return (
     <div className="overflow-x-auto">
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Received</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Page</TableHead>
                    <TableHead>Message</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {messages.map((msg) => (
                    <TableRow key={msg.id}>
                        <TableCell className="text-white/80">
                            {msg.sentAt ? new Date(msg.sentAt.seconds * 1000).toLocaleString() : 'N/A'}
                        </TableCell>
                        <TableCell className="font-medium">{msg.name}</TableCell>
                        <TableCell>{msg.email}</TableCell>
                        <TableCell className="capitalize">{msg.page}</TableCell>
                        <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}


export default function DashboardPage() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 shadow-lg">
            <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
                <Link href="/" className="text-white text-xl font-bold">
                    Linkific
                </Link>
            </div>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href="/">Logout</Link>
            </Button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
         <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Contact Messages</CardTitle>
              <CardDescription>Here are the messages submitted through your website.</CardDescription>
            </CardHeader>
            <CardContent>
                <MessagesTable />
            </CardContent>
         </Card>
      </main>
    </div>
  );
}
