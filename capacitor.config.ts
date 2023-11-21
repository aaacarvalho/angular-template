import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mvgi.com.app',
  appName: 'coming-soon',
  webDir: 'dist/coming-soon',
  server: {
    androidScheme: 'https'
  }
};

export default config;
