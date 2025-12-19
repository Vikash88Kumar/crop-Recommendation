import React, { useState, useRef, useEffect } from "react";
import {
  Send,
  Bot,
  User,
  Mic,
  Paperclip,
  MoreVertical,
  Lightbulb,
  Calendar,
  BookOpen,
  Globe,
  Loader2,
} from "lucide-react";

/* ---------------- BASIC UI COMPONENTS ---------------- */

// Button
const Button = ({
  children,
  className = "",
  variant = "default",
  size = "md",
  disabled,
  ...props
}) => {
  const base =
    "inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none disabled:opacity-50";
  const variants = {
    default: "bg-slate-900 text-white hover:bg-slate-800",
    outline:
      "border border-slate-300 text-slate-700 hover:bg-slate-50",
    ghost: "text-slate-500 hover:bg-slate-100",
  };
  const sizes = {
    sm: "px-2.5 py-1.5 text-sm",
    md: "px-4 py-2 text-sm",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

// Input
const Input = React.forwardRef(({ className = "", ...props }, ref) => (
  <input
    ref={ref}
    className={`w-full rounded-lg border border-slate-300 px-3 py-2 text-sm
    focus:outline-none focus:ring-2 focus:ring-slate-900 ${className}`}
    {...props}
  />
));

// Scroll Area
const ScrollArea = ({ className = "", children }) => (
  <div className={`overflow-y-auto ${className}`}>{children}</div>
);

// Language Select
const Select = ({ value, onValueChange, options }) => {
  const [open, setOpen] = useState(false);
  const selected = options.find((o) => o.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center gap-2 border rounded-lg px-3 py-2 text-sm bg-white hover:bg-slate-50"
        onClick={() => setOpen(!open)}
      >
        <Globe className="w-4 h-4" />
        {selected?.label}
        <span className="ml-2">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-full bg-white border rounded-lg shadow z-10">
          {options.map((opt) => (
            <button
              key={opt.value}
              className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-100"
              onClick={() => {
                onValueChange(opt.value);
                setOpen(false);
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/* ---------------- CHATBOT ---------------- */

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: "1",
      content:
        "Hello! I’m your virtual farming advisor. I can help with crop planning, soil health, diseases, and best farming practices. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
      suggestions: [
        "Crop recommendations",
        "Disease diagnosis",
        "Soil management",
        "Weather advice",
      ],
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState("en");
  const messagesEndRef = useRef(null);

  const quickSuggestions = [
    "Best crop for Kharif season?",
    "How to treat tomato blight?",
    "Ideal soil pH for rice?",
    "When to fertilize wheat?",
    "Drip irrigation setup",
  ];

  const languages = [
    { value: "en", label: "English" },
    { value: "hi", label: "हिंदी" },
    { value: "ta", label: "தமிழ்" },
    { value: "te", label: "తెలుగు" },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const generateBotResponse = (text) => {
    const msg = text.toLowerCase();
    if (msg.includes("crop"))
      return {
        content:
          "Recommended crops include **Rice**, **Maize**, and **Tomato** based on your conditions.\nWould you like a detailed guide?",
        suggestions: ["Rice guide", "Tomato tips", "Soil preparation"],
      };
    if (msg.includes("disease"))
      return {
        content:
          "For tomato blight:\n• Apply Mancozeb (2g/L)\n• Avoid overhead irrigation",
        suggestions: ["Organic solution", "Prevention tips"],
      };
    if (msg.includes("soil"))
      return {
        content:
          "Ideal soil pH for rice is **6.0 – 7.0**.\nRegular soil testing is recommended.",
        suggestions: ["Soil testing", "Fertilizer plan"],
      };
    return {
      content:
        "I can help with crops, soil health, irrigation, or pest control. What would you like to explore?",
      suggestions: ["Crop planning", "Irrigation help"],
    };
  };

  const handleSend = () => {
    if (!inputMessage.trim()) return;

    const userMsg = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const res = generateBotResponse(userMsg.content);
      const botMsg = {
        id: (Date.now() + 1).toString(),
        content: res.content,
        sender: "bot",
        timestamp: new Date(),
        suggestions: res.suggestions,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="w-full mx-auto p-6 space-y-6">
        {/* HEADER */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold text-slate-900">
              Virtual Farming Advisor
            </h1>
            <p className="text-xl text-slate-500">
              AI-powered agriculture assistance
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* SIDEBAR */}
          <div className="bg-white rounded-xl border shadow-sm p-4">
            <h2 className="text-xs font-semibold text-slate-500 uppercase mb-3">
              Quick Questions
            </h2>

            <div className="space-y-2">
              {quickSuggestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => setInputMessage(q)}
                  className="w-full text-left text-sm px-3 py-2 rounded-lg border hover:bg-slate-50"
                >
                  {q}
                </button>
              ))}
            </div>  
          </div>

          {/* CHAT */}
          <div className="lg:col-span-3 bg-white rounded-xl border shadow-sm flex flex-col h-[650px]">
            {/* CHAT HEADER */}
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-slate-900 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">
                    FarmerAI Assistant
                  </h3>
                  <p className="text-xs text-emerald-600">
                    Online • Ready to help
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm">
              </Button>
            </div>

            {/* MESSAGES */}
            <ScrollArea className="flex-1 p-5 space-y-6">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div className="max-w-[70%] space-y-1">
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm ${
                        msg.sender === "user"
                          ? "bg-slate-900 text-white rounded-br-md"
                          : "bg-slate-100 text-slate-900 rounded-bl-md"
                      }`}
                    >
                      {msg.content}
                    </div>
                    <p className="text-xs text-slate-400">
                      {msg.timestamp.toLocaleTimeString()}
                    </p>

                    {msg.suggestions && (
                      <div className="flex flex-wrap gap-2">
                        {msg.suggestions.map((s, i) => (
                          <button
                            key={i}
                            onClick={() => setInputMessage(s)}
                            className="text-xs px-3 py-1 rounded-full border text-slate-600 hover:bg-slate-100"
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-slate-500">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Assistant is typing…</span>
                </div>
              )}

              <div ref={messagesEndRef} />
            </ScrollArea>

            {/* INPUT */}
            <div className="border-t px-4 py-3 flex items-center gap-2">
              <Button variant="ghost" size="sm">
              </Button>

              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder="Type your message…"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />

              <Button
                onClick={handleSend}
                disabled={!inputMessage.trim() || isTyping}
              >
                {isTyping ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
