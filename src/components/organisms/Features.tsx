import { type Component, createSignal } from "solid-js";
import { FeatureContent, FeatureImage, FeatureTab, SectionHeader } from "../molecules";
import type { Feature, FeatureTab as TFeatureTab } from "../../types";
import { features } from "../../helpers/data";

const Features: Component = () => {
  const [activeTab, setActiveTab] = createSignal<TFeatureTab>("Simple Bookmarking");
  const [selectedFeature, setSelectedFeature] = createSignal<Omit<Feature, "name">>(
    [...features].shift() as Feature
  );
  const tabs = features.map((feature) => feature.name);

  const tabChange = (selectedTab: TFeatureTab) => {
    setActiveTab(selectedTab);
    setSelectedFeature(features.find((feature) => feature.name === selectedTab) as Feature);
  };

  return (
    <section class="flex flex-col gap-y-8">
      <SectionHeader
        heading="Features"
        description="Our aim is to make it quick and easy for you to access your favourite websites. Your
        bookmarks sync between your devices so you can access them on the go."
      />
      <FeatureTab tabs={tabs} activeTab={activeTab} tabChange={tabChange} />
      <div class="flex flex-col gap-y-20 md:gap-y-28 items-center min-h-[30rem] lg:flex-row lg:gap-x-12 xl:gap-x-32">
        <FeatureImage class="lg:basis-1/2 xl:basis-full mt-12" selectedFeature={selectedFeature} />
        <FeatureContent class="lg:basis-1/2 xl:basis-10/12" selectedFeature={selectedFeature} />
      </div>
    </section>
  );
};

export default Features;
