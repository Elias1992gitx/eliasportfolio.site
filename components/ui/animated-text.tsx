"use client";

import { useLayoutEffect, HTMLAttributes, useRef, forwardRef } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import gsap from "gsap";
import { cn } from "@/lib/utils";

const animatedTextVariants = cva(
  "pl-2 text-black dark:text-white text-center py-5 leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5x1 lg:text-5xl",
        lg: "text-4xl font-extrabold md:text-5x1 lg:text-6xl",
        sm: "text-xl md:text-xl lg:text-3x1",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface AnimatedTextProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof animatedTextVariants> {}

const AnimatedText = forwardRef<HTMLHeadingElement, AnimatedTextProps>(
  ({ className, size, children, ...props }, ref) => {
    const text = useRef(null);
    useLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.from(text.current, {
        scrollTrigger: {
          trigger: text.current,

          scrub: true,

          start: "bottom",

          end: "bottom+=400px bottom",
        },

        opacity: 0,

        left: "[-20%]",

        ease: "power3.Out",
      });
    }, []);

    return (
      <h1
        ref={text}
        {...props}
        className={cn(animatedTextVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);

AnimatedText.displayName = "AnimatedText";
export default AnimatedText;
