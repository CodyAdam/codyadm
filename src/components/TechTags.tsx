const techToLogo = {
  react: 'https://api.iconify.design/teenyicons:react-outline.svg',
  vue: 'https://api.iconify.design/teenyicons:vue-outline.svg',
  angular: 'https://api.iconify.design/teenyicons:angular-outline.svg',
  svelte: 'https://api.iconify.design/teenyicons:svelte-outline.svg',
  nodejs: 'https://api.iconify.design/teenyicons:nodejs-outline.svg',
  nest: '/logos/LogosNest.svg',
  graphql: 'https://api.iconify.design/teenyicons:graphql-outline.svg',
  prisma: '/logos/LogosPrisma.svg',
  mongodb: 'https://api.iconify.design/teenyicons:mongodb-outline.svg',
  postgres: '/logos/LogosPostgres.svg',
  mysql: '/logos/LogosMysql.svg',
  docker: 'https://api.iconify.design/teenyicons:docker-outline.svg',
  typescript: 'https://api.iconify.design/teenyicons:typescript-outline.svg',
  javascript: 'https://api.iconify.design/teenyicons:javascript-outline.svg',
  python: 'https://api.iconify.design/teenyicons:python-outline.svg',
  java: '/logos/LogosJava.svg',
  csharp: 'https://api.iconify.design/teenyicons:c-sharp-outline.svg',
  rust: 'https://api.iconify.design/teenyicons:rust-outline.svg',
  php: '/logos/LogosPhp.svg',
  scala: '/logos/LogosScala.svg',
  bash: '/logos/LogosBash.svg',
  powershell: '/logos/LogosPowershell.svg',
  html: 'https://api.iconify.design/teenyicons:html5-outline.svg',
  css: 'https://api.iconify.design/teenyicons:css3-outline.svg',
  c: 'https://api.iconify.design/teenyicons:c-solid.svg',
  cpp: 'https://api.iconify.design/teenyicons:cplusplus-outline.svg',
  sass: '/logos/LogosSass.svg',
  tailwind: 'https://api.iconify.design/teenyicons:tailwind-outline.svg',
  figma: 'https://api.iconify.design/teenyicons:figma-outline.svg',
  photoshop: 'https://api.iconify.design/cib:adobe-photoshop.svg',
  illustrator: 'https://api.iconify.design/cib:adobe-illustrator.svg',
  xd: 'https://api.iconify.design/cib:adobe-xd.svg',
  vercel: 'https://api.iconify.design/akar-icons:vercel-fill.svg',
  nextjs: 'https://api.iconify.design/teenyicons:nextjs-outline.svg',
  daisyui: 'https://api.iconify.design/tabler:flower.svg',
  astro: 'https://api.iconify.design/simple-icons:astro.svg',
  yml: 'https://api.iconify.design/bi:filetype-yml.svg',
  auth0: 'https://api.iconify.design/cib:auth0.svg',
};

const firstLetterToUpper = (str: string) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

export const TeckTags = ({ techs }: { techs: string[] }) => {
  if (!techs) return null;
  return (
    <div className='flex gap-1'>
      {techs.map((tech) => (
        <div
          key={tech}
          className='w-10 hover:scale-110 hover:-translate-y-1 transition-all tooltip tooltip-primary'
          data-tip={firstLetterToUpper(tech)}
        >
          {tech in techToLogo ? (
            <div
              style={{
                maskImage: `url(${techToLogo[tech]})`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
              className='w-full h-full absolute bg-white opacity-50'
            ></div>
          ) : (
            // <img src={techToLogo[tech]} alt={''} className='w-full stroke-red-500 text-blue-500 fill-yellow-400' />
            <div className='text-xl flex justify-center items-center h-full uppercase font-bold opacity-50'>
              {tech.slice(0, 2)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
