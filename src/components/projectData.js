import ReactLogo from '../img/reactLogo.png';
import Nucamp from '../img/Nucamp.png';
import JavaLogo from '../img/javaLogo.webp';
import Owasp from '../img/OWASP.png';
import CppLogo from '../img/cpp_logo.png';
import CisaLogo from '../img/CISA_Logo.png'

const projectData = [
  {
    img: [ReactLogo, Nucamp],
    title: 'Nucamp',
    category: 'React',
    details: 'Demo site used for teaching React.',
    url: 'https://nucamp-react-demo-site.herokuapp.com/',
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
    img: [JavaLogo, CisaLogo, Owasp],
    title: 'RSA Encryption',
    category: 'C++',
    details: 'OWASP Security Audit and CISA analysis',
    url: 'https://github.com/m1dunfee/JavaSecurityAudit',
  },
];

export default projectData;
