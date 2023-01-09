import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export const Card = ({ children, ...rest }: CardProps) => (
  <div
    className="p-6 border border-blue-500 bg-blue-700 bg-opacity-40 text-gray-100 hover:bg-opacity-60 transition"
    {...rest}
  >
    {children}
  </div>
);
