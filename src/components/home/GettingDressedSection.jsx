import p1Image from '../../assets/HomePage/p1.png'
import p2Image from '../../assets/HomePage/p2.png'
import p3Image from '../../assets/HomePage/p3.png'
import p4Image from '../../assets/HomePage/p4.png'

export default function GettingDressedSection() {
    return (
        <section className="rounded-3xl bg-white px-4 py-11 md:mt-8 md:px-6 md:py-16">
            <h2 className="mb-8 text-center text-[1.55rem] font-normal leading-tight tracking-tight text-[#2A2A2A] md:mb-12 md:text-[clamp(2rem,3.5vw,2.8rem)]">
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
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.09)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
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
                        Look like your most<br />confident, fabulous self
                    </p>
                    <div style={{ flex: 1, overflow: "hidden", marginLeft: "24px" }}>
                        <img
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
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.09)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
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
                        <img
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
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.09)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
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
                        <img
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
                        transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        cursor: "pointer",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 16px 40px rgba(0,0,0,0.09)";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
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
                    <div style={{ flex: 1, overflow: "hidden", marginLeft: "24px", borderRadius: "18px 0 18px 0" }}>
                        <img
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
            <div className="grid grid-cols-2 gap-3 md:hidden px-2">

                {[
                    { text: "Look like your most confident, fabulous self", img: p1Image },
                    { text: "Walk in knowing your outfit looks right", img: p2Image },
                    { text: "Decide what to wear in seconds", img: p3Image },
                    { text: "Get compliments more often", img: p4Image },
                ].map((item, idx) => (

                    <article
                        key={idx}
                        className="bg-[#F3F3F3] rounded-[8px] p-2.5 flex flex-col items-center justify-between"
                    >

                        {/* Text */}
                        <p className="text-center text-[0.95rem] font-medium leading-[1] tracking-[-0.02em] text-[#1c1c1c] px-1">
                            {item.text}
                        </p>

                        {/* Image */}
                        <div className="mt-2 w-full overflow-hidden rounded-[8px]">
                            <img
                                src={item.img}
                                alt="card"
                                loading="lazy"
                                decoding="async"
                                className="w-full h-[180px] object-cover"
                            />
                        </div>

                    </article>

                ))}

            </div>
        </section>
    )
}
