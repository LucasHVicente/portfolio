interface LinkButtonProps {
  label: string;
  href: string;
}

export const LinkButton = ({ label, href }: LinkButtonProps) => {
  return (
    <a
      href={href}
      className="text-blue-500 border p-2 border-blue-500 hover:border-blue-500 hover:text-blue-700 transition hover:cursor-pointer"
    >
      {label}
    </a>
  );
};
