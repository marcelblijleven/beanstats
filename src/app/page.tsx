import HomeNavigation from "@/components/home-navigation";
import RatioCard from "@/components/ratio-card";
import BeanconquerorCard from "@/components/bc-card";

export default async function Home() {
      return (
        <main className="flex h-full flex-col items-center p-6 md:p-24 space-y-6">
            <HomeNavigation />
            <BeanconquerorCard />
            <RatioCard />
        </main>
      )
}
