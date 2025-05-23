// This file contains TypeScript interfaces for the database models used in the application.

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  topic: string;
  message: string;
  status: "unread" | "read" | "replied";
  created_at: string;
  updated_at: string;
}
