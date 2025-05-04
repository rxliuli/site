export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-6">
      <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} rxliuli. All rights reserved.
        </p>
        
        {/* Social Links - 预留位置 */}
        <div className="flex items-center gap-4">
          {/* 
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            GitHub
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground">
            Twitter
          </a>
          */}
        </div>
      </div>
    </footer>
  );
} 