import Link from "next/link";
export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start pl-20 pr-20 pt-10 pb-10">
      <div className="flex w-full justify-start border-b border-gray-600 pb-6">
        <Link href="/">Menu</Link>
      </div>
      <div className="flex flex-col w-full items-center justify-center place-items-center gap-10 mt-20  font-mono text-sm lg:flex">
        <div className=" flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-700 pb-6 pt-8 mt-15 backdrop-blur-2xl dark:border-neutral-600 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h2>Women in tech Blog</h2>
        </div>
        <div className=" flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-700 pb-6 pt-8 mt-15 backdrop-blur-2xl dark:border-neutral-600 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h4>Next.js course in Women tech project is started</h4>
        </div>
        <div className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-700 pb-6 pt-8 m-15 backdrop-blur-2xl dark:border-neutral-600 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <h3>Feedbacks</h3>
        </div>
      </div>
    </main>
  );
}
