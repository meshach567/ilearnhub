"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/subabase";
import { ContactMessage } from "@/types/database";

const ContactMessagesAdmin = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  useEffect(() => {
    fetchMessages();
  }, [filter]);

  const fetchMessages = async () => {
    try {
      let query = supabase
        .from("contact_messages")
        .select("*")
        .order("created_at", { ascending: false });

      if (filter !== "all") {
        query = query.eq("status", filter);
      }

      const { data, error } = await query;

      if (error) throw error;
      setMessages(data || []);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const updateMessageStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from("contact_messages")
        .update({ status, updated_at: new Date().toISOString() })
        .eq("id", id);

      if (error) throw error;

      // Update local state
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === id
            ? { ...msg, status: status as "unread" | "read" | "replied" }
            : msg,
        ),
      );
    } catch (error) {
      console.error("Error updating message:", error);
    }
  };

  if (loading) {
    return <div className="flex justify-center p-8">Loading messages...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Contact Messages
        </h1>

        {/* Filter Buttons */}
        <div className="flex space-x-2">
          {(["all", "unread", "read"] as const).map((filterOption) => (
            <button
              key={filterOption}
              onClick={() => setFilter(filterOption)}
              className={`px-4 py-2 rounded-lg font-medium capitalize ${
                filter === filterOption
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {filterOption}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`bg-white rounded-lg shadow p-6 border-l-4 ${
              message.status === "unread"
                ? "border-l-blue-500"
                : message.status === "read"
                  ? "border-l-yellow-500"
                  : "border-l-green-500"
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {message.name}
                </h3>
                <p className="text-gray-600">{message.email}</p>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full mt-1">
                  {message.topic
                    .replace("-", " ")
                    .replace(/\b\w/g, (l: string) => l.toUpperCase())}
                </span>
              </div>

              <div className="flex items-center space-x-2">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    message.status === "unread"
                      ? "bg-blue-100 text-blue-800"
                      : message.status === "read"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-green-100 text-green-800"
                  }`}
                >
                  {message.status}
                </span>

                <select
                  aria-label="option to update message status"
                  value={message.status}
                  onChange={(e) =>
                    updateMessageStatus(message.id, e.target.value)
                  }
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option value="unread">Unread</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
              </div>
            </div>

            <p className="text-gray-700 mb-4 leading-relaxed">
              {message.message}
            </p>

            <p className="text-sm text-gray-500">
              Submitted: {new Date(message.created_at).toLocaleString()}
            </p>
          </div>
        ))}

        {messages.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No messages found for the selected filter.
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMessagesAdmin;
