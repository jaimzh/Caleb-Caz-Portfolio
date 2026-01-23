export interface EmailTemplateProps {
  name: string;
  email: string;
  projectType: string;
  message: string;
  company?: string; // honeypot hehe
}