const techToLogo = {
  react: 'https://api.iconify.design/teenyicons:react-outline.svg',
  vue: 'https://api.iconify.design/teenyicons:vue-outline.svg',
  angular: 'https://api.iconify.design/teenyicons:angular-outline.svg',
  svelte: 'https://api.iconify.design/teenyicons:svelte-outline.svg',
  nodejs: 'https://api.iconify.design/teenyicons:nodejs-outline.svg',
  nest: 'https://api.iconify.design/simple-icons:nestjs.svg',
  graphql: 'https://api.iconify.design/teenyicons:graphql-outline.svg',
  mongodb: 'https://api.iconify.design/teenyicons:mongodb-outline.svg',
  postgres: 'https://api.iconify.design/simple-icons:postgresql.svg',
  docker: 'https://api.iconify.design/teenyicons:docker-outline.svg',
  typescript: 'https://api.iconify.design/teenyicons:typescript-outline.svg',
  javascript: 'https://api.iconify.design/teenyicons:javascript-outline.svg',
  python: 'https://api.iconify.design/teenyicons:python-outline.svg',
  java: 'https://api.iconify.design/la:java.svg',
  csharp: 'https://api.iconify.design/teenyicons:c-sharp-outline.svg',
  rust: 'https://api.iconify.design/teenyicons:rust-outline.svg',
  php: 'https://api.iconify.design/mdi:language-php.svg',
  scala: 'https://api.iconify.design/cib:scala.svg',
  make: 'https://api.iconify.design/file-icons:cmake.svg',
  cmake: 'https://api.iconify.design/file-icons:cmake.svg',
  powershell: 'https://api.iconify.design/tabler:brand-powershell.svg',
  html: 'https://api.iconify.design/teenyicons:html5-outline.svg',
  css: 'https://api.iconify.design/teenyicons:css3-outline.svg',
  c: 'https://api.iconify.design/teenyicons:c-solid.svg',
  cpp: 'https://api.iconify.design/mdi:language-cpp.svg',
  opencv: 'https://api.iconify.design/simple-icons:opencv.svg',
  prisma: 'https://api.iconify.design/file-icons:prisma.svg',
  'unreal engine': 'https://api.iconify.design/fontisto:unreal-engine.svg',
  tailwind: 'https://api.iconify.design/teenyicons:tailwind-outline.svg',
  figma: 'https://api.iconify.design/teenyicons:figma-outline.svg',
  photoshop: 'https://api.iconify.design/cib:adobe-photoshop.svg',
  mysql: 'https://api.iconify.design/tabler:brand-mysql.svg',
  illustrator: 'https://api.iconify.design/cib:adobe-illustrator.svg',
  threejs: 'https://api.iconify.design/tabler:brand-threejs.svg',
  xd: 'https://api.iconify.design/cib:adobe-xd.svg',
  vercel: 'https://api.iconify.design/akar-icons:vercel-fill.svg',
  nextjs: 'https://api.iconify.design/teenyicons:nextjs-outline.svg',
  daisyui: 'https://api.iconify.design/tabler:flower.svg',
  astro: 'https://api.iconify.design/simple-icons:astro.svg',
  yml: 'https://api.iconify.design/bi:filetype-yml.svg',
  auth0: 'https://api.iconify.design/cib:auth0.svg',
  unity: 'https://api.iconify.design/bi:unity.svg',
  socketio: 'https://api.iconify.design/tabler:brand-socket-io.svg',
  linux: 'https://api.iconify.design/teenyicons:linux-alt-outline.svg',
  bash: 'https://api.iconify.design/mdi:bash.svg',
  blender: 'https://api.iconify.design/simple-icons:blender.svg',
  planetscale: 'https://api.iconify.design/simple-icons:planetscale.svg',
  stripe: 'https://api.iconify.design/fa-brands:stripe.svg',
  nextauth: 'https://api.iconify.design/ic:round-shield.svg',
  wordpress: 'https://api.iconify.design/fa6-brands:wordpress-simple.svg',
  autohotkey: 'https://api.iconify.design/file-icons:autohotkey.svg',
};

const firstLetterToUpper = (str: string) =>
  str
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(' ');

export const TeckTags = ({ techs }: { techs: string[] }) => {
  if (!techs) return null;
  return (
    <div className='flex gap-3 shrink-0 flex-wrap justify-center-center px-2'>
      {techs.map((tech) => (
        <div
          key={tech}
          className='w-8 h-8 shrink-0 hover:scale-125 hover:-translate-y-1 transition-all tooltip tooltip-primary opacity-60 hover:opacity-100 duration-75'
          data-tip={firstLetterToUpper(tech)}
        >
          <TechTag tech={tech} />
        </div>
      ))}
    </div>
  );
};

const TechTag = ({ tech }: { tech: string }) => {
  if (tech in techToLogo)
    return (
      <div
        style={{
          maskImage: `url(${techToLogo[tech]})`,
          maskSize: 'contain',
          maskRepeat: 'no-repeat',
          maskPosition: 'center',
        }}
        className='w-full h-full absolute bg-white '
      ></div>
    );

  return <div className='text-xl flex justify-center items-center h-full uppercase font-bold'>{tech.slice(0, 2)}</div>;
};
