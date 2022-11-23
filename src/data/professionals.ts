export interface IProfessional {
  name: string
  profession: string
  company?: string
  photo?: string
  slug: string
  description: string
  address?: string
  whatsapp: string
  social?: {
    facebook?: string
    instagram?: string
    linkedIn?: string
  }
}

export const professionals: IProfessional[] = [
  {
    name: 'Ana Lúcia',
    profession: 'Panos decorativos',
    slug: 'ana-panos-decorativos',
    description: 'Venda de panos decorativos para o seu lar.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996549698'
  },
  {
    name: 'Andreia Toledo',
    profession: 'Vestidos e trajes sociais',
    company: 'Locação Toledo',
    slug: 'locacao-toledo',
    description: 'Locação de vestidos e trajes sociais para festa.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996816604'
  },
  {
    name: 'Missionário André Perete',
    profession: 'Proteção veicular',
    company: 'Nova Proteção',
    slug: 'nova-protecao',
    description: 'Proteção veicular para carros, motos, vans e caminhões.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513988047054'
  },
  {
    name: 'Bruno Novellini',
    profession: 'Professor de música',
    slug: 'bruno-novellini',
    description: 'Aulas de violão e ukulele',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511990144415'
  },
  {
    name: 'Presbítero Celso',
    profession: 'Serralheria',
    company: 'CVM Vidros e Alumínios',
    slug: 'cvm-vidros-aluminios',
    description:
      'Serviço especializado em esquadria de alumínio, portas, portões, janelas e coberturas.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511996956554'
  },
  {
    name: 'Cleide',
    profession: 'Venda de roupas',
    slug: 'cleide-roupas-intimas',
    description: 'Venda de roupas intimas femininas.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513997522216'
  },
  {
    name: 'Cristiane Perete',
    profession: 'Roupas femininas',
    company: 'Perete Modas',
    slug: 'perete-modas',
    description: 'Roupas femininas moda evangélica.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513988081151'
  },
  {
    name: 'Dorival',
    profession: 'Vendedor de motos',
    company: 'Honda Sammel',
    slug: 'dorival-honda',
    description: 'Vendedor de motos e consórcios pela Honda.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513974047824'
  },
  {
    name: 'Edson',
    profession: 'Venda e concerto de bicicletas',
    company: 'Ciclo GM',
    slug: 'ciclo-gm',
    description: 'Venda e concerto de bicicletas.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513982280708'
  },
  {
    name: 'Eliane',
    profession: 'Materiais para construção',
    slug: 'eliane-materiais',
    description: 'Materiais para sua construção.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511996160226'
  },
  {
    name: 'Stella',
    profession: 'Manicure e pedicure',
    company: 'Studio Stella',
    slug: 'studio-stella',
    description:
      'Manicure, pedicure, especialista em cuidar da sua autoestima.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513988220183'
  },
  {
    name: 'Everaldo',
    profession: 'Moveis planejados',
    company: 'Ztex Modulados',
    slug: 'ztex-modulados',
    description: 'Moveis planejados e marcenaria em geral.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513982192570'
  },
  {
    name: 'Fabiana',
    profession: 'Bolos e doces',
    company: 'Ebenezer Doces',
    slug: 'ebenezer-doces',
    description: 'Venda de bolos, doces em geral.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996112450'
  },
  {
    name: 'Obreira josi',
    profession: 'Venda de roupas',
    company: 'Renovo',
    slug: 'renovo-roupas',
    description: 'Venda de roupas femininas.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996272021'
  },
  {
    name: 'Jefferson',
    profession: 'Restaurante em Mongaguá',
    slug: 'jefferson-restaurante',
    description:
      'Restaurante em Mongaguá com pratos deliciosos que você deseja experimentar.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511948617922'
  },
  {
    name: 'Pastor Kléber',
    profession: 'Eletricista',
    slug: 'kleber-eletricista',
    description: 'Eletricista.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513982333370'
  },
  {
    name: 'Obreira Lena',
    profession: 'Diarista',
    slug: 'lena-diarista',
    description: 'Diarista.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513997204369'
  },
  {
    name: 'Leonardo',
    profession: 'Lava Rápido',
    company: 'Lava Rápido k13',
    slug: 'lava-rapido-k13',
    description: 'Lavagem de automóveis e motos.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513988470034'
  },
  {
    name: 'Leonardo',
    profession: 'Venda de imóveis',
    company: 'Destaque Imóveis',
    slug: 'destaque-imoveis',
    description: 'Aluguéis e venda de imóveis.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513997088957'
  },
  {
    name: 'Lorelay',
    profession: 'Maquiadora profissional',
    slug: 'lorelay-maquiadora',
    description: 'Maquiadora profissional e cursos de auto maquiagem.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513974249761'
  },
  {
    name: 'Diácono Lucas',
    profession: 'Construção civil',
    slug: 'lucas-contrucao',
    description: 'Construção de casas e sobrados.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513974243181'
  },
  {
    name: 'Marcelo',
    profession: 'Eletricista',
    slug: 'marcelo-eletricista',
    description: 'Eletricista.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513997847034'
  },
  {
    name: 'Mauro',
    profession: 'Tortas salgadas',
    slug: 'mauro-tortas',
    description: 'Venda de tortas salgadas.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513992106812'
  },
  {
    name: 'Diaconisa Nathalia',
    profession: 'Dentista',
    company: 'Clínica Steinert',
    slug: 'clinica-steinert',
    description: 'Clínica especializada em tratamentos dentários.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513997422265'
  },
  {
    name: 'Nelcy',
    profession: 'Aula de reforço infantojuvenil',
    slug: 'nelcy-reforco',
    description: 'Aula de reforço para crianças e adolescentes.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5511999871907'
  },
  {
    name: 'Reinaldo',
    profession: 'Barbeiro',
    company: 'Haircuts & Shaves Barber Shop',
    slug: 'reinaldo-haircuts',
    description: 'Salão de beleza especializado em cortes masculinos.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513997824128'
  },
  {
    name: 'Renan',
    profession: 'Mecânico automotivo',
    company: 'LRN Automotiva',
    slug: 'lrn-automotiva',
    description: 'Mecânica de automóveis.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513997094663'
  },
  {
    name: 'Risoneide',
    profession: 'Fotografa',
    slug: 'risoneide-fotografa',
    description:
      'Ensaio fotográfico para casamentos, festa, profissionais liberais.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513981314663'
  },
  {
    name: 'Rommel',
    profession: 'Faz tudo',
    slug: 'rommel-faz-tudo',
    description: 'Faz tudo.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513988155546'
  },
  {
    name: 'Sandra',
    profession: 'Confecção, costura e reparos',
    slug: 'sandra-confeccao',
    description: 'Confecção, costuras e reparos em geral de roupas.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996357020'
  },
  {
    name: 'Tais',
    profession: 'Quadros decorativos',
    company: 'Tai Art',
    slug: 'tai-art',
    description: 'Quadros decorativos para sua casa e escritório.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513974124972'
  },
  {
    name: 'Luan e Talita',
    profession: 'Escola de Cursos Profissionalizantes',
    company: 'Prepara Cursos',
    slug: 'prepara-cursos',
    description: 'Escola de cursos profissionalizantes e idiomas.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513976008719',
    social: {
      facebook: 'https://pt-br.facebook.com/preparacursospg/'
    }
  },
  {
    name: 'Luan e Talita',
    profession: 'Faculdade',
    company: 'Faculdade Anhanguera',
    slug: 'faculdade-anhanguera',
    description: 'Cursos superiores em EAD reconhecidos no MEC.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996898657'
  },
  {
    name: 'Tatiane',
    profession: 'Tranças para cabelos',
    company: 'Tati Tranças',
    slug: 'tati-trancas',
    description: 'Tranças para cabelos.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996309081'
  },
  {
    name: 'Yuri',
    profession: 'Desenvolvedor de sistemas',
    company: 'Yuri Solutions',
    slug: 'yuri-solutions',
    description: 'Desenvolvimento de sistemas e aplicativos.',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513996359605'
  }
]
