export interface Game {
  id: string;
  name: string;
  slug: string;
  primarySkill: string;
  howToPlay: string;
  detailedInstructions: string[];
  tips?: string[];
  playerCount: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  youtubeUrl?: string;
  color: string;
  icon: string;
}
