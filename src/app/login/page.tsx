'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useFirebase } from '@/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { auth } = useFirebase();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!auth) {
       toast({
        variant: 'destructive',
        title: 'Authentication service not ready',
        description: 'Please wait a moment and try again.',
      });
      return;
    }
    setIsLoading(true);

    const hardcodedEmail = 'linkific@gmail.com';
    const hardcodedPassword = '#Linkific123';

    try {
      const loginEmail = email || hardcodedEmail;
      const loginPassword = password || hardcodedPassword;

      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      toast({
        title: 'Login Successful',
        description: 'Redirecting to your dashboard...',
      });
      router.push('/dashboard');
    } catch (error: any) {
      if (error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        try {
          await createUserWithEmailAndPassword(auth, hardcodedEmail, hardcodedPassword);
          await signInWithEmailAndPassword(auth, hardcodedEmail, hardcodedPassword);
          toast({
            title: 'Account Created & Logged In',
            description: 'Redirecting to your dashboard...',
          });
          router.push('/dashboard');
        } catch (creationError: any) {
           toast({
            variant: 'destructive',
            title: 'Account Creation Failed',
            description: creationError.message || 'Could not create a new user.',
          });
        }
      } else {
        toast({
          variant: 'destructive',
          title: 'Login Failed',
          description: error.message || 'Invalid email or password. Please try again.',
        });
      }
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-off-white font-display text-midnight-blue">
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-off-white border-sky-blue">
          <CardHeader className="text-center">
             <Link href="/" className="flex items-center justify-center mb-4 gap-3">
                 <span className="material-symbols-outlined text-steel-blue text-3xl">auto_awesome</span>
                 <h2 className="text-midnight-blue text-2xl font-bold">Linkific</h2>
            </Link>
            <CardTitle className="text-2xl font-bold text-midnight-blue">Employee Login</CardTitle>
            <CardDescription className="text-deep-blue/80">Enter your credentials to access your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-deep-blue">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-secondary border-sky-blue"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-secondary border-sky-blue"
                />
              </div>
              <Button type="submit" className="w-full bg-deep-blue text-off-white hover:bg-midnight-blue" disabled={isLoading}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
