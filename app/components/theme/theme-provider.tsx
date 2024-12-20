'use client';

import { ConfigProvider, theme } from 'antd';

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryHover: '#EF0107',
          colorPrimaryActive: '#DB0007',
          fontFamily:
            "'M PLUS 1 Code', 'Source Code Pro', monospace, sans-serif",
        },
        algorithm: theme.darkAlgorithm,
        components: {
          Menu: {
            horizontalItemHoverColor: '#EF0107',
            horizontalItemSelectedColor: '#DB0007',
          },
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
