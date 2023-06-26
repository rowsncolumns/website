import { PageHeading } from "@/components/ui/page-heading";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return {
    title: `Privacy - ${siteConfig.name}`,
  };
};

export default async function Home() {
  return (
    <main className="flex flex-col min-h-screen p-2 min-w-0 flex-1">
      <header className="flex flex-col text-center justify-center items-center py-8">
        <PageHeading>Privacy Policy of Rows n' Columns</PageHeading>
        <p className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          At Rows n' Columns, we collect and manage user data according to the
          following Privacy Policy.
        </p>
      </header>

      <div className="mx-auto mt-8 max-w-2xl items-start flex flex-col gap-y-4 sm:mt-10 lg:max-w-5xl pb-12 ">
        <h3 className="font-semibold">Data Collected</h3>

        <p>
          We collect information you provide directly to us. For example, we
          collect information when you create an account, subscribe, participate
          in any interactive features of our services, fill out a form, request
          customer support or otherwise communicate with us. The types of
          information we may collect include your name, email address, postal
          address, credit card information and other contact or identifying
          information you choose to provide.
        </p>

        <p>
          We collect anonymous data from every visitor of the Website to monitor
          traffic and fix bugs. For example, we collect information like web
          requests, the data sent in response to such requests, the Internet
          Protocol address, the browser type, the browser language, and a
          timestamp for the request.
        </p>

        <p>
          We also use various technologies to collect information, and this may
          include sending cookies to your computer. Cookies are small data files
          stored on your hard drive or in your device memory that helps us to
          improve our services and your experience, see which areas and features
          of our services are popular and count visits. We may also collect
          information using web beacons (also known as "tracking pixels"). Web
          beacons are electronic images that may be used in our services or
          emails and to track count visits or understand usage and campaign
          effectiveness.
        </p>

        <h3 className="font-semibold pt-5">Use of the Data</h3>

        <p>
          We only use your personal information to provide you the Rows n'
          Columns services or to communicate with you about the Website or the
          services. Our Privacy Policy was created with the help of the Privacy
          Policy Template and the Terms and Conditions Template.
        </p>

        <p>
          We employ industry standard techniques to protect against unauthorized
          access of data about you that we store, including personal
          information.
        </p>

        <p>
          We do not share personal information you have provided to us without
          your consent, unless:
        </p>

        <ul>
          <li>Doing so is appropriate to carry out your own request</li>
          <li>
            We believe it's needed to enforce our legal agreements or that is
            legally required
          </li>
          <li>
            We believe it's needed to detect, prevent or address fraud, security
            or technical issues
          </li>
        </ul>

        <h3 className="font-semibold pt-5">Sharing of Data</h3>
        <p>
          We don't share your personal information with third parties.
          Aggregated, anonymized data is periodically transmitted to external
          services to help us improve the Website and service.
        </p>

        <p>
          We may allow third parties to provide analytics services. These third
          parties may use cookies, web beacons and other technologies to collect
          information about your use of the services and other websites,
          including your IP address, web browser, pages viewed, time spent on
          pages, links clicked and conversion information.
        </p>

        <p>
          We also use social buttons provided by services like Twitter, Google+,
          LinkedIn and Facebook. Your use of these third party services is
          entirely optional. We are not responsible for the privacy policies
          and/or practices of these third party services, and you are
          responsible for reading and understanding those third party services'
          privacy policies.
        </p>

        <h3 className="font-semibold pt-5">Cookies</h3>

        <p>We may use cookies on our site to remember your preferences.</p>
        <p>
          For more general information on cookies, please read{" "}
          <a href="https://www.cookieconsent.com/what-are-cookies/">
            "What Are Cookies"
          </a>
          .
        </p>

        <h3 className="font-semibold pt-5">
          Opt-Out, Communication Preferences
        </h3>

        <p>
          You may modify your communication preferences and/or opt-out from
          specific communications at any time. Please specify and adjust your
          preferences.
        </p>

        <h3 className="font-semibold pt-5">Security</h3>
        <p>
          We take reasonable steps to protect personally identifiable
          information from loss, misuse, and unauthorized access, disclosure,
          alteration, or destruction. But, you should keep in mind that no
          Internet transmission is ever completely secure or error-free. In
          particular, email sent to or from the Sites may not be secure.
        </p>

        <h3 className="font-semibold pt-5">About Children</h3>

        <p>
          The Website is not intended for children under the age of 13. We do
          not knowingly collect personally identifiable information via the
          Website from visitors in this age group.
        </p>

        <h3 className="font-semibold pt-5">Changes to the Privacy Policy</h3>
        <p>
          We may amend this Privacy Policy from time to time. Use of information
          we collect now is subject to the Privacy Policy in effect at the time
          such information is used.
        </p>

        <p>
          If we make major changes in the way we collect or use information, we
          will notify you by posting an announcement on the Website or sending
          you an email.
        </p>
      </div>
    </main>
  );
}
