import { z } from 'zod'

export const emailSchema = z.object({
  email: z.string().email()
})

export const roleSchema = z.enum(['superAdmin', 'admin', 'user'])

export const pageEnumSchema = z.enum(
  [
    'accueil',
    'faq',
    'cap-dev',
    'prime',
    'reduire-ir',
    'repreneur',
    'investisseur',
    'cedant',
    'partenaire',
    'comment-ca-marche'
  ],
  {
    errorMap: () => {
      return { message: `Veuillez choisir une page Valide` }
    }
  }
)

const dateSchema = z.preprocess(arg => {
  return typeof arg === 'string' ? new Date(arg) : arg
}, z.date())

export const loginSchema = z.object({
  email: z
    .string()
    .email('Veuillez saisir une adresse email valide.')
    .max(100, 'Veuillez saisir une adresse email avec moins de 100 caractères.'),
  password: z.string().min(1, 'Veuillez saisir un mot de passe.'),
  rememberMe: z.boolean().optional()
})

export const registerSchema = z.object({
  name: z
    .string()
    .min(1, "Veuillez saisir un nom d'au moins 1 caractères.")
    .max(50, 'Veuillez saisir un nom avec moins de 50 caractères.'),
  email: z
    .string()
    .email('Veuillez saisir une adresse email valide.')
    .max(100, 'Veuillez saisir une adresse email avec moins de 100 caractères.'),
  password: z.string().min(8, "Veuillez saisir un mot de passe d'au moins 8 caractères.")
})

export const faqSchema = z.object({
  id: z.string(),
  question: z.string(),
  answer: z.string(),
  page: z.string(),
  orderId: z.number(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const formFAQSchema = z.object({
  question: z
    .string()
    .min(1, 'Veuillez remplir le champs Question.')
    .max(500, 'Le champs Question ne doit pas dépasser 500 caractères.'),
  answer: z
    .string()
    .min(1, 'Veuillez remplir le champs Réponse.')
    .max(5000, 'Le champs Réponse ne doit pas dépasser 5000 caractères.')
})

export const createFaqSchema = z.object({
  question: z
    .string()
    .min(1, 'Veuillez remplir le champs Question.')
    .max(500, 'Le champs Question ne doit pas dépasser 500 caractères.'),
  answer: z
    .string()
    .min(1, 'Veuillez remplir le champs Réponse.')
    .max(5000, 'Le champs Réponse ne doit pas dépasser 5000 caractères.'),
  page: pageEnumSchema,
  orderId: z.number().min(0)
})

export const updateFaqSchema = z.object({
  id: z.string().min(1),
  question: z
    .string()
    .min(1, 'Veuillez remplir le champs Question.')
    .max(500, 'Le champs Question ne doit pas dépasser 500 caractères.'),
  answer: z
    .string()
    .min(1, 'Veuillez remplir le champs Réponse.')
    .max(5000, 'Le champs Réponse ne doit pas dépasser 5000 caractères.'),
  page: pageEnumSchema,
  orderId: z.number().min(0),
  createdAt: z.string().min(1),
  updatedAt: z.string().min(1)
})

export const updateFaqArraySchema = z.object({
  faqs: z.array(updateFaqSchema)
})

export const idSchema = z.string().uuid('Invalide ID')

export const messageSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  topic: z.string(),
  message: z.string(),
  isViewed: z.boolean(),
  createdAt: z.date(),
  updatedAt: z.date()
})

export const createMessageSchema = z.object({
  firstName: z
    .string()
    .min(1, 'Veuillez remplir le champs Prenom.')
    .max(50, 'Le champs Prenom ne doit pas dépasser 50 caractères.'),
  lastName: z
    .string()
    .min(1, 'Veuillez remplir le champs Nom.')
    .max(50, 'Le champs Nom ne doit pas dépasser 50 caractères.'),
  email: z
    .string()
    .email('Veuillez saisir une adresse email valide.')
    .max(100, 'Le champs Email ne doit pas dépasser 100 caractères.'),
  topic: z
    .string()
    .min(1, 'Veuillez remplir le champs Sujet.')
    .max(150, 'Le champs Sujet ne doit pas dépasser 150 caractères.'),
  message: z
    .string()
    .min(1, 'Veuillez remplir le champs Message.')
    .max(2500, 'Le champs Message ne doit pas dépasser 2500 caractères.')
})

export const getUsersSchema = z.object({
  id: z
    .string()
    .length(32)
    .regex(/^[A-Za-z0-9]+$/),
  name: z.string(),
  image: z.string().url().nullable(),
  email: z.string().email(),
  role: z.enum(['superAdmin', 'admin', 'user']),
  createdAt: z.date(),
  updatedAt: z.date(),
  emailVerified: z.boolean()
})
export const userIdSchema = z
  .string()
  .length(32)
  .regex(/^[A-Za-z0-9]+$/)

export const invitationSchema = z.object({
  id: z.string().uuid(),
  role: z.enum(['superAdmin', 'admin', 'user']),
  email: z.string().email(),
  isUsed: z.boolean(),
  isExpirable: z.boolean(),
  expireAt: z.date().nullable(),
  createdAt: z.date(),
  inviterId: z
    .string()
    .length(32)
    .regex(/^[A-Za-z0-9]+$/) // user id
})

export const createInvitationSchema = z.object({
  email: z.string().email(),
  isExpirable: z.boolean({
    required_error: "Le choix d'expiration est requis."
  }),
  expireAt: z
    .date()
    .min(new Date(), {
      message: "La date d'expiration doit être dans le futur."
    })
    .optional(),
  inviterId: z
    .string({ required_error: "L'ID du créateur de l'invitation est requis." })
    .length(32)
    .regex(/^[A-Za-z0-9]+$/) // user id
})

export const formInvitSchema = z.object({
  email: z.string().email(),
  isExpirable: z.boolean({
    required_error: "Le choix d'expiration est requis."
  }),
  expireAt: z
    .date()
    .min(new Date(), {
      message: "La date d'expiration doit etre dans le future"
    })
    .optional()
})

export const resendInvitSchema = z.object({
  email: z.string().email(),
  invitationCode: z.string().uuid()
})

export const categoryFormSchema = z.object({
  name: z.string().min(1, 'Veuillez saisir un nom.').max(50, 'Le nom ne doit pas dépasser 50 caractères.')
})

export const categorySchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  createdAt: dateSchema
})

