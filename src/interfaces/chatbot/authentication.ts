import { ClientCredentialsAuthProvider, AccessToken } from 'twitch-auth'

export default async (input: Options): Promise<TwitchOptions> => {
  const authProvider = new ClientCredentialsAuthProvider(input.clientId, input.secret)

  const onAuthenticationFailure = authProvider.refresh

  const token = await authProvider.getAccessToken()

  return {
    token,
    username: input.username,
    onAuthenticationFailure,
  }
}

export type Options = {
  clientId: string
  secret: string
  username: string
}

type TwitchOptions = {
  token: AccessToken
  username: string
  onAuthenticationFailure: () => Promise<AccessToken>
}
