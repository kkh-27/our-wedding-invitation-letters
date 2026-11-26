import { FloralMotif } from "@/components/ui/FloralMotif";
import { InvitationExperience } from "@/components/InvitationExperience";
import { OrnamentalDivider } from "@/components/ui/OrnamentalDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";

const countdownUnits = ["ရက်", "နာရီ", "မိနစ်", "စက္ကန့်"];

const receptionDetails = [
  { order: "၀၁", label: "ရက်စွဲ", value: "ရက်စွဲ ဖြည့်သွင်းရန်" },
  { order: "၀၂", label: "အချိန်", value: "အချိန် ဖြည့်သွင်းရန်" },
  { order: "၀၃", label: "နေရာ", value: "နေရာ ဖြည့်သွင်းရန်" },
];

const galleryItems = ["ဓာတ်ပုံနေရာ ၁", "ဓာတ်ပုံနေရာ ၂", "ဓာတ်ပုံနေရာ ၃"];

export default function Home() {
  return (
    <InvitationExperience>
      <div className="site-shell">
        <header className="site-header page-container" id="cover">
          <a className="site-brand" href="#cover">
            မင်္ဂလာဖိတ်စာ
          </a>
          <nav className="site-nav" aria-label="အဓိကလမ်းညွှန်">
            <a href="#couple">နှစ်ဦးမိတ်ဆက်</a>
            <a href="#details">ပွဲအသေးစိတ်</a>
            <a href="#response">အကြောင်းပြန်ရန်</a>
          </nav>
        </header>

      <main>
        <section
          className="content-section page-container couple-section"
          id="couple"
          aria-labelledby="couple-title"
          tabIndex={-1}
        >
          <SectionHeading
            eyebrow="နှစ်ဦးမိတ်ဆက်"
            title="အမှတ်တရမိတ်ဆက်"
            description="အမည်နှင့် မိတ်ဆက်စာသားများကို နောက်ပိုင်းတွင် ဖြည့်သွင်းပါမည်။"
            id="couple-title"
          />
          <div className="couple-grid">
            {["ပုံတူနေရာလွတ် ၁", "ပုံတူနေရာလွတ် ၂"].map((label, index) => (
              <article className={`person-card person-card--${index + 1}`} key={label}>
                <div
                  className={`portrait-placeholder portrait-placeholder--${index + 1}`}
                  aria-hidden="true"
                >
                  <span className="portrait-halo" />
                  <FloralMotif className="portrait-floral" variant="corner" />
                  <span className="portrait-silhouette" />
                </div>
                <p className="person-placeholder-label">အမည် ဖြည့်သွင်းရန်</p>
                <p className="person-placeholder-copy">{label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="message-section" aria-labelledby="message-title">
          <div className="message-inner page-container">
            <FloralMotif className="message-floral" variant="botanical" />
            <SectionHeading
              eyebrow="ဖိတ်ကြားလွှာ"
              title="မေတ္တာဖြင့် ဖိတ်ကြားအပ်ပါသည်"
              description="ဖိတ်ကြားစာသားကို ဤနေရာတွင် ဖြည့်သွင်းပါမည်။"
              id="message-title"
            />
            <OrnamentalDivider />
          </div>
        </section>

        <section
          className="countdown-section content-section page-container"
          aria-labelledby="countdown-title"
        >
          <SectionHeading
            eyebrow="အချိန်ကို စောင့်မျှော်ခြင်း"
            title="မင်္ဂလာပွဲနေ့အထိ"
            description="ပွဲနေ့ကို သတ်မှတ်ပြီးနောက် ရေတွက်မှုကို ထည့်သွင်းပါမည်။"
            id="countdown-title"
          />
          <div className="countdown-grid" aria-label="ရေတွက်မှု နေရာလွတ်">
            {countdownUnits.map((unit) => (
              <div className="countdown-unit" key={unit}>
                <span className="countdown-value" aria-hidden="true">
                  —
                </span>
                <span className="countdown-label">{unit}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="details-section content-section"
          id="details"
          aria-labelledby="details-title"
        >
          <div className="page-container">
            <SectionHeading
              eyebrow="အခမ်းအနား အချက်အလက်များ"
              title="မင်္ဂလာဧည့်ခံပွဲ"
              description="နေ့ရက်၊ အချိန်နှင့် နေရာအချက်အလက်များကို ဖြည့်သွင်းပါမည်။"
              id="details-title"
            />
            <dl className="details-grid">
              {receptionDetails.map(({ label, value, order }) => (
                <div className="detail-card" key={label}>
                  <span className="detail-index" aria-hidden="true">
                    {order}
                  </span>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
            <p className="directions-placeholder">
              လမ်းညွှန်မြေပုံကို နေရာအတည်ပြုပြီးနောက် ထည့်သွင်းပါမည်။
            </p>
          </div>
        </section>

        <section
          className="gallery-section content-section page-container"
          aria-labelledby="gallery-title"
        >
          <SectionHeading
            eyebrow="အမှတ်တရပုံရိပ်များ"
            title="နှစ်ဦး၏ ဓာတ်ပုံများ"
            description="ဓာတ်ပုံများကို ရရှိသည့်အခါ ဤနေရာတွင် ထည့်သွင်းပါမည်။"
            id="gallery-title"
          />
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div className={`gallery-placeholder gallery-placeholder--${index + 1}`} key={item}>
                {index !== 1 && (
                  <FloralMotif
                    className="gallery-floral"
                    variant={index === 0 ? "corner" : "botanical"}
                  />
                )}
                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section
          className="response-section content-section"
          id="response"
          aria-labelledby="response-title"
        >
          <div className="response-panel page-container">
            <SectionHeading
              eyebrow="တက်ရောက်မှု အကြောင်းပြန်ရန်"
              title="အတူတကွ ပျော်ရွှင်စွာ ဆုံတွေ့ကြပါစို့"
              description="အကြောင်းပြန်ပုံစံကို နောက်ပိုင်းတွင် ထည့်သွင်းပါမည်။"
              id="response-title"
            />
            <FloralMotif className="response-wreath" variant="wreath" />
          </div>
        </section>

        <footer className="closing-section" aria-labelledby="closing-title">
          <FloralMotif className="closing-floral closing-floral--left" />
          <div className="closing-content page-container">
            <p className="closing-eyebrow">မေတ္တာဖြင့်</p>
            <h2 id="closing-title">ဖိတ်ကြားအပ်ပါသည်</h2>
            <p>အမှတ်တရနေ့ရက်တွင် အတူတကွ ဆုံတွေ့နိုင်ရန် မျှော်လင့်ပါသည်။</p>
            <a className="back-to-top" href="#cover">
              အပေါ်သို့ ပြန်သွားရန် ↑
            </a>
          </div>
          <FloralMotif className="closing-floral closing-floral--right" />
        </footer>
      </main>
      </div>
    </InvitationExperience>
  );
}
