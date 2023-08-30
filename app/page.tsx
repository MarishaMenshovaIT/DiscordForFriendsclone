import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <p className="text-3xl font-bold text-indigo-500">
        Hello honey, you can do it!
      </p>
      <Button variant="ghost" className="text-indigo-800">
        Click me
      </Button>
    </div>
  );
}
