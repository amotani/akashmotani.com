import Image from "next/image";
import ele from "public/images/ele.jpg";
import fam from "public/images/fam.jpg";
import fam2 from "public/images/fam2.jpg";
import taj from "public/images/taj.jpg";
import thai from "public/images/thai.jpg";
import udai from "public/images/udai.jpg";

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
            src={thai}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me in Thailand with elephants"
            src={ele}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="View from Bahubaali Hills in Udaipur"
            src={udai}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="My mom, uncle and family at Bahubaali Hills in Udaipur"
            src={fam}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me and my family at the Taj Mahal"
            src={taj}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="My cousins at Bahubaali Hills in Udaipur"
            src={fam2}
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
