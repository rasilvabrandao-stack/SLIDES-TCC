import { SlideContent, SlideType } from './types';
import { 
  Brain, 
  School, 
  BookOpen, 
  TrendingUp, 
  AlertTriangle, 
  UserCheck, 
  ShieldCheck, 
  Users, 
  Rocket, 
  Activity, 
  MessageSquareQuote,
  HeartHandshake,
  MonitorCheck,
  CheckCircle,
  FileText,
  Lightbulb,
  GraduationCap
} from 'lucide-react';

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    type: SlideType.COVER,
    title: "USO DE INTELIGÊNCIA ARTIFICIAL POR ALUNOS NAS ESCOLAS",
    subtitle: "REVOLUÇÃO OU DESAFIO?",
    schoolInfo: {
      name: "E.E. JOÃO DE MELO MACEDO",
      course: "ENSINO MÉDIO TÉCNICO EM DESENVOLVIMENTO DE SISTEMAS",
      year: "2025"
    },
    authors: [
      "DAVI GOMES", 
      "GABRIEL SILVESTRE", 
      "GRAZIELLI PEREIRA", 
      "MARIA EDUARDA", 
      "RAUL BRANDÃO"
    ],
    advisor: "Prof. Rita de Cásia",
    location: "DIADEMA - SÃO PAULO",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    type: SlideType.SECTION,
    title: "Resumo",
    content: "Este trabalho tem como objetivo analisar o uso da inteligência artificial por alunos nas escolas, buscando compreender se essa prática representa uma revolução no aprendizado ou um desafio para o ensino tradicional. A pesquisa foi desenvolvida por meio de uma revisão teórica e da observação de como ferramentas de IA, como assistentes virtuais e geradores de texto, estão sendo utilizadas pelos estudantes.\n\nForam discutidos os benefícios, como o acesso facilitado ao conhecimento e o apoio à aprendizagem personalizada, bem como os riscos, incluindo a dependência tecnológica e a falta de desenvolvimento do pensamento crítico.",
    icon: BookOpen,
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    type: SlideType.SECTION,
    title: "Introdução",
    content: "A inteligência artificial está cada vez mais presente no nosso dia a dia e nas escolas. Muitos alunos já fazem uso dessas ferramentas para estudar, tirar dúvidas, escrever trabalhos e até para aprender conteúdos de forma diferente. Essa nova realidade vem mudando a forma como aprendemos, mas também levanta várias questões sobre até que ponto a tecnologia pode ajudar ou atrapalhar no aprendizado.\n\nA ideia é analisar os benefícios e os riscos dessa tecnologia, entendendo de que forma ela pode ser usada de maneira positiva e responsável dentro do ambiente escolar.",
    icon: Rocket,
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    type: SlideType.SECTION,
    title: "Metodologia",
    content: "Para desenvolver este trabalho, foi feita uma pesquisa baseada em informações de artigos, matérias e notícias disponíveis na internet.\n\n• Escolha do método: Qualitativa, focada em analisar e interpretar o conteúdo encontrado.\n• Instrumentos: Artigos científicos, notícias online e matérias de sites confiáveis.\n• Análise: Dados analisados de forma descritiva, comparando diferentes autores e resumindo as ideias principais.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 5,
    type: SlideType.LIST,
    title: "IA na Educação",
    subtitle: "Conceitos e História",
    content: "A Inteligência Artificial (IA) tem sido considerada uma das tecnologias mais transformadoras do cenário atual. No contexto educacional, começou a ser aplicada a partir da década de 2010.",
    bullets: [
      "Definição: Sistemas que realizam tarefas que exigiriam inteligência humana (raciocinar, aprender, reconhecer padrões).",
      "Histórico: Termo criado em 1956 por John McCarthy na Conferência de Dartmouth.",
      "Aprendizagem Adaptativa: Algoritmos ajustam conteúdo e ritmo (ex: Khan Academy, Duolingo).",
      "Impacto no Curso: Nós, alunos de desenvolvimento de sistemas, aprendemos a usar a IA a nosso favor."
    ],
    icon: School,
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 6,
    type: SlideType.LIST,
    title: "Potencial Revolucionário",
    subtitle: "Inovação e Benefícios",
    bullets: [
      "Personalização do Ensino: Cada aluno segue sua própria trilha de aprendizagem, respeitando ritmos individuais.",
      "Acessibilidade: Sistemas que transformam texto em áudio e ajudam alunos com necessidades especiais (TDAH, dislexia).",
      "Produtividade: Facilita a organização, cria resumos e tira dúvidas de maneira imediata.",
      "Ensino Híbrido: Estudo em casa com simuladores e chatbots educacionais."
    ],
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 7,
    type: SlideType.LIST,
    title: "Desafios e Obstáculos",
    subtitle: "Riscos na vida do aluno",
    bullets: [
      "Desigualdade Digital: Falta de estrutura e internet em escolas públicas aprofunda a exclusão.",
      "Riscos Éticos: Repetição de preconceitos e plágio (uso indevido do ChatGPT).",
      "Dependência: Falta de desenvolvimento do raciocínio lógico e perda da capacidade de criar opiniões.",
      "Privacidade: Coleta excessiva de dados pessoais pelas plataformas educacionais."
    ],
    icon: AlertTriangle,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 8,
    type: SlideType.SECTION,
    title: "Papel do Professor",
    content: "Dados indicam que 70% dos estudantes usam IA, e a proibição de celulares não foi eficaz (63% ainda levam). O papel do professor é crucial para mudar essa estatística.\n\nO professor deve atuar como mediador, apontando os riscos do vício tecnológico (prejuízo ao pensamento crítico, ansiedade) e usando estratégias de ensino criativas para conectar alunos e tecnologia de forma saudável. O objetivo é que o aluno absorva a informação e crie sua própria opinião.",
    icon: UserCheck,
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 9,
    type: SlideType.LIST,
    title: "Ética e Uso Responsável",
    subtitle: "Equilibrando tecnologia e integridade",
    bullets: [
      "Uso Consciente: Usar IA como apoio (resumos, dúvidas), não para copiar tarefas inteiras.",
      "Regras Claras: Escolas devem definir quando a IA é aliada e quando prejudica.",
      "Autoria: Diferenciar criação própria de conteúdo gerado (evitar plágio).",
      "Formação Cidadã: O uso ético na escola prepara para a honestidade na vida profissional."
    ],
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 10,
    type: SlideType.SECTION,
    title: "Inclusão Educacional",
    content: "A IA torna o aprendizado mais acessível. Alunos com deficiência visual usam leitores de texto; estudantes com dislexia recebem textos simplificados; alunos com TDAH se beneficiam de atividades curtas e interativas.\n\nPorém, a inclusão digital ainda não é realidade para todos. Sem políticas públicas, a IA pode ampliar a desigualdade entre quem tem e quem não tem acesso à tecnologia.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 11,
    type: SlideType.LIST,
    title: "Formação dos Professores",
    subtitle: "Preparando o docente para a era da IA",
    bullets: [
      "Capacitação: Cursos e oficinas não apenas técnicos, mas pedagógicos.",
      "Mudança de Metodologia: Substituir memorização por interpretação e projetos.",
      "Desafio: Professores despreparados podem reforçar desigualdades ou uso passivo da tecnologia.",
      "Objetivo: Desenvolver consciência crítica e senso ético no uso das ferramentas."
    ],
    icon: GraduationCap,
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 12,
    type: SlideType.LIST,
    title: "Futuro da Educação",
    subtitle: "Tendências e Expectativas",
    bullets: [
      "Salas Híbridas: Integração total entre físico e digital.",
      "Assistentes Virtuais: Suporte personalizado conforme as necessidades do aluno.",
      "Simuladores: Tornar conceitos abstratos mais claros.",
      "Equilíbrio: O sucesso depende de professores preparados e incentivo à autonomia estudantil."
    ],
    icon: MonitorCheck,
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 13,
    type: SlideType.QUIZ,
    title: "Teste de Dependência",
    subtitle: "Em grupo, criamos um site quiz para identificar o nível de dependência tecnológica.",
    content: "O quiz avalia frequência de uso, tipo de tarefas e dependência. O site foi desenvolvido utilizando HTML, CSS e JavaScript, aplicando na prática o que aprendemos no curso técnico. A própria tecnologia nos ajudou a programar e corrigir erros.",
    icon: Lightbulb,
    link: "https://tcc-teste-de-depend-ncia-a-tecnologia.onrender.com/", 
    linkText: "Acessar Quiz do TCC",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 14,
    type: SlideType.CONCLUSION,
    title: "Conclusão",
    content: "A IA representa simultaneamente uma revolução e um desafio. Revolução, porque oferece novas oportunidades de aprendizado, personalização e inclusão; desafio, porque exige responsabilidade, equilíbrio e preparação.\n\nO futuro da educação dependerá do modo como lidaremos com essa tecnologia, garantindo que a IA seja utilizada para potencializar o aprendizado, sem comprometer o desenvolvimento crítico, ético e autônomo do estudante. Ela não substitui o esforço humano, mas amplia suas possibilidades.",
    icon: MessageSquareQuote,
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 15,
    type: SlideType.LIST,
    title: "Referências",
    subtitle: "Fontes utilizadas na pesquisa",
    bullets: [
      "G1 / YouTube: 'IA na educação: desafios e oportunidades'.",
      "CNN Brasil: '70% dos alunos do ensino médio usam IA sem preparo'.",
      "TIC Educação 2024: Uso de IA cresce, mas faltam investimentos.",
      "Revista da Educação Profissional (IFRN): Potencialidades e desafios da IA.",
      "Secretaria da Educação (Seduc CE): Curso 'IA na Escola'."
    ],
    icon: FileText
  },
  {
    id: 16,
    type: SlideType.SECTION,
    title: "Agradecimentos",
    content: "Gostaríamos de agradecer a todos nossos professores e orientadores que fizeram parte desse ciclo. A todos que contribuíram para o nosso crescimento profissional e pessoal.\n\nGostaria de agradecer principalmente nossa professora Rita que nos ajudou e deu muitos conselhos, que apostou em nós e sempre quis ver o nosso melhor. Esses dois anos foram marcantes, repletos de ensinamentos.\n\nNão podemos esquecer de agradecer nossa família, por sempre pensar em nosso futuro, e nossos colegas de sala, por fazerem parte dessa equipe onde um ajudou o outro.",
    icon: HeartHandshake,
  },
  {
    id: 17,
    type: SlideType.COVER,
    title: "OBRIGADO PELA ATENÇÃO",
    subtitle: "DAVI GOMES, GABRIEL SILVESTRE, GRAZIELLI PEREIRA, MARIA EDUARDA, RAUL BRANDÃO",
    schoolInfo: {
      name: "TCC - DESENVOLVIMENTO DE SISTEMAS",
      course: "2025",
      year: ""
    },
    icon: CheckCircle,
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop"
  }
];

