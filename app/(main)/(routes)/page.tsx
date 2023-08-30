import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="bg-purple-50 h-full">
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
}
