import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'mvgi.app',
  appName: 'mvgi',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
