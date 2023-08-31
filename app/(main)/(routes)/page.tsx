import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className=" h-full">
      <UserButton afterSignOutUrl="/"></UserButton>
      <ModeToggle />
    </div>
  );
}
