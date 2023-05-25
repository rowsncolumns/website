import { LoginButton, LogoutButton } from "@/components/button-components";
import { Spreadsheet } from "@/components/spreadsheet";

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2">
      <Spreadsheet />
      <LoginButton />
      <LogoutButton />
    </main>
  );
}
