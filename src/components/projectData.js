import ReactLogo from '../img/reactLogo.png';
import Nucamp from '../img/Nucamp.png';
import JavaLogo from '../img/javaLogo.webp';
import Owasp from '../img/OWASP.png';
import CppLogo from '../img/cpp_logo.png';
import CisaLogo from '../img/CISA_Logo.png';
import PythonLogo from '../img/pythonLogo.png'

const projectData = [
  {
    img: [JavaLogo, CisaLogo, Owasp],
    title: 'Security Audit',
    category: 'Java',
    details: 'OWASP Security Audit and CISA analysis',
    url: 'https://github.com/m1dunfee/JavaSecurityAudit',
  },
  {
    img: [JavaLogo],
    title: 'LetsEncrypt',
    category: 'Java',
    details: 'Certificate Authorities and Encryption',
    url: 'https://github.com/m1dunfee/LetsEncrypt',
  },
  {
    img: [CppLogo],
    title: 'RSA Encryption',
    category: 'C++',
    details: 'The math behind RSA',
    url: 'https://github.com/m1dunfee/RSA-Encryption',
  },
  {
    img: [PythonLogo, Nucamp],
    title: 'Prismatica',
    category: 'Python',
    details: 'LLM / IoT project.',
    url: 'https://github.com/m1dunfee/Prismatica',
  },
  {
    img: [ReactLogo, Nucamp],
    title: 'Nucamp',
    category: 'React',
    details: 'Demo site used for teaching React.',
    url: 'https://nucamp-react-demo-site.herokuapp.com/',
  },
  {
    img: [ReactLogo],
    title: 'Multiversal',
    category: 'React',
    details: 'Just a fun landing page to a discord server',
    url: 'https://github.com/m1dunfee/Multiversal-space',
  },
  {
    img: [ReactLogo],
    title: 'Originally Yours Upholstery',
    category: 'React',
    details: 'Business Site',
    url: 'https://github.com/m1dunfee/originallyyoursupholstery',
  },
];

export default projectData;


