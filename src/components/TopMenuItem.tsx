import Link from "next/link";

interface TopMenuItemProps {
  title: string;
  pageRef: string;
}

export default function TopMenuItem({ title, pageRef }: TopMenuItemProps) {
  return (
    <Link
      href={pageRef}
      className={`
        px-4 py-2 rounded-md font-medium transition-colors duration-200
        text-gray-700 hover:text-indigo-600 hover:bg-gray-100
        dark:text-gray-200 dark:hover:text-indigo-400 dark:hover:bg-white/10
      `}
    >
      {title}
    </Link>
  );
}
