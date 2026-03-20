import SocialLinks from './SocialLinks';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[--border] mt-20 py-10">
      <div className="max-w-2xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <p className="font-mono text-sm text-[--text-dim]">
            Built by Fahri Mert · {year}
          </p>
          <p className="font-mono text-xs text-[--text-dim] opacity-60">
            Built with Next.js &amp; shipped from Turkey 🇹🇷
          </p>
        </div>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
