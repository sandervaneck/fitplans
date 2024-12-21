import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[hsl(0,0%,99%)] min-h-screen">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-[hsl(0,93%,6%)]">Fitplans</h1>
        <div className="space-x-4">
          <Link href="mailto:sander@mychefsbase.com?subject=Fitplans%20question">
            <button className="px-4 py-2 text-sm font-medium text-[hsl(0,0%,99%)] bg-[hsl(45,90%,40%)] rounded-md">
              Contact fitplans
            </button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-8 py-20 text-center lg:text-left lg:flex lg:justify-between lg:items-center">
        <div className="max-w-lg">
          <h2 className="text-6xl font-bold text-[hsl(220,30%,6%)]">
            Fitplans
          </h2>
          <h3 className="text-2xl font-semibold text-[hsl(0,94%,18%)]">
            Tailor-made <br />
            Nutrition & Workout plans
          </h3>
          <p className="mt-4 text-[hsl(220,20%,42%)]">
            Fill in your weight, age and goals <br />
            Receive clear plans
          </p>
          <div className="mt-6 space-x-4">
            <Link href="/mealplan">
              <button className="px-4 py-2 text-[hsl(0,0%,99%)] bg-[hsl(45,90%,40%)] rounded-md">
                Nutrition plans
              </button>
            </Link>
            <Link href="/trainingplan">
              <button className="px-4 py-2 text-[hsl(0,0%,99%)] bg-[hsl(45,90%,40%)] rounded-md">
                Workout plans
              </button>
            </Link>
          </div>
        </div>
        <div className="relative mt-10 lg:mt-0">
          <Image
            src="/fitness-model.png"
            alt="Fitness Model"
            width={500}
            height={500}
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-[hsl(0,0%,99%)] p-2 rounded-md shadow-md">
            <p className="text-sm font-medium text-[hsl(220,20%,42%)]">
              1000+ satisfied users
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-6 text-center bg-[hsl(45,100%,97%)]">
        <div className="flex justify-center space-x-8">
          {/* Add footer logos or links here if needed */}
        </div>
      </footer>
    </div>
  );
}
