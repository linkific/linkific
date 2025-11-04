'use client';

import { CodeRainBackground } from '@/components/layout/code-rain-background';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useCollection, useFirebase, useMemoFirebase, useUser } from '@/firebase';
import { collection, orderBy, query, doc, deleteDoc } from 'firebase/firestore';
import { Eye, Loader2, Trash2, Download } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabase-client';


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
  full_name: string;
  email: string;
  contact: string;
  role: string;
  message: string;
  resume_url?: string;
  created_at: string;
}

function MessagesTable() {
  const { firestore } = useFirebase();
  const { toast } = useToast();
  
  const messagesQuery = useMemoFirebase(() => 
    firestore ? query(collection(firestore, 'contactMessages'), orderBy('sentAt', 'desc')) : null,
    [firestore]
  );
  
  const { data: messages, isLoading, error } = useCollection<ContactMessage>(messagesQuery);

  const handleDelete = async (id: string) => {
    if (!firestore) return;
    try {
      await deleteDoc(doc(firestore, "contactMessages", id));
      toast({
        title: "Success",
        description: "Message deleted successfully.",
      });
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: `Could not delete message: ${error.message}`,
      });
    }
  };

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
                    <TableHead>Message</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
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
                        <TableCell className="max-w-xs truncate">{msg.message}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex gap-2 justify-end">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button variant="ghost" size="icon"><Eye className="size-4" /></Button>
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Message from {msg.name}</DialogTitle>
                                  <DialogDescription>
                                    Sent on {msg.sentAt ? new Date(msg.sentAt.seconds * 1000).toLocaleString() : 'N/A'} from the {msg.page} page.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="py-4 space-y-2">
                                  <p><strong>Email:</strong> {msg.email}</p>
                                  <p className="text-white/80 bg-background/50 p-4 rounded-md whitespace-pre-wrap">{msg.message}</p>
                                </div>
                                <DialogFooter>
                                  <DialogClose asChild>
                                    <Button>Close</Button>
                                  </DialogClose>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="size-4" /></Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    This action cannot be undone. This will permanently delete the message from {msg.name}.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                                  <AlertDialogAction onClick={() => handleDelete(msg.id)}>Delete</AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>
  );
}

function ApplicationsTable() {
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [isUrlLoading, setIsUrlLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchApplications() {
      const { data, error } = await supabase
        .from('applicants')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching applications from Supabase:', error);
        setError(error.message);
        toast({
            variant: "destructive",
            title: "Error fetching applications",
            description: error.message,
        });
      } else {
        setApplications(data as JobApplication[]);
      }
      setIsLoading(false);
    }

    fetchApplications();
  }, [toast]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase
        .from('applicants')
        .delete()
        .match({ id: id });
    
    if (error) {
        toast({
            variant: "destructive",
            title: "Error deleting application",
            description: error.message,
        });
    } else {
        setApplications(applications.filter(app => app.id !== id));
        toast({
            title: "Success",
            description: "Application deleted successfully.",
        });
    }
  };

  const handleOpenDialog = async (resumePath: string | undefined) => {
    if (!resumePath) return;
    setIsUrlLoading(true);
    setSignedUrl(null);
    try {
      const { data, error } = await supabase
        .storage
        .from('Resume')
        .createSignedUrl(resumePath, 300); // URL valid for 5 minutes

      if (error) throw error;
      setSignedUrl(data.signedUrl);
    } catch (error: any) {
      console.error('Error creating signed URL:', error);
      toast({
        variant: "destructive",
        title: "Could not load resume",
        description: error.message,
      });
    } finally {
      setIsUrlLoading(false);
    }
  }


  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-16">
        <Loader2 className="size-12 text-primary animate-spin" />
      </div>
    );
  }

  if (error) {
    return <p className="text-destructive p-8 text-center">Error loading applications: {error}</p>;
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
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applications.map((app) => (
            <TableRow key={app.id}>
              <TableCell className="text-white/80">
                {new Date(app.created_at).toLocaleString()}
              </TableCell>
              <TableCell className="font-medium">{app.full_name}</TableCell>
              <TableCell>{app.email}</TableCell>
              <TableCell>{app.role}</TableCell>
              <TableCell className="text-right">
                <div className="flex gap-2 justify-end">
                   <Dialog onOpenChange={(open) => open && handleOpenDialog(app.resume_url)}>
                    <DialogTrigger asChild>
                      <Button variant="ghost" size="icon"><Eye className="size-4" /></Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl h-[90vh]">
                      <DialogHeader>
                        <DialogTitle>Application from {app.full_name}</DialogTitle>
                        <DialogDescription>
                         Applied for: {app.role} on {new Date(app.created_at).toLocaleString()}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid md:grid-cols-2 gap-8 py-4 h-full">
                        <div className="space-y-4">
                          <p><strong>Contact:</strong> {app.email} | {app.contact}</p>
                          <div>
                            <p><strong>Reason for applying:</strong></p>
                            <p className="text-white/80 bg-background/50 p-4 rounded-md whitespace-pre-wrap">{app.message}</p>
                          </div>
                           {signedUrl && (
                            <Button asChild>
                                <a href={signedUrl} target="_blank" rel="noopener noreferrer">
                                <Download className="mr-2 size-4" /> Download Resume
                                </a>
                            </Button>
                          )}
                        </div>
                        <div className="h-full">
                          {isUrlLoading ? (
                             <div className="flex items-center justify-center h-full border rounded-md bg-muted/50">
                                <Loader2 className="size-8 text-primary animate-spin" />
                            </div>
                          ) : signedUrl ? (
                             <iframe src={signedUrl} className="w-full h-full rounded-md border" title="Resume Preview" />
                          ) : (
                            <div className="flex items-center justify-center h-full border rounded-md bg-muted/50">
                                <p className="text-white/70">No resume uploaded or failed to load.</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button>Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive"><Trash2 className="size-4" /></Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete the application from {app.full_name}.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDelete(app.id)}>Delete</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </TableCell>
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
            <Link href="/" className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
                <h2 className="text-white text-xl font-bold">Linkific</h2>
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
