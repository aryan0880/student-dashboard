import Sidebar from "@/components/Sidebar";
import HeroTile from "@/components/HeroTile";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";
import ActivityTile from "@/components/ActivityTile";
import { BentoGrid, BentoItem } from "@/components/BentoGrid";
import MobileNav from "@/components/MobileNav";

export default async function Home() {
  const { data: courses } = await supabase
    .from("courses")
    .select("*");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white flex flex-col md:flex-row">

      <Sidebar />

      <section className="flex-1 p-6 pb-24 md:pb-6">
        <BentoGrid>

          <BentoItem className="md:col-span-2 lg:col-span-2">
            <HeroTile />
          </BentoItem>

          <BentoItem>
            <ActivityTile />
          </BentoItem>

          {courses?.map((course) => (
            <BentoItem key={course.id}>
              <CourseCard
                title={course.title}
                progress={course.progress}
                icon_name={course.icon_name}
              />
            </BentoItem>
          ))}

        </BentoGrid>
      </section>

      <MobileNav />
    </main>
  );
}