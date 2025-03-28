import Footer from "@components/Footer";
import DefaultHeader from "@components/header/DefaultHeader";
import ScheduleForm from "@components/ScheduleForm";

export default function Home() {
  return (
    <main>
      <DefaultHeader />

      <section className="h-screen p-20">
        <h1 className="text-2xl font-bold mb-4">Schedule Planner</h1>

        <div className="h-full">
          <ScheduleForm /> {/* Agrega el formulario de horario aquí */}
        </div>
      </section>

      <Footer />
    </main>
  )
}
