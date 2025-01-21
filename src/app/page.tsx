"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { getAiResponse } from "./actions";

export default function Home() {
  type TMessage = {
    message: string;
    isCustomer: boolean;
  };
  const [conversations, setConversations] = useState<TMessage[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [conversations]);

  const [message, setMessage] = useState("");
  const handleChange = (msg: string) => {
    setMessage(msg);
  };
  const handleAiResponse = async (message: string) => {
    const response = await getAiResponse(message);
    // setConversations([
    //   ...conversations,
    //   { message: response.response, isCustomer: false },
    // ]);
    setConversations((prev) => [
      ...prev,
      { message: response.response, isCustomer: false },
    ]);
  };
  const handleSend = () => {
    setConversations((prev) => [...prev, { message, isCustomer: true }]);
    handleAiResponse(message);
    setMessage("");
  };
  return (
    <div className="max-w-4xl mx-auto pt-10 pb-10 relative h-screen flex flex-col">
      {/* intro */}
      <div className="flex flex-col gap-0.5 mb-8">
        <h2 className="font-bold text-4xl tracking-tighter">
          This is <span className="text-indigo-700">Emily</span>
        </h2>
        <h3>
          You&apos;re AI assistant. Hit me up with any questions you&apos;ve
          got!
        </h3>
      </div>
      <div
        ref={chatContainerRef}
        className="h-full flex-auto px-2  overflow-y-auto flex flex-col gap-8 "
      >
        {conversations.map((conversation, index) => (
          <div
            key={index}
            className={cn("flex  max-w-[350px] rounded py-2 px-4", {
              "ml-auto bg-indigo-600 text-indigo-50": conversation.isCustomer,
              " bg-indigo-50/50 text-indigo-700 w-max":
                !conversation.isCustomer,
            })}
          >
            <p className="">{conversation.message}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Textarea
          placeholder="Write a message..."
          value={message}
          onChange={(e) => handleChange(e.target.value)}
          submitButton={
            <Button onClick={handleSend}>
              Send <Send />
            </Button>
          }
        />
      </div>
      {/*  */}
    </div>
  );
}
