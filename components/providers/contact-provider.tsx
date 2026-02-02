"use client";

import React, { createContext, useContext } from "react";

export interface ContactData {
  email?: string;
  phoneNumber?: string;
  socialMedia?: {
    youtube?: string;
    instagram?: string;
    tiktok?: string;
    facebook?: string;
  };
}

const ContactContext = createContext<ContactData>({});

export const useContactInfo = () => {
  return useContext(ContactContext);
};

export const ContactProvider = ({
  data,
  children,
}: {
  data: ContactData;
  children: React.ReactNode;
}) => {
  return (
    <ContactContext.Provider value={data}>{children}</ContactContext.Provider>
  );
};
