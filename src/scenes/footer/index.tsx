function Footer() {
  return (
    <section id="footer" className="w-full border-t border-zinc-200 dark:border-zinc-800">
      <footer className="py-8">
        <div className="mx-auto flex w-5/6 max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-mono text-sm text-zinc-500">
            <span className="text-amber-600 dark:text-amber-400">&lt;</span>
            {" chirag.mandyal "}
            <span className="text-amber-600 dark:text-amber-400">/&gt;</span>
          </p>
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Chirag Mandyal. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
