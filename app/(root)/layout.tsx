import MobileNavbar from "@/components/MobileNavbar";
import SideBar from "@/components/SideBar";
import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = { firstName: 'Gautham', lastName: 'Sevugan' };

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