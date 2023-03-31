export type FeatureTab = "Simple Bookmarking" | "Speedy Searching" | "Easy Sharing";

export type Feature = {
  id: number;
  name: FeatureTab;
  title: string;
  description: string;
  image: string;
};

export type Extension = {
  id: number;
  image: string;
  title: string;
  version: number;
};

export type FAQ = {
  id: number;
  title: string;
  description: string;
}