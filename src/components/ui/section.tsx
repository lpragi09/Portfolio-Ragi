import { cn } from "@/lib/utils/cn";

export function Section({
  id,
  className,
  children
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-24 md:px-10 lg:px-12",
        className
      )}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  highlight,
  className
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-white/50">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-4 font-serif text-4xl font-semibold tracking-tight text-white md:text-5xl">
        {title}{" "}
        {highlight ? <span className="text-ragi-accent">{highlight}</span> : null}
      </h2>
    </div>
  );
}

