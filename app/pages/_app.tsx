import {
  AppProps,
  ErrorBoundary,
  ErrorComponent,
  AuthenticationError,
  AuthorizationError,
  ErrorFallbackProps,
  useQueryErrorResetBoundary,
  Head,
} from "blitz"
import LoginForm from "app/auth/components/LoginForm"

import { MantineProvider, NormalizeCSS, GlobalStyles } from "@mantine/core"
import { NotificationsProvider } from "@mantine/notifications"

import "app/core/styles/index.css"
import AuthErrorPage from "app/auth/components/AuthErrorPage"

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <ErrorBoundary
      FallbackComponent={RootErrorFallback}
      onReset={useQueryErrorResetBoundary().reset}
    >
      <Head>
        <title>Saltana</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        theme={
          {
            // colorScheme: 'dark',
          }
        }
        emotionOptions={{ key: "mantine", prepend: false }}
      >
        <NormalizeCSS />
        <GlobalStyles />
        <NotificationsProvider>{getLayout(<Component {...pageProps} />)}</NotificationsProvider>
      </MantineProvider>
    </ErrorBoundary>
  )
}

function RootErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  if (error instanceof AuthenticationError) {
    // return <AuthErrorPage onSuccess={resetErrorBoundary} />
    return <AuthErrorPage />
  } else if (error instanceof AuthorizationError) {
    return (
      <ErrorComponent
        statusCode={error.statusCode}
        title="Sorry, you are not authorized to access this"
      />
    )
  } else {
    return (
      <ErrorComponent statusCode={error.statusCode || 400} title={error.message || error.name} />
    )
  }
}
