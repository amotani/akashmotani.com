import Image from "next/image";

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        hey, I'm Akash 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I am passionate about engineering, design, and building educational
        tools with AI. Over the past 10 years, I dedicated myself to deeply
        learning about finance, investing, meditation, nutrition, and fitness.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and my family at a temple in Thailand"
            src="/images/thai.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me in Thailand with elephants"
            src="/images/ele.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="View from Bahubaali Hills in Udaipur"
            src="/images/udai.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="My mom, uncle and family at Bahubaali Hills in Udaipur"
            src="/images/fam.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and my family at the Taj Mahal"
            src="/images/taj.jpg"
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My cousins at Bahubaali Hills in Udaipur"
            src="/images/fam2.jpg"
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
