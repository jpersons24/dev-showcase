import { AntdRegistry } from '@ant-design/nextjs-registry';
import './globals.css';
import MainHeader from '@/app/components/main-header';
import ThemeProvider from '@/app/components/theme/theme-provider';

export const metadata = {
  title: 'Dev Showcase',
  description: 'Next.js app for showcasing anything and everything!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <ThemeProvider>
          <AntdRegistry>
            <MainHeader />
            {children}
          </AntdRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
