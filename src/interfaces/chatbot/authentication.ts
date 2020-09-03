import { ClientCredentialsAuthProvider, AccessToken } from 'twitch-auth'

export default async (input: Options): Promise<TwitchOptions> => {
  const authProvider = new ClientCredentialsAuthProvider(input.clientId, input.secret)

  const onAuthenticationFailure = () => authProvider.refresh().then((t) => t.accessToken)
  const token = (await authProvider.getAccessToken()).accessToken

  return {
    token: token,
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
  token: string
  username: string
  onAuthenticationFailure: () => Promise<string>
}
