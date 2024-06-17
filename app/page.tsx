import {FlipWords} from "@/components/animation/flip-words";

export default function Home() {
    const words = ["Software Engineer", "Backend Engineer", "Frontend Engineer", "DevOps Engineer"];

    return (
        <>
            <main className="h-fit flex justify-center items-center">
                <div className="w-full text-center mt-8">
                    <h3 className="text-xl text-center">Hello, It's me</h3>
                    <h2 className="text-2xl text-center">Liteboho James Moalosi</h2>
                    <h3 className="text-xl flex gap-x-2 justify-center items-center">
                        <span>And {"I'm"} a</span>
                        <FlipWords words={words} className="text-primary"/>
                    </h3>
                    <p>And one of the best where I come from.</p>
                </div>
            </main>
        </>
    );
}