export const blogSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  customUrl: z.string(),
  mainImage: z.string(),
  categories: z.array(categorySchema),
  summary: z.string(),
  content: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  creatorId: z
    .string()
    .length(32)
    .regex(/^[A-Za-z0-9]+$/),
  isPublished: z.boolean()
})

export const newBlogSchema = z.object({
  title: z.string(),
  customUrl: z.string(),
  mainImage: z.string(),
  categories: z.array(categorySchema),
  summary: z.string(),
  content: z.string(),
  creatorId: z
    .string()
    .length(32)
    .regex(/^[A-Za-z0-9]+$/),
  isPublished: z.boolean()
})

export const newBlogFormSchema = z.object({
  title: z.string().min(1, 'Veuillez saisir un titre.').max(100, 'Le titre ne doit pas dépasser 100 caractères.'),
  customUrl: z
    .string()
    .min(1, 'Veuillez saisir une URL personnalisée.')
    .max(100, "L'URL personnalisée ne doit pas dépasser 100 caractères."),
  mainImage: z.string().url("Veuillez saisir une URL valide pour l'image principale."),
  categories: z.array(categorySchema).min(1, 'Veuillez sélectionner au moins une catégorie.'),
  summary: z.string().min(1, 'Veuillez saisir un résumé.').max(500, 'Le résumé ne doit pas dépasser 500 caractères.'),
  content: z
    .string()
    .min(10, 'Veuillez saisir un contenu.')
    .max(5000, 'Le contenu ne doit pas dépasser 5000 caractères.'),
  creatorId: z
    .string({ required_error: "L'ID du créateur de l'invitation est requis." })
    .length(32)
    .regex(/^[A-Za-z0-9]+$/),
  isPublished: z.boolean()
})
