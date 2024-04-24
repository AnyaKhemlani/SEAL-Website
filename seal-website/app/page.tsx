import Image from "next/image";
import SectionHeading from "./components/SectionHeader";

export default function Home() {
  return (
        <div>
            <section id="about">
                <SectionHeading title="About" />
                <div className="
                ml-20
                mr-20 
          grid grid-cols-2 
          sm:grid-cols-2 
          md:grid-cols-2 
          lg:grid-cols-2 
          gap-4">
              <div>
              The objective of this policy think-tank is to create a forum of students and young professionals who are passionate about addressing systemic healthcare problems through legislation and policy making. Our group has a collective body of literature published in high-impact outlets such as Nature Medicine, Lancet, JAMA, JNCI, etc.; we are aiming to find inroads for translating our team’s collective research on health policy, economics, care delivery, and disparities into tangible policy actions. We will accomplish this by 1) researching and publishing papers on topics such as addressing the digital divide, primary care innovation, and healthcare decarbonization, 2) drafting legislation to share with local and national policymakers, and 3) hosting speaker sessions with global health agencies and key opinion leaders to foster dialogue on systemic issues. Our hope is that such an effort will shed light on the youth-perspective of these pressing problems and inspire a new generation of clinician-policymakers to apply their knowledge and create system-wide change.

              </div>
              <image />
                </div>
            </section>
            <section id="initiatives">
                <SectionHeading title="Initiatives" />
                {/* Content for Initiatives */}
            </section>
            <section id="team">
                <SectionHeading title="Team" />
                {/* Content for Team */}
            </section>
            <section id="partners">
                <SectionHeading title="Partners" />
                {/* Content for Partners */}
            </section>
            <section id="media">
                <SectionHeading title="Media" />
                {/* Content for Media */}
            </section>
            <section id="contact">
                <SectionHeading title="Contact Us" />
                {/* Content for Contact Us */}
            </section>
        </div>
  );
}
