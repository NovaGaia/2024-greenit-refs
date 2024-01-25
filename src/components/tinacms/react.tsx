import { useTina } from "tinacms/dist/react";

interface TinaReactHelperProps {
  tina: any;
  entry: any;
  children?: any;
  "client:tina": boolean; // or whatever the type should be
}
export const TinaReactHelper: React.FC<TinaReactHelperProps> = ({
  tina,
  entry,
  children,
}) => {
  useTina(tina);
  function inIframe() {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  }
  const btClasses =
    "bg-gray-800 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded whitespace-nowrap flex items-center gap-2 w-fit flex-none";
  return (
    <>
      <nav className="bg-gray-900 p-4">
        <div className="container flex items-center gap-4">
          <span className="font-bold text-white">TinaCMS:</span>{" "}
          {inIframe() ? (
            <a
              href={`/${entry.collection !== "pages" ? entry.collection : ""}/${
                entry.slug
              }`}
              target="_blank"
              className={btClasses}
            >
              View{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1l9-9m-5 0h5v5"
                />
              </svg>
            </a>
          ) : (
            <a
              href={`/admin/index.html#/~/${entry.slug}`}
              target="_blank"
              className={btClasses}
            >
              Edit
            </a>
          )}
        </div>
      </nav>
      {children}
    </>
  );
};