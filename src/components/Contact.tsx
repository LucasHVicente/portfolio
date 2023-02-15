import { BsGithub, BsLinkedin, BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from '../hooks/useTranslation';

export const Contact = () => {
  const { translation } = useTranslation();
  const contacts = [
    {
      icon: <MdEmail />,
      label: 'l.vicente9003@gmail.com',
      url: 'mailto:l.vicente9003@gmail.com',
    },
    {
      icon: <BsTelephone />,
      label: '(19) 99675-1139',
      url: 'https://wa.me/5519996751139',
    },
    {
      icon: <BsLinkedin />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucas-vicente-077852191/',
    },
    {
      icon: <BsGithub />,
      label: 'github.com/LucasHVicente',
      url: 'https://github.com/LucasHVicente',
    },
  ];
  return (
    <div className="section-div start-animation border-none flex flex-col items-center">
      <h2 className="text-blue-500 text-5xl mb-4">
        {translation.contact.title}
      </h2>
      <p>{translation.contact.text}</p>
      <div className="flex w-full justify-between px-20 p-12 gap-4">
        {contacts.map(({ icon, url, label }) => (
          <div key={url} className="transition hover:scale-110">
            <a
              href={url}
              target="_blank"
              className="hover:text-blue-500 transition my-6 flex flex-col items-center gap-4"
              rel="noreferrer"
            >
              <span className="text-3xl">{icon}</span>
              <span className="lg:block hidden">{label}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
