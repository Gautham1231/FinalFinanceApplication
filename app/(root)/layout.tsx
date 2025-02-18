import MobileNavbar from "@/components/MobileNavBar";
import SideBar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import Image from 'next/image';
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect('/sign-in')

  return (
    <main className="flex h-screen w-full font-inter">
      <SideBar user={loggedIn} />
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between p-4">
          <Image src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <MobileNavbar user={loggedIn} />
        </div>
        <div className="flex-grow flex flex-col items-center justify-start">
          {children}
        </div>
      </div>
    </main>
  );
}