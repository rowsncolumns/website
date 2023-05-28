import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: "Term of use",
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>Terms of Use</PageHeading>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Last updated July 11, 2020
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-2xl items-start flex flex-col gap-y-4 sm:mt-10 lg:max-w-5xl pb-12 ">
        <h3>AGREEMENT TO TERMS</h3>

        <p>
          These Terms of Use constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity ("you”) and Rows
          n&apos; Columns ("Company", "we”, "us”, or "our”), concerning your
          access to and use of the website as well as any other media form,
          media channel, mobile website or mobile application related, linked,
          or otherwise connected thereto (collectively, the "Site”). You agree
          that by accessing the Site, you have read, understood, and agree to be
          bound by all of these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF
          THESE TERMS OF USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
          SITE AND YOU MUST DISCONTINUE USE IMMEDIATELY.
        </p>

        <p>
          Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make
          changes or modifications to these Terms of Use at any time and for any
          reason. We will alert you about any changes by updating the "Last
          updated” date of these Terms of Use, and you waive any right to
          receive specific notice of each such change. It is your responsibility
          to periodically review these Terms of Use to stay informed of updates.
          You will be subject to, and will be deemed to have been made aware of
          and to have accepted, the changes in any revised Terms of Use by your
          continued use of the Site after the date such revised Terms of Use are
          posted.
        </p>

        <p>
          The information provided on the Site is not intended for distribution
          to or use by any person or entity in any jurisdiction or country where
          such distribution or use would be contrary to law or regulation or
          which would subject us to any registration requirement within such
          jurisdiction or country. Accordingly, those persons who choose to
          access the Site from other locations do so on their own initiative and
          are solely responsible for compliance with local laws, if and to the
          extent local laws are applicable.
        </p>

        <p>
          The Site is not tailored to comply with industry-specific regulations
          (Health Insurance Portability and Accountability Act (HIPAA), Federal
          Information Security Management Act (FISMA), etc.), so if your
          interactions would be subjected to such laws, you may not use this
          Site. You may not use the Site in a way that would violate the
          Gramm-Leach-Bliley Act (GLBA).
        </p>

        <p>
          The Site is intended for users who are at least 13 years of age. All
          users who are minors in the jurisdiction in which they reside
          (generally under the age of 18) must have the permission of, and be
          directly supervised by, their parent or guardian to use the Site. If
          you are a minor, you must have your parent or guardian read and agree
          to these Terms of Use prior to you using the Site.
        </p>

        <h3>INTELLECTUAL PROPERTY RIGHTS</h3>

        <p>
          Unless otherwise indicated, the Site is our proprietary property and
          all source code, databases, functionality, software, website designs,
          audio, video, text, photographs, and graphics on the Site
          (collectively, the "Content”) and the trademarks, service marks, and
          logos contained therein (the "Marks”) are owned or controlled by us or
          licensed to us, and are protected by copyright and trademark laws and
          various other intellectual property rights and unfair competition laws
          of the United States, international copyright laws, and international
          conventions. The Content and the Marks are provided on the Site "AS
          IS” for your information and personal use only. Except as expressly
          provided in these Terms of Use, no part of the Site and no Content or
          Marks may be copied, reproduced, aggregated, republished, uploaded,
          posted, publicly displayed, encoded, translated, transmitted,
          distributed, sold, licensed, or otherwise exploited for any commercial
          purpose whatsoever, without our express prior written permission.
        </p>

        <p>
          Provided that you are eligible to use the Site, you are granted a
          limited license to access and use the Site and to download or print a
          copy of any portion of the Content to which you have properly gained
          access solely for your personal, non-commercial use. We reserve all
          rights not expressly granted to you in and to the Site, the Content
          and the Marks.
        </p>

        <h3>USER REPRESENTATIONS</h3>

        <p>
          By using the Site, you represent and warrant that: (1) you have the
          legal capacity and you agree to comply with these Terms of Use; (2)
          you are not under the age of 13; (3) you are not a minor in the
          jurisdiction in which you reside, or if a minor, you have received
          parental permission to use the Site; (4) you will not access the Site
          through automated or non-human means, whether through a bot, script or
          otherwise; (5) you will not use the Site for any illegal or
          unauthorized purpose; and (6) your use of the Site will not violate
          any applicable law or regulation.
        </p>

        <p>
          If you provide any information that is untrue, inaccurate, not
          current, or incomplete, we have the right to suspend or terminate your
          account and refuse any and all current or future use of the Site (or
          any portion thereof).
        </p>

        <h3>FEES AND PAYMENT</h3>

        <p>We accept the following forms of payment:</p>

        <ol className="pl-10 list-decimal">
          <li>Visa</li>
          <li>Mastercard</li>
          <li>American Express</li>
          <li>Discover</li>
        </ol>

        <p>
          You may be required to purchase or pay a fee to access some of our
          services. You agree to provide current, complete, and accurate
          purchase and account information for all purchases made via the Site.
          You further agree to promptly update account and payment information,
          including email address, payment method, and payment card expiration
          date, so that we can complete your transactions and contact you as
          needed. We bill you through an online billing account for purchases
          made via the Site. Sales tax will be added to the price of purchases
          as deemed required by us. We may change prices at any time. All
          payments shall be in U.S. dollars.
        </p>

        <p>
          You agree to pay all charges or fees at the prices then in effect for
          your purchases, and you authorize us to charge your chosen payment
          provider for any such amounts upon making your purchase.
        </p>

        <p>
          We reserve the right to correct any errors or mistakes in pricing,
          even if we have already requested or received payment. We also reserve
          the right to refuse any order placed through the Site.
        </p>

        <h3>SALE</h3>

        <p>
          We have the right to cancel any license with full refund, in case of a
          sale of the company.
        </p>

        <h3>CANCELLATION</h3>

        <p>
          You can cancel your subscription at any time by contacting us using
          the contact information provided below. Your cancellation will take
          effect at the end of the current paid term.
        </p>

        <p>
          If you are unsatisfied with our services, please email us at
          support@rowsncolumns.app
        </p>

        <h3>SOFTWARE</h3>
        <p>
          We may include software for use in connection with our services. If
          such software is accompanied by an end user license agreement
          ("EULA”), the terms of the EULA will govern your use of the software.
          If such software is not accompanied by a EULA, then we grant to you a
          non-exclusive, revocable, personal, and non-transferable license to
          use such software solely in connection with our services and in
          accordance with these Terms of Use. Any Software and any related
          documentation is provided "as is” without warranty of any kind, either
          express or implied, including, without limitation, the implied
          warranties of merchantability, fitness for a particular purpose, or
          non-infringement. You accept any and all risk arising out of use or
          performance of any Software. You may not reproduce or redistribute any
          software except in accordance with the EULA or these Terms of Use.
        </p>

        <h3>PROHIBITED ACTIVITIES</h3>

        <p>
          You may not access or use the Site for any purpose other than that for
          which we make the Site available. The Site may not be used in
          connection with any commercial endeavors except those that are
          specifically endorsed or approved by us.
        </p>

        <p>As a user of the Site, you agree not to:</p>

        <ol className="pl-6 list-decimal">
          <li>
            Systematically retrieve data or other content from the Site to
            create or compile, directly or indirectly, a collection,
            compilation, database, or directory without written permission from
            us.
          </li>
          <li>
            Make any unauthorized use of the Site, including collecting
            usernames and/or email addresses of users by electronic or other
            means for the purpose of sending unsolicited email, or creating user
            accounts by automated means or under false pretenses.
          </li>
          <li>
            Use a buying agent or purchasing agent to make purchases on the
            Site.
          </li>
          <li>
            Use the Site to advertise or offer to sell goods and services.
          </li>
          <li>
            Circumvent, disable, or otherwise interfere with security-related
            features of the Site, including features that prevent or restrict
            the use or copying of any Content or enforce limitations on the use
            of the Site and/or the Content contained therein.
          </li>
          <li>Engage in unauthorized framing of or linking to the Site.</li>
          <li>
            Trick, defraud, or mislead us and other users, especially in any
            attempt to learn sensitive account information such as user
            passwords.
          </li>
          <li>
            Make improper use of our support services or submit false reports of
            abuse or misconduct. 9. Engage in any automated use of the system,
            such as using scripts to send comments or messages, or using any
            data mining, robots, or similar data gathering and extraction tools.
            10. Interfere with, disrupt, or create an undue burden on the Site
            or the networks or services connected to the Site.{" "}
          </li>
          <li>
            Attempt to impersonate another user or person or use the username of
            another user.{" "}
          </li>
          <li>
            Use any information obtained from the Site in order to harass,
            abuse, or harm another person.{" "}
          </li>
          <li>
            Use the Site as part of any effort to compete with us or otherwise
            use the Site and/or the Content for any revenue-generating endeavor
            or commercial enterprise.{" "}
          </li>
          <li>
            Disparage, tarnish, or otherwise harm, in our opinion, us and/or the
            Site.{" "}
          </li>
          <li>
            Use the Site in a manner inconsistent with any applicable laws or
            regulations.{" "}
          </li>
          <li>
            Except as may be the result of standard search engine or Internet
            browser usage, use, launch, develop, or distribute any automated
            system, including without limitation, any spider, robot, cheat
            utility, scraper, or offline reader that accesses the Site, or using
            or launching any unauthorized script or other software.{" "}
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) any
            material that acts as a passive or active information collection or
            transmission mechanism, including without limitation, clear graphics
            interchange formats ("gifs”), 1×1 pixels, web bugs, cookies, or
            other similar devices (sometimes referred to as "spyware” or
            "passive collection mechanisms” or "pcms”).{" "}
          </li>
          <li>
            Upload or transmit (or attempt to upload or to transmit) viruses,
            Trojan horses, or other material, including excessive use of capital
            letters and spamming (continuous posting of repetitive text), that
            interferes with any party’s uninterrupted use and enjoyment of the
            Site or modifies, impairs, disrupts, alters, or interferes with the
            use, features, functions, operation, or maintenance of the Site.{" "}
          </li>
          <li>
            Copy or adapt the Site’s software, including but not limited to
            Flash, PHP, HTML, JavaScript, or other code.{" "}
          </li>
          <li>
            Delete the copyright or other proprietary rights notice from any
            Content.{" "}
          </li>
          <li>
            Harass, annoy, intimidate, or threaten any of our employees or
            agents engaged in providing any portion of the Site to you.{" "}
          </li>
          <li>
            Attempt to bypass any measures of the Site designed to prevent or
            restrict access to the Site, or any portion of the Site.{" "}
          </li>
          <li>
            Decipher, decompile, disassemble, or reverse engineer any of the
            software comprising or in any way making up a part of the Site.
          </li>
        </ol>

        <h3>USER GENERATED CONTRIBUTIONS</h3>

        <p>
          The Site does not offer users to submit or post content. We may
          provide you with the opportunity to create, submit, post, display,
          transmit, perform, publish, distribute, or broadcast content and
          materials to us or on the Site, including but not limited to text,
          writings, video, audio, photographs, graphics, comments, suggestions,
          or personal information or other material (collectively,
          "Contributions"). Contributions may be viewable by other users of the
          Site and through third-party websites. As such, any Contributions you
          transmit may be treated in accordance with the Site Privacy Policy.
          When you create or make available any Contributions, you thereby
          represent and warrant that:
        </p>
      </div>
    </main>
  );
}
