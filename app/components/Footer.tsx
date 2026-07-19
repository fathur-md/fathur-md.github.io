const Footer = () => {
  return (
    <footer className="border-t py-2 px-4 border-border bg-background/80 backdrop-blur-xl transition-colors">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between gap-2 text-center sm:text-left">
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
