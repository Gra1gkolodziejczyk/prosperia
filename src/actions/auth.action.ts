'use server'

import { loginType, registerType } from '../interfaces/auth'
import { auth } from '../lib/auth'

export const signIn = async ({ email, password }: loginType) => {
  try {
    await auth.api.signInEmail({
      body: {
        email,
        password
      }
    })
    return { success: true, message: 'Connexion réussie, redirection ...' }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('UNAUTHORIZED')) {
        return { success: false, message: 'Email ou mot de passe incorrect' }
      }
    }
    console.error(error)
  }
  return { success: false, message: "Une erreur s'est produite. Veuillez réessayer." }
}

export const signUp = async ({ name, email, password, role }: registerType) => {
  try {
    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
        role
      }
    })
    return { success: true, message: 'Inscription réussie, redirection ...' }
  } catch (error) {
    if (error instanceof Error) {
      if (error.message.includes('UNPROCESSABLE_ENTITY')) {
        return { success: false, message: 'Email déjà utilisé' }
      }
    }
    console.error(error)
  }
  return { success: false, message: "Une erreur s'est produite. Veuillez réessayer." }
}
