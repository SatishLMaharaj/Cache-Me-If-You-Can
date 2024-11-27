import ChatInterface from '@/components/chat-interface';
import { SplineAvatar } from '@/components/Spline/Spline';

export default function Home() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4">
      <ChatInterface />
    </div>
  );
}