'use client';

import { CodeRainBackground } from '@/components/layout/code-rain-background';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCollection, useFirebase, useMemoFirebase, useUser } from '@/firebase';
import { collection, orderBy, query } from 'firebase/firestore';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

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

interface JobApplication {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  role: string;
  reason: string;
  resumeFileName: string;
  submittedAt: {
    seconds: number;
    nanoseconds: number;
  } | null;
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

function ApplicationsTable() {
  const { firestore } = useFirebase();

  const applicationsQuery = useMemoFirebase(
    () =>
      firestore
        ? query(collection(firestore, 'jobApplications'), orderBy('submittedAt', 'desc'))
        : null,
    [firestore]
  );

  const { data: applications, isLoading, error } = useCollection<JobApplication>(applicationsQuery);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-16">
        <Loader2 className="size-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive p-8 text-center">Error loading applications: {error.message}</p>;
  }

  if (!applications || applications.length === 0) {
    return <p className="p-8 text-center text-white/70">No applications yet.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Submitted</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Reason</TableHead>
            <TableHead>Resume</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell className="text-white/80">
                {app.submittedAt ? new Date(app.submittedAt.seconds * 1000).toLocaleString() : 'N/A'}
              </TableCell>
              <TableCell className="font-medium">{app.name}</TableCell>
              <TableCell>{app.email}</TableCell>
              <TableCell>{app.role}</TableCell>
              <TableCell className="max-w-xs truncate">{app.reason}</TableCell>
              <TableCell>{app.resumeFileName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}


export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || !user) {
    return (
       <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white flex items-center justify-center">
        <CodeRainBackground />
        <Loader2 className="size-24 text-primary animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl px-6 shadow-lg">
            <Link href="/" className="flex items-center">
                <Image src="/assets/logo.png" alt="Linkific Logo" width={140} height={40} className="object-contain" />
            </Link>
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <Button asChild variant="outline" className="bg-white/10 hover:bg-white/20">
                <Link href="/">Logout</Link>
            </Button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-16">
         <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Contact Messages</CardTitle>
              <CardDescription>Here are the messages submitted through your website.</CardDescription>
            </CardHeader>
            <CardContent>
                <MessagesTable />
            </CardContent>
         </Card>
         <Card className="bg-white/5 backdrop-blur-xl border border-white/10">
            <CardHeader>
              <CardTitle className="text-3xl font-bold">Job Applications</CardTitle>
              <CardDescription>Here are the applications submitted through your careers page.</CardDescription>
            </CardHeader>
            <CardContent>
                <ApplicationsTable />
            </CardContent>
         </Card>
      </main>
    </div>
  );
}
