import { BsGithub, BsLinkedin, BsTelephone } from 'react-icons/bs';
import { LinkButton } from './LinkButton';
import { HeaderParams } from '../../types/Header/HeaderParams';
import { MdEmail } from 'react-icons/md';

export const Header = ({ links }: HeaderParams) => {
  const contacts = [
    {
      icon: <MdEmail />,
      url: 'mailto:l.vicente9003@gmail.com',
    },
    {
      icon: <BsTelephone />,
      url: 'https://wa.me/5519996751139',
    },
    {
      icon: <BsLinkedin />,
      url: 'https://www.linkedin.com/in/lucas-vicente-077852191/',
    },
    {
      icon: <BsGithub />,
      url: 'https://github.com/LucasHVicente',
    },
  ];
  return (
    <header className="hidden bg-inherit lg:flex flex-1 justify-between p-6 pb-0 shadow-md shadow-bg-dark  pr-0 sticky top-0 z-10">
      <LinkButton label="LV" href="#" />
      <div className="animate-start-animation border-b border-blue-500 px-8 flex gap-6 self-end ">
        {links.map(({ label, url }) => (
          <a
            key={url}
            href={`#${url}`}
            className="hover:drop-shadow-2xl shadow-blue-500 transition hover:cursor-pointer hover:text-blue-500 pb-4"
          >
            {label}
          </a>
        ))}
      </div>
      <div className="fixed left-0 bottom-0 p-6 pb-0">
        <div className="animate-start-animation border-l border-blue-500 p-4 pb-8 flex flex-col ">
          {contacts.map(({ icon, url }) => (
            <a
              key={url}
              href={url}
              target="_blank"
              className="hover:text-blue-500 hover:scale-110 hover:drop-shadow-2xl shadow-blue-500 transition text-2xl my-3 "
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
