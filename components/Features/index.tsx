import SectionTitle from "../Common/SectionTitle";
import FeatureBlock from './FeatureBlock';
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {

  const designServices = {
    title: 'Design Services',
    description: 'Prismatic Power boasts a team of highly skilled engineers and designers who craft tailor-made solar solutions. We take into account your specific energy needs, location, and budget to create an optimal solar system design that maximizes efficiency and savings.'
  };

  const installationExpertise = {
    title: 'Installation Expertise',
    description: 'Our experienced technicians ensure flawless installation, using state-of- the-art equipment and adhering to the highest industry standards. We take pride in delivering projects on time and within budget, while maintaining the utmost attention to safety.'
  };

  const ppas = {
    title: 'Power Purchase Agreements (PPAs)',
    description: `Prismatic Power understands that not all organizations have the upfront capital to invest in solar projects. That's why we offer flexible Power Purchase Agreements (PPAs) that allow you to adopt clean energy without the financial burden. We can finance PPAs ranging from 2 million up to an impressive 50 million dollars, providing you with a dependable and cost- effective energy source.`
  }
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          {/* <SectionTitle
            title="Main Features"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          /> */}

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
          <FeatureBlock description={designServices.description} title={designServices.title}  />
          <FeatureBlock description={installationExpertise.description} isReverse={true} title={installationExpertise.title} />
          <FeatureBlock description={ppas.description} title={ppas.title}  />

        </div>
      </section>
    </>
  );
};

export default Features;
