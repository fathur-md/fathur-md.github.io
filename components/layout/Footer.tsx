import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className="border-border bg-primary-fg/80 flex w-full items-center border-t px-4 py-3 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex w-full max-w-5xl flex-col justify-between gap-2 text-center sm:flex-row sm:items-center sm:text-left">
        <p className="text-sm font-light">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </p>
        <p className="text-sm font-light">{siteConfig.location}</p>
      </div>
    </footer>
  );
};

export default Footer;
