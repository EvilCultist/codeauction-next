
import Link from "next/link";

// import { LatestPost } from "~/app/_components/post";
import { auth } from "~/server/auth";
import { api} from "~/trpc/server";


export async function Header () {
  const session = await auth();

  if (session?.user) {
    void api.post.getLatest.prefetch();
  }

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white">
      <div className="container flex flex-row items-center justify-between gap-12 px-4 py-4">
        <div className="flex flex-row items-center justify-start gap-2">
          <p className="text-2xl text-white">
            Codeauction
          </p>

        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
          <Link
            href={session ? "/api/auth/signout" : "/api/auth/signin"}
            className="rounded-full text-black bg-[#c8b6ff] px-10 py-3 font-semibold no-underline transition hover:bg-[#ffd6ff]"
          >
            {session ? "Sign out" : "Sign in"}
          </Link>
        </div>

        {/* {session?.user && <LatestPost />} */}
      </div>
    </div>
  );
};

// export default Header;