export const QUIZ_QUESTIONS = [
  // Fallback questions in case link isn't used
  {
    id: 1,
    question: "Quando você recebe um trabalho escolar, qual é sua primeira ação?",
    options: [
      { text: "Pesquiso em livros ou sites confiáveis primeiro.", score: 0 },
      { text: "Peço um esboço para a IA, mas escrevo eu mesmo.", score: 5 },
      { text: "Peço para a IA fazer tudo e só copio/colo.", score: 10 }
    ]
  },
  {
    id: 2,
    question: "Você confere as fontes que a IA fornece?",
    options: [
      { text: "Sempre, verifico se as fontes existem.", score: 0 },
      { text: "Às vezes, se parecer estranho.", score: 5 },
      { text: "Nunca, confio 100% na resposta.", score: 10 }
    ]
  },
  {
    id: 3,
    question: "Se a internet cair, você consegue fazer a tarefa?",
    options: [
      { text: "Sim, tranquilamente.", score: 0 },
      { text: "Com dificuldade, demoro mais.", score: 5 },
      { text: "Não, não sei nem por onde começar.", score: 10 }
    ]
  },
  {
    id: 4,
    question: "Você usa IA para resolver exercícios de matemática/lógica?",
    options: [
      { text: "Só para entender a explicação, resolvo depois.", score: 0 },
      { text: "Uso para conferir minhas respostas.", score: 5 },
      { text: "Uso para obter a resposta final imediatamente.", score: 10 }
    ]
  },
];