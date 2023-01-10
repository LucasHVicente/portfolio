import { Button } from './Button';
import { BsGithub, BsInstagram, BsLinkedin, BsWhatsapp } from 'react-icons/bs';
interface HeaderLinkProps {
  label: string;
  url: string;
}

interface HeaderParams {
  links: HeaderLinkProps[];
}

export const Header = ({ links }: HeaderParams) => {
  const contacts = [
    {
      icon: <BsLinkedin />,
      url: 'https://www.linkedin.com/in/lucas-vicente-077852191/',
    },
    {
      icon: <BsGithub />,
      url: 'https://github.com/LucasHVicente',
    },
    {
      icon: <BsInstagram />,
      url: 'https://www.instagram.com/lucas_vicent/',
    },
    {
      icon: <BsWhatsapp />,
      url: 'https://wa.me/5519996751139',
    },
  ];
  return (
    <header className="flex flex-1 justify-between p-6 pr-0">
      <Button label="LV" onClick={() => console.log('teste')} />
      <div className="border-b border-blue-500 px-8 flex gap-6 self-end">
        {links.map(({ label, url }) => (
          <a
            key={url}
            href={url}
            className="transition hover:cursor-pointer hover:text-blue-500 pb-4"
          >
            {label}
          </a>
        ))}
      </div>
      <div className="fixed left-0 bottom-0 p-6 pb-0">
        <div className="border-l border-blue-500 p-4 pb-8 flex flex-col">
          {contacts.map(({ icon, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              className="hover:text-blue-500 transition text-2xl py-3"
              rel="noreferrer"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};