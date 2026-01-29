import { useTheme } from "@/context/ThemeContext";

type Props = {};

function Footer({ }: Props) {
  const { theme } = useTheme();
  return (
    <section
      id="footer"
      className={`w-full ${theme === "dark" ? "bg-gray-900" : "bg-gradient-to-r from-blue-100 to-purple-100"
        }`}
    >
      <footer
        className={`${theme === "dark" ? "bg-gray-800" : "bg-transparent"
          } py-8`}
      >
        <div className="mx-auto w-5/6 text-center">
          <p className="text-sm">
            © 2024 Chirag Mandyal. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default Footer;
