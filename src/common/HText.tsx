import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
        <span className="mr-3 font-mono text-2xl font-medium text-amber-500 dark:text-amber-400">
          //
        </span>
        {children}
      </h1>
      <div className="mt-3 h-[3px] w-14 rounded-full bg-amber-500 dark:bg-amber-400" />
    </div>
  );
};

export default HText;
