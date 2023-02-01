import { ButtonProps } from '../../types/Button/ButtonProps';

export const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="min-h-[42px] min-w-[42px] text-blue-500 border p-2 border-blue-500 hover:border-blue-500 hover:text-blue-700 transition "
      onClick={onClick}
    >
      {label}
    </button>
  );
};
