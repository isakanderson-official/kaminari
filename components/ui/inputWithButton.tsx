import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function VerifyEmailInputAndButton() {
  return (
    <div className="flex w-full max-w-sm  items-center space-x-2">
      <Input type="email" placeholder="Email" className="" />
      <Button type="submit">Verify</Button>
    </div>
  );
}
