import './aboutUs.css';
import { AboutUsCard } from '../AboutUsCard';
import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpenText, Search, Headset } from "lucide-react";

export function AboutUs() {
  const cards = {
    tips: {
      name: 'Tips & Strategies',
      shortName: 'tips',
      description: "Master the art of interpreting with expert tips and proven strategies! From note-taking techniques to memory tricks, we’ve got everything you need to boost your confidence and accuracy.",
      color: 'var(--orange)',
      icon: <Search size={18} />
    },
    vocab: {
      name: 'Vocabulary',
      shortName: 'vocabulary',
      description: "Expand your language skills with essential vocabulary lists and exercises! Whether you’re tackling medical, legal, or everyday conversations, these words and phrases will help you interpret like a pro.",
      color: 'var(--green)',
      icon: <BookOpenText size={18} />
    },
    mock: {
      name: 'Mock Tests',
      shortName: '',
      description: "Put your skills to the test with realistic mock exams! Practice under real conditions, track your progress, and get ready to ace your next interpreting challenge.",
      color: 'var(--purple)',
      icon: <Headset size={18} />
    },
  };

  const [expandedCard, setExpandedCard] = useState('tips');

  const handleCardClick = (key) => {
    setExpandedCard((prev) => (prev === key ? null : key));
  };

  return (
    <div id="aboutUs" className="aboutUs__container">

      <div className="aboutUs__body">
        <div className="about__text_container">
          <h2>The <strong>Tools</strong> You Need. The <strong>Support</strong> You Deserve</h2>
          <div>Free and ready for you</div>
        </div>

        <div className="aboutUs__content">
          <div className="about__image_container">
            <img src="/images/about.jpg" alt="about_us" />
          </div>

          <div className="about__cards_container">
            {Object.entries(cards).map(([key, card]) => (
              <AboutUsCard
                key={key}
                card={card}
                isExpanded={expandedCard === key}
                onToggle={() => handleCardClick(key)}
              />
            ))}
          </div>

        </div>

      </div>


    </div>
  )
}
