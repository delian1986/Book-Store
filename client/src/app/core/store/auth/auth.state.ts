export interface AuthState {
    readonly token: string
    readonly email: string
    readonly isAdmin: boolean
    readonly isAuthenticated: boolean
  }