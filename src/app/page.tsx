import Link from 'next/link'; 

export default function Home() {  
  
  return (
    <>
      <div className="flex justify-center items-center h-screen gap-y-4 font-bold text-slate-600 flex-col">
        <h1 className="text-8xl">Workout Tracker</h1>
        <h2 className="text-4xl">Keep track of your routines</h2>
        <h3 className="text-3xl">Simplify your program</h3>
        <Link href={`/ui/sign-form`}>Start Here</Link>
      </div>
    </>
  );
}
