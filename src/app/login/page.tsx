'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeRainBackground } from '@/components/layout/code-rain-background';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';
import Link from 'next/link';
import { useFirebase } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const [email, setEmail] = useState('linkific@gmail.com');
  const [password, setPassword] = useState('#Linkific123');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();
  const { auth, areServicesAvailable } = useFirebase();

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

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({
        title: 'Login Successful',
        description: 'Redirecting to your dashboard...',
      });
      router.push('/dashboard');
    } catch (error) {
       const e = error as Error;
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description: e.message || 'Invalid email or password. Please try again.',
      });
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-transparent font-display text-white">
      <CodeRainBackground />
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <Card className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10">
          <CardHeader className="text-center">
             <Link href="/" className="flex items-center gap-3 justify-center mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
                <h2 className="text-white text-2xl font-bold">Linkific</h2>
            </Link>
            <CardTitle className="text-2xl font-bold">Employee Login</CardTitle>
            <CardDescription>Enter your credentials to access your dashboard.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="linkific@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition"
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
                  className="w-full bg-white/5 border border-white/20 rounded-lg py-3 px-4 text-white placeholder-white/50 focus:ring-2 focus:ring-primary focus:border-primary transition"
                />
              </div>
              <Button type="submit" className="w-full flex min-w-[150px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gradient-to-r from-primary to-secondary text-white text-base font-bold shadow-lg hover:shadow-primary/50 transition-shadow" disabled={isLoading || !areServicesAvailable}>
                {isLoading ? <Loader2 className="animate-spin" /> : 'Login'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
