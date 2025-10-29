import { CodeRainBackground } from '@/components/layout/code-rain-background';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket } from 'lucide-react';
import Link from 'next/link';

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
              <CardTitle className="text-3xl font-bold">Welcome to your Dashboard!</CardTitle>
              <CardDescription>This is your control center. More features coming soon.</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center text-center p-16">
                <Rocket className="size-24 text-primary animate-pulse" />
                <p className="mt-8 text-lg text-white/70">
                    We are building something amazing for you. Stay tuned!
                </p>
            </CardContent>
         </Card>
      </main>
    </div>
  );
}
