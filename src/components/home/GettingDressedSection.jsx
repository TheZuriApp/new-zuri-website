import p1Image from "../../assets/HomePage/p1.png";
import p2Image from "../../assets/HomePage/p2.png";
import p3Image from "../../assets/HomePage/p3.png";
import p4Image from "../../assets/HomePage/p4.png";
import ShimmerImage from "./ShimmerImage";

export default function GettingDressedSection() {
  return (
    <section className="rounded-3xl bg-white px-0 py-7 sm:py-8 md:mt-8 md:px-6 md:py-16">
      <h2 className="mb-6 text-center text-[1.3125rem] font-normal leading-[1.14] tracking-tight text-[#2A2A2A] sm:mb-7 sm:text-[1.375rem] min-[400px]:text-[1.45rem] md:mb-12 md:text-[clamp(2rem,3.5vw,2.8rem)]">
        Getting dressed
        <br />
        should feel this easy
      </h2>
      <div
        style={{
          gridTemplateColumns: "1fr 1.35fr 1fr",
          gridTemplateRows: "1fr 1fr",
          gap: "20px",
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "16px",
          // fontFamily: "'Söhne', 'Helvetica Neue', sans-serif",
        }}
        className="hidden md:grid"
      >
        {/* Card 1 — Left, spans 2 rows */}
        <article
          style={{
            gridColumn: "1",
            gridRow: "1 / 3",
            backgroundColor: "#EEEEEE",
            borderRadius: "18px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              padding: "16px 18px 12px",
              fontSize: "21px",
              fontWeight: "500",
              lineHeight: "1.4",
              color: "#000000",
              flexShrink: 0,
            }}
          >
            Look like your most
            <br />
            confident, fabulous self
          </p>
          <div style={{ flex: 1, overflow: "hidden", marginLeft: "24px" }}>
            <ShimmerImage
              src={p1Image}
              alt="Confident woman at dinner"
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                borderRadius: "18px 0 18px 0",
              }}
            />
          </div>
        </article>

        {/* Card 2 — Middle top */}
        <article
          style={{
            gridColumn: "2",
            gridRow: "1",
            backgroundColor: "#EEEEEE",
            borderRadius: "18px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              padding: "16px 18px 12px",
              fontSize: "21px",
              fontWeight: "500",
              lineHeight: "1.4",
              color: "#000000",
              flexShrink: 0,
            }}
          >
            Walk in knowing your outfit looks right
          </p>
          <div style={{ flex: 1, overflow: "hidden", marginLeft: "40px" }}>
            <ShimmerImage
              src={p2Image}
              alt="Woman with coffee at home"
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                borderRadius: "18px 0 18px 0",
              }}
            />
          </div>
        </article>

        {/* Card 3 — Middle bottom */}
        <article
          style={{
            gridColumn: "2",
            gridRow: "2",
            backgroundColor: "#EEEEEE",
            borderRadius: "18px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              padding: "16px 18px 12px",
              fontSize: "21px",
              fontWeight: "500",
              lineHeight: "1.4",
              color: "#000000",
              flexShrink: 0,
            }}
          >
            Decide what to wear in seconds
          </p>
          <div style={{ flex: 1, overflow: "hidden", marginLeft: "40px" }}>
            <ShimmerImage
              src={p3Image}
              alt="Woman working out"
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
                borderRadius: "18px 0 18px 0",
              }}
            />
          </div>
        </article>

        {/* Card 4 — Right, spans 2 rows */}
        <article
          style={{
            gridColumn: "3",
            gridRow: "1 / 3",
            backgroundColor: "#EEEEEE",
            borderRadius: "18px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p
            style={{
              margin: 0,
              padding: "16px 18px 12px",
              fontSize: "21px",
              fontWeight: "500",
              lineHeight: "1.4",
              color: "#000000",
              flexShrink: 0,
            }}
          >
            Get compliments more often
          </p>
          <div
            style={{
              flex: 1,
              overflow: "hidden",
              marginLeft: "24px",
              borderRadius: "18px 0 18px 0",
            }}
          >
            <ShimmerImage
              src={p4Image}
              alt="Professional woman"
              loading="lazy"
              decoding="async"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </div>
        </article>
      </div>
      <div className="mx-auto grid w-full max-w-lg grid-cols-2 gap-2.5 px-0 min-[380px]:gap-3 min-[420px]:max-w-xl min-[420px]:gap-3.75 md:hidden">
        {[
          {
            text: "Look like your most confident, fabulous self",
            img: p1Image,
          },
          { text: "Walk in knowing your outfit looks right", img: p2Image },
          { text: "Decide what to wear in seconds", img: p3Image },
          { text: "Get compliments more often", img: p4Image },
        ].map((item, idx) => (
          <article
            key={idx}
            className="flex min-h-0 flex-col rounded-xl bg-[#EEEEEE] px-1 pb-1 pt-2.5 min-[400px]:px-1.5 min-[400px]:pt-3.5"
          >
            <p className="mb-2.5 min-h-[2.35rem] flex-1 px-0.5 text-center text-[0.765625rem] font-medium leading-[1.14] tracking-[-0.02em] text-black min-[360px]:text-[0.8125rem] min-[400px]:mb-3 min-[400px]:min-h-10 min-[400px]:px-1 min-[400px]:text-[0.84375rem]">
              {item.text}
            </p>

            <div className="mt-auto w-full overflow-hidden rounded-lg">
              <ShimmerImage
                src={item.img}
                alt={item.text}
                loading="lazy"
                decoding="async"
                className="aspect-161/204 w-full object-cover object-top"
              />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
