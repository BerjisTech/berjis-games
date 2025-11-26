import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
  private games: Game[] = [
    {
      id: '1',
      name: 'The Human Knot',
      slug: 'human-knot',
      primarySkill: 'Problem-Solving',
      howToPlay: 'Team stands in a circle, joins hands with two different people across from them, and must untangle into a circle without letting go.',
      detailedInstructions: [
        'Gather everyone in a tight circle, standing shoulder to shoulder',
        'Each person reaches out with their right hand and grabs someone else\'s hand across the circle (not the person next to them)',
        'Then reach out with the left hand and grab a different person\'s hand',
        'Now the group is tangled! The goal is to untangle into a perfect circle without letting go of hands',
        'Players can step over or under arms, twist and turn, but cannot release their grip',
        'Communication is key - talk through the moves together',
        'The game ends when the group successfully forms a circle (or two separate circles)'
      ],
      tips: [
        'Start slow - rushing leads to more tangles',
        'Designate a "leader" to help coordinate moves',
        'It\'s okay to rotate wrists to avoid discomfort',
        'Sometimes you end up with two circles instead of one - that\'s fine!',
        'Great icebreaker for groups who don\'t know each other well'
      ],
      playerCount: '6-20 players',
      duration: '10-20 minutes',
      difficulty: 'Medium',
      color: '#FF6B6B',
      icon: '🔗'
    },
    {
      id: '2',
      name: 'Reverse Charades',
      slug: 'reverse-charades',
      primarySkill: 'Communication & Creativity',
      howToPlay: 'One person guesses while the rest of the team acts out a word or phrase simultaneously.',
      detailedInstructions: [
        'Split into teams (works best with 4-8 people per team)',
        'One person from the team is the guesser, everyone else are actors',
        'Show the actors a word or phrase (write it on paper or use cards)',
        'Set a timer for 1-2 minutes',
        'All actors perform the word/phrase at the same time - chaos ensues!',
        'The guesser tries to figure out what\'s being acted out',
        'Teams take turns, earning points for correct guesses',
        'The team with the most points wins'
      ],
      tips: [
        'The chaos is the fun part - embrace it!',
        'Use simple words for warm-up rounds',
        'Categories: movies, animals, occupations, actions work great',
        'Actors can make sounds but not words',
        'Perfect for high-energy groups',
        'Film it - the footage is always hilarious'
      ],
      playerCount: '6-20 players',
      duration: '15-30 minutes',
      difficulty: 'Easy',
      color: '#4ECDC4',
      icon: '🎭'
    },
    {
      id: '3',
      name: 'Conducted Story',
      slug: 'conducted-story',
      primarySkill: 'Creativity & Quick Thinking',
      howToPlay: 'Team stands in a circle and creates a coherent story one sentence at a time, often with a conductor moving the action.',
      detailedInstructions: [
        'Everyone stands in a circle',
        'Choose one person to be the "conductor" (optional)',
        'Pick a story theme or let it evolve naturally',
        'The first person starts the story with one sentence',
        'Going around the circle, each person adds one sentence',
        'If using a conductor, they can point to random people to keep it unpredictable',
        'The conductor can also speed up (rapid-fire sentences) or slow down',
        'Try to keep the story coherent while building on what came before',
        'End after 5-10 minutes or when the story reaches a natural conclusion'
      ],
      tips: [
        'Use "Yes, and..." improv principle - build on ideas, don\'t negate them',
        'Start with a theme: "zombie apocalypse," "first day at wizard school," etc.',
        'Conductor variation: introduce challenges like "rhyme time" or "everything is a question"',
        'Record the audio - the story is often funnier when played back',
        'Great for creative groups or as a writing exercise'
      ],
      playerCount: '5-15 players',
      duration: '10-20 minutes',
      difficulty: 'Medium',
      color: '#FFE66D',
      icon: '📖'
    },
    {
      id: '4',
      name: 'Silent Line-Up',
      slug: 'silent-lineup',
      primarySkill: 'Non-Verbal Communication',
      howToPlay: 'Team must line up in order (by birthday, height, etc.) without speaking a single word.',
      detailedInstructions: [
        'Announce the lineup challenge (birthday, height, age, alphabetically by middle name, etc.)',
        'From this moment, NO ONE can speak or make vocal sounds',
        'Players must use only gestures, hand signals, and non-verbal communication',
        'Set a time limit (5-10 minutes depending on group size)',
        'Once everyone thinks they\'re in the correct order, check the results',
        'Anyone caught talking restarts the challenge',
        'Celebrate creativity in communication methods'
      ],
      tips: [
        'Birthday lineup is classic - just month and day, not year',
        'Height is easiest, save it for first round',
        'Try alphabetically by favorite food for extra challenge',
        'Watch for creative solutions - writing in the air, using fingers for numbers',
        'Great for team building - requires trust and patience',
        'Up the difficulty: do it blindfolded (with safety precautions)'
      ],
      playerCount: '5-30 players',
      duration: '5-15 minutes',
      difficulty: 'Easy',
      color: '#A8DADC',
      icon: '🤫'
    },
    {
      id: '5',
      name: 'The Counting Game',
      slug: 'counting-game',
      primarySkill: 'Focus & Team Rhythm',
      howToPlay: 'Team sits in a circle and tries to count to 20, with no two people speaking the same number at the same time. If they do, they start over.',
      detailedInstructions: [
        'Everyone sits in a circle, eyes closed or looking down',
        'The goal is to count from 1 to 20 as a group',
        'Anyone can say the next number at any time',
        'BUT if two or more people say the same number simultaneously, restart from 1',
        'No patterns allowed - can\'t go around the circle in order',
        'No hand signals or planned coordination',
        'Success requires the group to develop an intuitive rhythm',
        'Celebrate if you reach 20 - it\'s harder than it sounds!'
      ],
      tips: [
        'Start with a lower number (10) for beginners',
        'The game gets hilarious as tension builds around number 18-20',
        'Encourage patience - rushing causes overlaps',
        'Some groups develop an organic rhythm after several attempts',
        'Perfect for mindfulness and group bonding',
        'Try with eyes closed for extra difficulty',
        'Advanced: count backwards from 20 to 1'
      ],
      playerCount: '5-15 players',
      duration: '10-20 minutes',
      difficulty: 'Hard',
      color: '#F4A261',
      icon: '🔢'
    },
    {
      id: '6',
      name: 'Back Drawing',
      slug: 'back-drawing',
      primarySkill: 'Communication & Interpretation',
      howToPlay: 'One person draws a picture on the back of the person in front of them, who then draws what they felt on the next person\'s back. The last person guesses the final drawing.',
      detailedInstructions: [
        'Line up in single file, all facing the same direction',
        'The person at the back sees a simple drawing/word on a card',
        'Using their finger, they draw what they see on the back of the person in front',
        'That person interprets what they felt and draws it on the next person\'s back',
        'This continues down the line',
        'The person at the front draws what they felt on paper',
        'Reveal the original image and compare - usually hilarious results!',
        'Rotate positions so everyone gets to be at different spots in line'
      ],
      tips: [
        'Start with simple shapes: star, heart, house, sun',
        'Draw slowly and clearly - pressure matters more than speed',
        'Use simple images: cat, tree, car, smiley face',
        'The degradation of the image is where the comedy lies',
        'Try words or letters for extra difficulty',
        'Works great with kids and adults alike',
        'Take photos of each iteration for a funny progression'
      ],
      playerCount: '5-10 players',
      duration: '10-15 minutes',
      difficulty: 'Easy',
      color: '#E76F51',
      icon: '✏️'
    },
    {
      id: '7',
      name: 'Word-by-Word Story',
      slug: 'word-by-word-story',
      primarySkill: 'Quick Thinking & Creativity',
      howToPlay: 'Similar to Conducted Story, but each person only adds one word at a time to build a sentence or story.',
      detailedInstructions: [
        'Sit in a circle or arrange yourselves in an order',
        'First person says one word to start the story',
        'Going around, each person adds exactly ONE word',
        'Try to keep the story coherent and grammatically sound',
        'If someone hesitates too long (more than 5 seconds), they\'re out',
        'Continue for several rounds or until the story reaches a conclusion',
        'Option: after a sentence ends (someone says a word with period inflection), start a new sentence',
        'Laugh at the bizarre directions the story takes'
      ],
      tips: [
        'This is MUCH harder than sentence-by-sentence',
        'Embrace the chaos - stories will get weird',
        'Fast pace keeps energy high',
        'Common pitfall: people try to force their planned idea, leads to nonsense',
        'Great drinking game variation (optional)',
        'Can be played competitively - last person standing wins',
        'Record it and read it back - always entertaining'
      ],
      playerCount: '4-12 players',
      duration: '15-25 minutes',
      difficulty: 'Medium',
      color: '#9D4EDD',
      icon: '💬'
    }
  ];

  getAll(): Game[] {
    return this.games;
  }

  getBySlug(slug: string): Game | undefined {
    return this.games.find(game => game.slug === slug);
  }
}
