import ExploreCategories from "./(pages)/Home/ExploreCategories";
import FeaturedAssets from "./(pages)/Home/FeaturedAssets";
import HomepageCarousel from "./(pages)/Home/HomepageCarousel";
import WhySkinylabs from "./(pages)/Home/WhySkinylabs";

export default function Home() {
  return (
    <main>
      <HomepageCarousel />
      <ExploreCategories />
      <FeaturedAssets />
      <WhySkinylabs />
    </main>
  );
}
