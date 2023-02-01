import { LinkButtonProps } from '../../types/LinkButton/LinkButtonProps';

export const LinkButton = ({ label, href, target }: LinkButtonProps) => {
  return (
    <a
      target={target}
      href={href}
      className="bg-opacity-[15%] hover:bg-opacity-30 bg-blue-500 text-blue-500 border px-3 py-2 border-blue-500 hover:border-blue-500 transition hover:cursor-pointer"
    >
      {label}
    </a>
  );
};
