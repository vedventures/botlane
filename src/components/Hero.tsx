'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);

  // Use useMemo to prevent phrases array from being recreated on each render
  const phrases = useMemo(() => [
    'Smart Automation Systems',
    'Growth-Driven Experiences',
    'Smart Marketing Engines'
  ], []);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100; // Faster when deleting
    const pauseTime = 2000; // Time to wait before deleting/starting next phrase

    if (isDeleting) {
      if (typedText === '') {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setTypedText(prev => prev.slice(0, -1));
        }, typingSpeed);
      }
    } else {
      if (typedText === currentPhrase) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      } else {
        timeout = setTimeout(() => {
          setTypedText(currentPhrase.slice(0, typedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, phraseIndex, phrases]);

  // VS Code-like colors
  const colors = {
    editor: {
      background: '#1e1e1e',      // VS Code dark theme background
      gutterBg: '#252526',        // Line number gutter background
      gutterText: '#858585',      // Line number color
      text: '#d4d4d4',            // Default text
      comment: '#6A9955',         // Comments
      keyword: '#569cd6',         // Keywords
      string: '#ce9178',          // Strings
      function: '#dcdcaa',        // Function names
      type: '#4ec9b0',           // Types
      variable: '#9cdcfe',        // Variables
      cursor: '#a6a6a6',          // Cursor color
      titleBar: '#3c3c3c',        // Title bar
      activeTab: '#1e1e1e',       // Active tab
      inactiveTab: '#2d2d2d'      // Inactive tab
    }
  };

  // Code to be typed out - wrapped in useMemo to prevent recreation on every render
  const codeSnippet = useMemo(() => [
    'import { BotLane, AIModel } from "@botlane/sdk";',
    '',
    'interface AgentConfig {',
    '  model: AIModel;',
    '  capabilities: string[];',
    '  temperature?: number;',
    '}',
    '',
    'class AIAgent {',
    '  private config: AgentConfig;',
    '',
    '  constructor(config: AgentConfig) {',
    '    this.config = config;',
    '  }',
    '',
    '  async initialize(): Promise<void> {',
    '    console.log("Initializing AI agent with model:", this.config.model);',
    '    // Implementation details...]',
    '  }',
    '',
    '  async processQuery(input: string): Promise<string> {',
    '    // Process user input and generate response',
    '    return BotLane.generateResponse(input, this.config);',
    '  }',
    '}',
    '',
    '// Create and initialize a new AI agent',
    'const agent = new AIAgent({',
    '  model: AIModel.GPT4,',
    '  capabilities: ["text-generation", "code-analysis"],',
    '  temperature: 0.7',
    '});',
    '',
    'agent.initialize().then(() => {',
    '  console.log("AI agent ready to process queries!");',
    '});'
  ], []);  // Empty dependency array means this will only be created once

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Animation state
    let frame = 0;
    let currentLine = 0;
    let currentChar = 0;
    let cursorVisible = true;
    let lastTypingTime = 0;
    let lastBlinkTime = 0;

    // Animation settings
    const TYPING_SPEED = 50;    // ms per character
    const BLINK_SPEED = 500;    // ms per blink
    const LINE_HEIGHT = 20;
    const GUTTER_WIDTH = 50;
    const PADDING = 12;

    // Set up canvas with proper DPI
    const setupCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      // Adjust font size based on screen width
      const isMobile = window.innerWidth < 640;
      const fontSize = isMobile ? '11px' : '13px';
      ctx.font = `${fontSize} "SF Mono", Monaco, Menlo, Consolas, monospace`;
      ctx.textBaseline = 'middle';
    };

    // Draw VS Code window chrome
    const drawChrome = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Title bar
      ctx.fillStyle = colors.editor.titleBar;
      ctx.fillRect(0, 0, width, 30);
      
      // Window controls (macOS style)
      [
        { color: '#ff5f57' }, // Close
        { color: '#febc2e' }, // Minimize
        { color: '#28c840' }  // Maximize
      ].forEach((control, i) => {
        ctx.beginPath();
        ctx.fillStyle = control.color;
        ctx.arc(20 + i * 25, 15, 6, 0, Math.PI * 2);
        ctx.fill();
      });

      // Tab bar
      ctx.fillStyle = colors.editor.activeTab;
      ctx.fillRect(0, 30, 200, 35);
      ctx.fillStyle = colors.editor.inactiveTab;
      ctx.fillRect(200, 30, width - 200, 35);

      // Active tab text
      ctx.fillStyle = colors.editor.text;
      ctx.font = '12px "SF Mono", Monaco, Menlo, Consolas, monospace';
      ctx.fillText('botlane.io', 20, 50);

      // Main editor area
      ctx.fillStyle = colors.editor.background;
      ctx.fillRect(0, 65, width, height - 65);

      // Line numbers gutter
      ctx.fillStyle = colors.editor.gutterBg;
      ctx.fillRect(0, 65, GUTTER_WIDTH, height - 65);
    };

    // Draw code with syntax highlighting
    const drawCode = (timestamp: number) => {
      const startY = 65 + PADDING;

      // Update typing animation
      if (timestamp - lastTypingTime > TYPING_SPEED) {
        lastTypingTime = timestamp;
        if (currentLine < codeSnippet.length) {
          if (currentChar < codeSnippet[currentLine].length) {
            currentChar++;
          } else {
            currentLine++;
            currentChar = 0;
          }
        }
      }

      // Update cursor blink
      if (timestamp - lastBlinkTime > BLINK_SPEED) {
        lastBlinkTime = timestamp;
        cursorVisible = !cursorVisible;
      }

      // Draw visible lines
      for (let i = 0; i <= currentLine; i++) {
        const y = startY + i * LINE_HEIGHT;
        const line = codeSnippet[i] || '';
        const displayText = i === currentLine ? line.slice(0, currentChar) : line;

        // Line number
        ctx.fillStyle = colors.editor.gutterText;
        ctx.textAlign = 'right';
        ctx.fillText(`${i + 1}`, GUTTER_WIDTH - 8, y + LINE_HEIGHT / 2);
        ctx.textAlign = 'left';

        // Code content
        let x = GUTTER_WIDTH + PADDING;
        const tokens = displayText.split(/(\s+|[{}[\]().,;]|"[^"]*")/g).filter(Boolean);

        tokens.forEach(token => {
          let color = colors.editor.text;

          if (token.trim() === '') {
            x += ctx.measureText(token).width;
            return;
          }

          // Syntax highlighting
          if (token.startsWith('//')) {
            color = colors.editor.comment;
          } else if (/^(import|from|interface|class|private|constructor|async|await|return)$/.test(token)) {
            color = colors.editor.keyword;
          } else if (token.startsWith('"')) {
            color = colors.editor.string;
          } else if (/^(BotLane|AIModel|AIAgent|AgentConfig)$/.test(token)) {
            color = colors.editor.type;
          } else if (/^(initialize|learn)$/.test(token)) {
            color = colors.editor.function;
          } else if (/^(config|model|capabilities|temperature|domain|expertise)$/.test(token)) {
            color = colors.editor.variable;
          }

          ctx.fillStyle = color;
          ctx.fillText(token, x, y + LINE_HEIGHT / 2);
          x += ctx.measureText(token).width;
        });

        // Draw cursor
        if (i === currentLine && cursorVisible) {
          const cursorX = GUTTER_WIDTH + PADDING + ctx.measureText(displayText).width;
          ctx.fillStyle = colors.editor.cursor;
          ctx.fillRect(cursorX, y + 4, 2, LINE_HEIGHT - 8);
        }
      }
    };

    // Animation loop
    const animate = (timestamp: number) => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      // Draw editor
      drawChrome();
      drawCode(timestamp);

      frame = requestAnimationFrame(animate);
    };

    // Initialize
    setupCanvas();
    window.addEventListener('resize', setupCanvas);
    frame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setupCanvas);
      cancelAnimationFrame(frame);
    };
  }, [
    // Include all required dependencies
    codeSnippet,
    colors.editor.activeTab,
    colors.editor.background,
    colors.editor.comment,
    colors.editor.cursor,
    colors.editor.function,
    colors.editor.gutterBg,
    colors.editor.gutterText,
    colors.editor.inactiveTab,
    colors.editor.keyword,
    colors.editor.string,
    colors.editor.text,
    colors.editor.titleBar,
    colors.editor.type,
    colors.editor.variable
  ]);

  return (
    <section className="relative overflow-hidden w-full pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20">
      {/* Decorative elements - visible on all screen sizes */}
      <div className="absolute top-12 right-0 w-24 h-24 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      <div className="absolute bottom-12 left-0 w-32 h-32 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
      
      {/* Floating geometric shapes - primarily for desktop */}
      <div className="hidden lg:block absolute top-1/4 right-10 w-8 h-8 border-4 border-purple-400 rotate-12 animate-float opacity-80"></div>
      <div className="hidden lg:block absolute bottom-1/3 right-1/4 w-6 h-6 bg-indigo-500 rounded-sm rotate-45 animate-float animation-delay-2000 opacity-70"></div>
      <div className="hidden lg:block absolute top-1/3 right-1/5 w-4 h-12 bg-gradient-to-b from-purple-400 to-indigo-600 rounded-full rotate-12 animate-float animation-delay-3000 opacity-60"></div>
      
      {/* Left side geometric shapes - desktop */}
      <div className="hidden lg:block absolute top-24 left-12 w-4 h-4 bg-purple-500 rounded-full animate-float-slow opacity-80"></div>
      <div className="hidden lg:block absolute top-36 left-28 w-6 h-6 border-2 border-indigo-400 rounded-full animate-float animation-delay-1000 opacity-70"></div>
      <div className="hidden lg:block absolute bottom-1/4 left-1/5 w-3 h-10 bg-gradient-to-t from-purple-400 to-indigo-600 rounded-full rotate-[20deg] animate-float animation-delay-4000 opacity-60"></div>
      <div className="hidden lg:block absolute bottom-1/3 left-20 w-8 h-8 border border-purple-300 rounded rotate-45 animate-spin-slow opacity-40"></div>
      
      {/* Mobile specific decorative elements */}
      <div className="lg:hidden absolute top-48 right-5 w-20 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded"></div>
      <div className="lg:hidden absolute top-56 right-10 w-14 h-1 bg-gradient-to-r from-indigo-500 to-transparent rounded"></div>
      <div className="lg:hidden absolute top-64 right-7 w-16 h-1 bg-gradient-to-r from-purple-500 to-transparent rounded"></div>
      
      {/* Left side mobile decorative elements - positioned away from text */}
      <div className="lg:hidden absolute top-16 left-2 w-12 h-1 bg-gradient-to-l from-purple-500 to-transparent rounded"></div>
      <div className="lg:hidden absolute top-20 left-4 w-8 h-1 bg-gradient-to-l from-indigo-500 to-transparent rounded"></div>
      
      {/* Dot patterns - Desktop only - Right side */}
      <div className="hidden lg:block absolute bottom-20 right-10 opacity-70">
        <div className="flex gap-2">
          {[...Array(3)].map((_, i) => (
            <div key={`dot-row-1-${i}`} className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {[...Array(5)].map((_, i) => (
            <div key={`dot-row-2-${i}`} className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {[...Array(4)].map((_, i) => (
            <div key={`dot-row-3-${i}`} className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
          ))}
        </div>
      </div>
      
      {/* Dot patterns - Desktop only - Left side */}
      <div className="hidden lg:block absolute top-16 left-16 opacity-70">
        <div className="flex gap-2">
          {[...Array(2)].map((_, i) => (
            <div key={`dot-left-row-1-${i}`} className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {[...Array(4)].map((_, i) => (
            <div key={`dot-left-row-2-${i}`} className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          {[...Array(3)].map((_, i) => (
            <div key={`dot-left-row-3-${i}`} className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-2 max-w-6xl relative z-10 py-4 md:py-6">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Left column - Text */}
          <div className="order-1 lg:order-1">
            <div className="flex flex-col gap-2 sm:gap-4 mb-4 sm:mb-4">
              <h1 className="text-4xl sm:text-4xl md:text-5xl font-bold text-[#1e1b4b]">
                Designing
              </h1>
              <div className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 inline-block w-full overflow-x-auto pb-1 no-scrollbar">
                  {typedText}
                  <span className="animate-blink">|</span>
                </span>
              </div>
            </div>
            <p className="text-base leading-relaxed sm:text-base text-gray-600 mb-4 sm:mb-6 max-w-md">
              BotLane is your strategic partner in building intelligent systems that automate, optimize, and elevate every aspect of your digital presence.
            </p>
            <div className="flex justify-start gap-3 sm:gap-4">
              <button className="w-[42%] sm:w-auto sm:flex-initial px-[9px] sm:px-[18px] py-2 sm:py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold hover:opacity-90 transition-opacity text-xs sm:text-base">
                Get Started
              </button>
              <button className="w-[42%] sm:w-auto sm:flex-initial px-[9px] sm:px-[18px] py-2 sm:py-3 rounded-lg border border-purple-600 text-purple-600 font-semibold hover:bg-purple-50 transition-colors text-xs sm:text-base">
                Learn More
              </button>
            </div>
            
            {/* Stats Section */}
            <div className="mt-5 mb-8 sm:mb-0 flex flex-wrap justify-center sm:justify-start gap-3 sm:grid sm:grid-cols-3 sm:gap-3">
              <div className="relative group w-[30%] sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative px-1 py-1.5 sm:px-2 sm:py-2.5 bg-white bg-opacity-90 rounded-md shadow-sm border border-purple-100 hover:shadow-md transition duration-300 flex flex-col items-center justify-center">
                  <div className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">98%</div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 text-center">Project Success</div>
                </div>
              </div>
              
              <div className="relative group w-[30%] sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-md blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative px-1 py-1.5 sm:px-2 sm:py-2.5 bg-white bg-opacity-90 rounded-md shadow-sm border border-indigo-100 hover:shadow-md transition duration-300 flex flex-col items-center justify-center">
                  <div className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">70+</div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 text-center">Clients Served</div>
                </div>
              </div>
              
              <div className="relative group w-[30%] sm:w-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-md blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative px-1 py-1.5 sm:px-2 sm:py-2.5 bg-white bg-opacity-90 rounded-md shadow-sm border border-purple-100 hover:shadow-md transition duration-300 flex flex-col items-center justify-center">
                  <div className="text-base sm:text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">5</div>
                  <div className="text-[8px] sm:text-[10px] md:text-xs text-gray-600 mt-0.5 text-center">Countries</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Code Editor Animation */}
          <div className="relative order-2 lg:order-2 flex justify-center sm:block">
            <div className="relative w-[90%] sm:w-full aspect-[3/2.5] sm:aspect-[3/2.2] md:aspect-[3/2] bg-[#1e1e1e] rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transform transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden">
              <canvas 
                ref={canvasRef}
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
