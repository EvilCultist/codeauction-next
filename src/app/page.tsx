// import Link from "next/link";
//
// import { LatestPost } from "~/app/_components/post";
// import { auth } from "~/server/auth";
// import { api, HydrateClient } from "~/trpc/server";
import {  HydrateClient } from "~/trpc/server";

import { Header } from '~/app/_components/header';
import { Footer } from '~/app/_components/footer';

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });
  // const session = await auth();
  //
  // if (session?.user) {
  //   void api.post.getLatest.prefetch();
  // }

  return (
    <HydrateClient>
      <Header />
      <main className="flex min-h-[800px] flex-col items-center justify-center bg-gradient-to-b from-[#c8b6ff] to-[#e7c6ff] text-[#fdf0d5]">
        <span className="">COdeAucti0N</span>
      </main>
      <Footer />
    </HydrateClient>
  );
}



      {/*   <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16"> */}
      {/*     <div className="flex flex-col items-center gap-2"> */}
      {/*       <p className="text-2xl text-white"> */}
      {/*         {hello ? hello.greeting : "Loading tRPC query..."} */}
      {/*       </p> */}
      {/**/}
      {/*       <div className="flex flex-col items-center justify-center gap-4"> */}
      {/*         <p className="text-center text-2xl text-white"> */}
      {/*           {session && <span>Logged in as {session.user?.name}</span>} */}
      {/*         </p> */}
      {/*         <Link */}
      {/*           href={session ? "/api/auth/signout" : "/api/auth/signin"} */}
      {/*           className="rounded-full bg-white/10 px-10 py-3 font-semibold no-underline transition hover:bg-white/20" */}
      {/*         > */}
      {/*           {session ? "Sign out" : "Sign in"} */}
      {/*         </Link> */}
      {/*       </div> */}
      {/*     </div> */}
      {/**/}
      {/*     {session?.user && <LatestPost />} */}
      {/*   </div> */}
