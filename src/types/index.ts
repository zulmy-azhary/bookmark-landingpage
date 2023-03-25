export type FeatureTab = "Simple Bookmarking" | "Speedy Searching" | "Easy Sharing";

export type Feature = {
  id: number;
  name: FeatureTab;
  title: string;
  description: string;
  image: string;
};
