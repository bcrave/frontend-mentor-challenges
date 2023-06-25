export type ScoreData = {
  category: string;
  score: number;
  icon: string;
};

export const scoreData: ScoreData[] = [
  {
    category: "Reaction",
    score: 80,
    icon: "../../public/images/icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "../../public/images/icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "../../public/images/icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "../../public/images/icon-visual.svg",
  },
];
