import React from 'react';
import { 
  Code2, 
  Globe, 
  Bot, 
  Zap, 
  Brain, 
  MessageSquare, 
  Award 
} from 'lucide-react';
import { GithubIcon, PythonIcon } from './Icons';

export default function CertificationIcon({ iconType, size = 22, color = 'currentColor', className = '' }) {
  switch (iconType) {
    case 'python':
      return <PythonIcon size={size} color={color} className={className} />;
    case 'code':
      return <Code2 size={size} color={color} className={className} />;
    case 'globe':
      return <Globe size={size} color={color} className={className} />;
    case 'robot':
      return <Bot size={size} color={color} className={className} />;
    case 'github':
      return <GithubIcon size={size} color={color} className={className} />;
    case 'bolt':
      return <Zap size={size} color={color} className={className} />;
    case 'brain':
      return <Brain size={size} color={color} className={className} />;
    case 'comments':
      return <MessageSquare size={size} color={color} className={className} />;
    default:
      return <Award size={size} color={color} className={className} />;
  }
}
