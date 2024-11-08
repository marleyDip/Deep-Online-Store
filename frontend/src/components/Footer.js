import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-200">
      <section className="container mx-auto p-4">
        <p className="text-center font-bold" title="Deep Shop">
          &copy;{" "}
          <a
            className="text-decoration-none text-muted"
            href="https://www.bing.com/search?q=md+sofian+hasan"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Md Sofian Hasan
          </a>{" "}
          | {new Date().getFullYear()}{" "}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
