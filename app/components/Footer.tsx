const Footer = () => {
  return (
    <footer className="border-border bg-background/80 border-t px-4 py-2 backdrop-blur-xl transition-colors">
      <div className="mx-auto flex max-w-5xl flex-col justify-between gap-2 text-center sm:flex-row sm:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Fathurrahman Muhammad. All rights
          reserved.
        </p>
        <p className="text-sm">Indonesia, Yogyakarta</p>
      </div>
    </footer>
  );
};

export default Footer;
