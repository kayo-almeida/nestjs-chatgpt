export const appSettings = {
  port: parseInt(process.env.PORT, 10) || 3000,
  openApi: {
    organizationId: process.env.OPENAPI_ORGANIZATION_ID,
    secretkey: process.env.OPENAPI_SECRET_KEY,
  },
};
