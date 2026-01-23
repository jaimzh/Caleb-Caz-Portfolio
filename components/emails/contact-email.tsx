import * as React from "react";

import { EmailTemplateProps } from "@/types/email";

export function EmailTemplate({
  name,
  email,
  projectType,
  message,
}: EmailTemplateProps) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Project Type: {projectType}</p>
      <p>Message: {message}</p>
    </div>
  );
}
