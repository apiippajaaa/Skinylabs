import CTASection from "./(pages)/Home/CTASection";
import ExploreCategories from "./(pages)/Home/ExploreCategories";
import FeaturedAssets from "./(pages)/Home/FeaturedAssets";
import HomepageCarousel from "./(pages)/Home/HomepageCarousel";
import HowWeWork from "./(pages)/Home/HowWeWork";
import TechStack from "./(pages)/Home/TechStack";
import WhySkinylabs from "./(pages)/Home/WhySkinylabs";

export default function Home() {
  return (
    <main>
      <HomepageCarousel />
      <ExploreCategories />
      {/* <FeaturedAssets /> */}
      <WhySkinylabs />
      <TechStack />
      <HowWeWork />
      <CTASection />
    </main>
  );
}
