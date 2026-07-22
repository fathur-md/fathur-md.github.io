import { siteConfig } from '@/config/site';

const Footer = () => {
  return (
    <footer className="border-border bg-background/80 border-t px-4 py-3 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 text-center sm:flex-row sm:text-left">
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
