import Layout from "@/components/layout/Layout";

const PrivacyPolicy = () => {
    return (
        <Layout>
            <div className="my-10 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl text-[#392720] text-center py-5">
                    Privacy Policy
                </h1>
                <div className="w-full md:max-w-2xl text-justify tracking-wide font-sans text-[#695B55]">
                    <p className="text-left">
                        Last updated: January 3, 2026
                    </p> <br />
                    <p>
                    Summer5 operates this store and website, including all related information, content, features, tools, products and services, in order to provide you, the customer, with a curated shopping experience (the "Services"). This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us. If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information.
                    </p> <br />
                    <p>
                    Please read this Privacy Policy carefully. By using and accessing any of the Services, you acknowledge that you have read this Privacy Policy and understand the collection, use, and disclosure of your information as described in this Privacy Policy.
                    </p> <br />
                    <h1 className="text-xl md:text-3xl text-[#392720] font-medium">
                    Personal Information We Collect or Process
                    </h1>
                </div>
            </div>
        </Layout>

    );
};

export default PrivacyPolicy;