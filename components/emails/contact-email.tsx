import * as React from "react";
import { ContactSchemaType } from "@/lib/validation/contact";

export function EmailTemplate({
  name,
  email,
  projectType,
  message,
}: ContactSchemaType) {
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
