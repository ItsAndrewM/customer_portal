import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry';
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Customer Portal',
  description: 'Customer Portal for Presicion Sail Loft Ltd.',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </body>
      </html>
    </ClerkProvider>
  )
}
