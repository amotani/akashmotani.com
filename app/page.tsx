export default function Home() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hey, I&apos;m Akash 👋
      </h1>
      <a className="flex flex-col space-y-1 mb-4" href="/blog/sleep">
        <div className="w-full flex flex-col">
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            The 6 Sleep Hacks You NEED!
          </p>
          <p className="text-neutral-600 dark:text-neutral-400">Sep 2023</p>
        </div>
      </a>
    </section>
  );
}
