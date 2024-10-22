"use client";

import React, { useState } from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Grid } from "./features/grid";
import { FeatureIconContainer } from "./features/feature-icon-container";
import { IconMailFilled } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [content, setContent] = useState("");

  const sendContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !content) return;

    try {
      const response = await fetch("/api/public/mail", {
        method: "POST",
        body: JSON.stringify({
          name,
          email,
          company,
          content,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (data.success) {
        setName("");
        setEmail("");
        setCompany("");
        setContent("");
        toast({
          title: "Request sent!",
          description: "Your inquiry has been received.",
          variant: "default"
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to send your inquiry. Please try again.",
          variant: "destructive"
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <Container className="py-15 md:py-15 grid grid-cols-1 md:grid-cols-2 gap-5 px-6">
      <div>
        <div className="flex mt-4">
          <FeatureIconContainer className="flex justify-center items-center overflow-hidden">
            <IconMailFilled className="h-5 w-6 text-purple-500" />
          </FeatureIconContainer>
        </div>
        <Heading className="text-left">Contact Me</Heading>
        <Subheading className="text-left text-neutral-600 mt-12">
          The typical response time is up to 24 hours.
        </Subheading>

        <div className="text-sm mt-10">
          <p className="text-sm text-neutral-400">E-Mail</p>
          <p className="text-sm text-neutral-600">eliashailu492@gmail.com</p>
        </div>
        {/* <div className="text-sm mt-4">
          <p className="text-sm text-neutral-200">Phone</p>
          <p className="text-sm text-neutral-400">+1 (800) 123 XX21</p>
        </div> */}
        {/* <div className="text-sm mt-4">
          <p className="text-sm text-neutral-200">Support</p>
          <p className="text-sm text-neutral-400">support@proactiv.ai</p>
        </div> */}
      </div>
      <form onSubmit={sendContact} className="flex flex-col items-start gap-4 max-w-2xl w-full mx-auto bg-gradient-to-b from-neutral-900 to-neutral-950 p-10 rounded-3xl relative overflow-hidden">        <Grid size={20} />
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="name"
          >
            Name*
          </label>
          <input
            id="name"
            type="text"
            placeholder="Max Mustermann"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="email"
          >
            Your Email Address*
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.doe@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="company"
          >
            Company
          </label>
          <input
            id="company"
            type="text"
            placeholder="Musterfirma"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="h-10 pl-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <div className="mb-4 w-full relative z-20">
          <label
            className="text-neutral-300 text-sm font-medium mb-2 inline-block"
            htmlFor="message"
          >
            Message*
          </label>
          <textarea
            id="message"
            rows={5}
            placeholder="Describe your inquiry"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="pl-4 pt-4 w-full rounded-md text-sm bg-charcoal border border-neutral-800 text-white placeholder-neutral-500 outline-none focus:outline-none active:outline-none focus:ring-2 focus:ring-neutral-800"
          />
        </div>
        <Button type="submit" variant="default">Send</Button>
      </form>
    </Container>
  );
};
