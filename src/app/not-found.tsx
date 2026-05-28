import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-off flex flex-col items-center justify-center px-9">
      <div className="text-center">
        <div className="font-clash font-bold text-[120px] leading-none tracking-[-6px] text-off3 select-none mb-2">
          404
        </div>
        <h1 className="font-clash font-bold text-[28px] tracking-[-1px] text-ink mb-3">
          Page introuvable
        </h1>
        <p className="text-[14px] text-muted font-light mb-8 max-w-[300px] mx-auto leading-relaxed">
          Cette page n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[13px] font-bold px-6 py-3 bg-ink text-off rounded-[4px] hover:bg-ink2 transition-colors tracking-wide"
        >
          ← Retour au portfolio
        </Link>
      </div>

      <div className="absolute bottom-6 text-[11px] text-muted2 tracking-wide">
        Lunyx · lunyx.dev@outlook.fr
      </div>
    </main>
  );
}
