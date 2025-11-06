import DogIllustration from "@/components/DogIllustration";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-50 to-rose-100 text-amber-900">
      <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-6 py-16 sm:px-12">
        <div className="w-full rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur-md sm:p-14">
          <div className="flex flex-col items-center gap-10">
            <DogIllustration className="h-auto w-full max-w-2xl drop-shadow-xl" />
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Sunny Afternoon Pup
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-amber-900/80 sm:text-xl">
                A cheerful pup basking in the glow of a warm afternoon. This
                layered SVG illustration is built entirely with code—no photos,
                just shapes, color, and a little imagination.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
