export interface IProfessional {
  id: string
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
