interface LinkButtonProps {
  label: string;
  href: string;
}

export const LinkButton = ({ label, href }: LinkButtonProps) => {
  return (
    <a
      href={href}
      className="bg-opacity-[15%] hover:bg-opacity-30 bg-blue-500 text-blue-500 border px-3 py-2 border-blue-500 hover:border-blue-500 transition hover:cursor-pointer"
    >
      {label}
    </a>
  );
};
