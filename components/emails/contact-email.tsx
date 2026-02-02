import * as React from "react";
import { ContactSchemaType } from "@/lib/validation/contact";

export function EmailTemplate({
  name,
  email,
  projectType,
  message,
}: ContactSchemaType) {
  return (
    <div style={{ 
      fontFamily: 'sans-serif', 
      lineHeight: '1.5', 
      color: '#333',
      maxWidth: '600px',
      margin: '0 auto',
      border: '1px solid #eee',
      padding: '20px',
      borderRadius: '8px'
    }}>
      <h2 style={{ color: '#1a1a1a', borderBottom: '2px solid #f4f4f4', paddingBottom: '10px' }}>
        🎙️ New Project Inquiry
      </h2>
      
      <div style={{ marginBottom: '20px' }}>
        <p><strong>From:</strong> {name} ({email})</p>
        <p><strong>Interest:</strong> <span style={{ 
          backgroundColor: '#eef2ff', 
          color: '#4338ca', 
          padding: '2px 8px', 
          borderRadius: '4px',
          fontSize: '0.9em',
          fontWeight: 'bold'
        }}>{projectType}</span></p>
      </div>

      <div style={{ 
        backgroundColor: '#f9f9f9', 
        padding: '15px', 
        borderRadius: '5px',
        fontStyle: 'italic' 
      }}>
        <p style={{ margin: 0 }}>"{message}"</p>
      </div>

      <hr style={{ border: 'none', borderTop: '1px solid #eee', marginTop: '20px' }} />
      
      <p style={{ fontSize: '0.8em', color: '#888' }}>
        This message was sent from your portfolio contact form.
      </p>
    </div>
  );
}