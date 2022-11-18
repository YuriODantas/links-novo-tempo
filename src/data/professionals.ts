export interface IProfessional {
  name: string
  profession: string
  company?: string
  photo: string
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
    name: 'Yuri Dantas',
    profession: 'Desenvolvedor de Aplicativos',
    photo: '/photos/yuri.jpg',
    slug: 'desenvolvedor-yuri',
    description:
      'Esse é o nosso profissional de desenvolvimento de aplicativos da Igreja, entre em contato com ele para saber mais!',
    address: 'asdasdasd',
    whatsapp: 'asasas',
    social: {
      facebook: 'asasas',
      instagram: 'asasas',
      linkedIn: 'asas'
    }
  },
  {
    name: 'Luan e Talita',
    profession: 'Escola de Cursos e Faculdade',
    company: 'Prepara Cursos e Anhanguera',
    photo: '/photos/luantalita.jpg',
    slug: 'prepara-cursos',
    description:
      'Escola de cursos e faculdade para todos que querem aprender mais!',
    address: 'askdjaksjdh',
    whatsapp: 'https://api.whatsapp.com/send?phone=5513981383466',
    social: {
      facebook: 'https://pt-br.facebook.com/preparacursospg/'
    }
  }
]
