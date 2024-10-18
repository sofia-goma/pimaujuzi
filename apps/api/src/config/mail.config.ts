interface MailConfig {
  host: string;
  user: string;
  port: number;
  password: string;
}

const mailConfig: MailConfig = {
  host: process.env.EMAIL_HOST as string,
  user: process.env.EMAIL_HOST_USER as string,
  port: parseInt(process.env.MY_PORT || '587', 10),
  password: process.env.EMAIL_HOST_PASSWORD as string,
};

export default mailConfig;
