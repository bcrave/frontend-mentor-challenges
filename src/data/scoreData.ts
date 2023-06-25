import reaction from "../assets/images/icon-reaction.svg";
import memory from "../assets/images/icon-memory.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

export type ScoreData = {
  category: string;
  score: number;
  icon: string;
};

export const scoreData: ScoreData[] = [
  {
    category: "Reaction",
    score: 80,
    icon: reaction,
  },
  {
    category: "Memory",
    score: 92,
    icon: memory,
  },
  {
    category: "Verbal",
    score: 61,
    icon: verbal,
  },
  {
    category: "Visual",
    score: 72,
    icon: visual,
  },
];
