export function Hero() {
  return (
    <div className="w-md flex flex-col items-center gap-6">
      <div className="p-4">
        <div className="text-left px-4">
          <span className="text-md uppercase tracking-widest text-gray-500 text-left">Hi, I'm Djaomananjara Djenidi</span>
        </div>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-9xl font-semibold color-{#222222} uppercase">Fullstack Developer</h1>
        </div>
      </div>
      <img src="./src/djenidi-removebg-preview.png" alt="djenidi" className="fixed w-90 top-26 right-50" />
    </div>
  );
}