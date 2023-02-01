import { BsGithub, BsLinkedin, BsTelephone } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';

export const Contact = () => {
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
      icon: <BsGithub />,
      label: 'github.com/LucasHVicente',
      url: 'https://github.com/LucasHVicente',
    },
    {
      icon: <BsLinkedin />,
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lucas-vicente-077852191/',
    },
  ];
  return (
    <div className="section-div start-animation border-none flex flex-col items-center">
      <h2 className="text-blue-500 text-5xl pb-4">Contato</h2>
      <p>Se interessou no meu trabalho? me mande uma mensagem.</p>
      <div className="flex w-full justify-between px-20 py-12 gap-4">
        {contacts.map(({ icon, url, label }) => (
          <div key={url}>
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
