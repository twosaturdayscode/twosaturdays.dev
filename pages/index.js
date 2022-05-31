import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold sm:text-2xl">About me</h2>
        <p className="pl-2 text-zinc-700">
          Hi! I’m Alì! I am a web developer based in Milano, Italy. From
          Egyptian parents, born in Italy, I never felt to belong to either
          country so I define myself simply as: Mediterranean.
          <br />
          <br />
          I have fun looking for simple and above all beatiful solutions
          creating things that not only works ⚙️ but feels great too! I like to
          learn new concepts about anything that comes at my hand, cooking 🥘,
          exchange thoughts and ideas 💡, hangout with friends, spend time with
          my wife and my newborn!
          <br />
          <br />
          Currently I am employed @sensei
        </p>
      </div>
    </>
  );
}
