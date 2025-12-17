import React, { useEffect } from 'react';

export default function UglyTShirt() {
  useEffect(() => {
    document.title = 'Ugly T-Shirt - Struggle Bus';
  }, []);

  return (
    <div className="bg-purple-900 min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl md:text-6xl text-center text-yellow-300 font-bold mb-8 animate-bounce font-serif">
        Your Ugly T-Shirt Design
      </h1>
      
      <div className="border-8 border-dashed border-yellow-500 p-4 bg-white rounded-lg shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
        <svg 
          viewBox="0 0 500 500" 
          className="w-full max-w-lg h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Background Pattern - Clashing Colors */}
          <rect width="500" height="500" fill="#FF00FF" />
          <path d="M0,0 L500,500 M500,0 L0,500" stroke="#00FF00" strokeWidth="20" opacity="0.5" />
          
          {/* The Road - Wavy and Uneven */}
          <path d="M0,400 Q100,350 250,420 T500,380 V500 H0 Z" fill="#808080" />
          
          {/* The Bus Body - Distorted */}
          <path 
            d="M50,280 Q250,330 450,280 L440,180 Q250,130 60,180 Z" 
            fill="#FFD700" 
            stroke="black" 
            strokeWidth="8" 
          />
          
          {/* Bus Stripe */}
          <path d="M55,230 Q250,280 445,230" stroke="black" strokeWidth="5" fill="none" />

          {/* Windows - Mismatched */}
          <rect x="80" y="190" width="50" height="40" fill="#87CEEB" stroke="black" strokeWidth="4" transform="rotate(-5 105 210)" />
          <rect x="160" y="195" width="50" height="40" fill="#87CEEB" stroke="black" strokeWidth="4" transform="rotate(5 185 215)" />
          <rect x="240" y="190" width="50" height="40" fill="#87CEEB" stroke="black" strokeWidth="4" transform="rotate(-2 265 210)" />
          <rect x="320" y="195" width="50" height="40" fill="#87CEEB" stroke="black" strokeWidth="4" transform="rotate(8 345 215)" />

          {/* Stick Figure Driver - Stressed */}
          <circle cx="105" cy="210" r="10" fill="white" stroke="black" strokeWidth="2" />
          <path d="M100,208 L105,210 L110,208" stroke="black" strokeWidth="2" fill="none" /> {/* Eyes */}
          <path d="M102,215 Q105,212 108,215" stroke="black" strokeWidth="2" fill="none" /> {/* Mouth */}
          <path d="M90,200 L100,210" stroke="black" strokeWidth="2" /> {/* Arms flailing */}
          <text x="100" y="180" fontSize="20" fill="black">😱</text>

          {/* Wheels - Square/Flat */}
          <rect x="80" y="300" width="70" height="70" fill="#333" stroke="black" strokeWidth="3" transform="rotate(15 115 335)" />
          <rect x="340" y="290" width="70" height="70" fill="#333" stroke="black" strokeWidth="3" transform="rotate(-15 375 325)" />
          
          {/* Hubcaps - Triangle */}
          <path d="M115,315 L135,355 L95,355 Z" fill="silver" transform="rotate(15 115 335)" />
          <path d="M375,305 L395,345 L355,345 Z" fill="silver" transform="rotate(-15 375 325)" />

          {/* Text - Top */}
          <text 
            x="250" 
            y="100" 
            fontFamily="Comic Sans MS, Chalkboard SE, sans-serif" 
            fontSize="45" 
            textAnchor="middle" 
            fill="#00FF00" 
            stroke="black" 
            strokeWidth="3" 
            transform="rotate(-5 250 100)"
            style={{ textShadow: "4px 4px 0px #FF0000" }}
          >
            ALL ABOARD THE
          </text>

          {/* Text - Bottom */}
          <text 
            x="250" 
            y="460" 
            fontFamily="Comic Sans MS, Chalkboard SE, sans-serif" 
            fontSize="55" 
            fontWeight="bold"
            textAnchor="middle" 
            fill="#00FFFF" 
            stroke="black" 
            strokeWidth="3" 
            transform="rotate(3 250 460)"
            style={{ textShadow: "5px 5px 0px #FF00FF" }}
          >
            STRUGGLE BUS
          </text>
          
          {/* Chaos Elements - Fire and Smoke */}
          <path d="M420,250 Q450,230 440,210 Q460,220 470,200" stroke="gray" strokeWidth="4" fill="none" />
          <circle cx="440" cy="280" r="20" fill="orange" opacity="0.8">
            <animate attributeName="r" values="20;25;20" dur="1s" repeatCount="indefinite" />
          </circle>
          <circle cx="450" cy="270" r="15" fill="red" opacity="0.8">
             <animate attributeName="cy" values="270;260;270" dur="0.5s" repeatCount="indefinite" />
          </circle>

          {/* Tears coming from the bus headlight area */}
          <path d="M60,250 Q50,260 60,280" stroke="blue" strokeWidth="3" fill="none" />
          <circle cx="60" cy="285" r="3" fill="blue" />

        </svg>
      </div>
      
      <p className="mt-6 text-white text-xl font-mono text-center max-w-lg">
        Right-click the image and select "Save Image As" to print this masterpiece!
      </p>

      <button 
        onClick={() => window.print()}
        className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-full transform hover:scale-110 transition-all shadow-lg"
      >
        Print Page
      </button>
    </div>
  );
}
