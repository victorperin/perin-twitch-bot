import { getTwitchAccessToken } from '@jlengstorf/get-twitch-oauth'

const TWITCH_SCOPES = 'chat:edit chat:read'
const getToken = () =>
  getTwitchAccessToken({ scopes: TWITCH_SCOPES }).then((response) => response.access_token)

export default async (input: Options): Promise<TwitchOptions> => {
  const onAuthenticationFailure = getToken
  const token = await getToken()

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
