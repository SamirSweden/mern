'use client'

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

type Props = {
    role: "user" | "assistant";
    content: string;
};

export default function Markdown({ role, content }: Props) {
    return (
        <div className="my-3">
            <div className="text-xs text-gray-400 mb-1">
                {role === "user" ? "you" : "bot"}
            </div>

            <div className="text-white">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeHighlight]}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
}