module.exports = {
  apps: [
    {
      name: 'templategen-cms',
      cwd: './packages/cms',
      script: 'npx',
      args: 'next start -p 4005',
      env: {
        NODE_ENV: 'production',
        NODE_OPTIONS: '--no-deprecation',
      },
    },
    {
      name: 'templategen-web',
      cwd: './packages/web',
      script: 'npx',
      args: 'tsx server.ts',
      env: {
        PORT: 3005,
        PAYLOAD_URL: 'http://localhost:4005',
        REVALIDATION_SECRET: 'vrtpn-revalidation-secret-2026',
        PREVIEW_SECRET: 'G4iaD4Pr3vi3wS3cr3t2026',
        PORTAL_USERNAME: 'user',
        PORTAL_PASSWORD: 'Teameditor@123',
        PORTAL_SESSION_SECRET: 'templategen-portal-session',
        PORTAL_EMAIL_FROM: 'ai@gaiada.com',
        PORTAL_SMTP_HOST: 'smtp.gmail.com',
        PORTAL_SMTP_PORT: '465',
        PORTAL_SMTP_USER: 'ai@gaiada.com',
        PORTAL_SMTP_PASS: 'Treasure@2020',
      },
    },
  ],
}
