import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import { themes } from 'prism-react-renderer';


const FeatureList = [
  {
    title: 'Kel',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        An AI assistant for your terminal. Kel is a command-line interface that helps you to perform various tasks.        
      </>      
    ),
    link: 'https://kel.qainsights.com'
  },
  {
    title: 'Hamster - Mac Edition',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Launch JMeter and your recent test plan swiftly from your Mac menu bar.
      </>
    ),
    link: 'https://hamster.qainsights.com'
  },
  {
    title: 'Hamster - Windows Edition',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Launch JMeter and your recent test plan swiftly from your Windows status bar.
      </>
    ),
    link: 'https://hamster.qainsights.com'
  },
  {
    title: 'JMeter Docker Extension',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Start JMeter tests from Docker Desktop. No JMeter installation required.
      </>
    ),
    link: 'https://hub.docker.com/extensions/qainsights/jmeter-docker-extension'
  },
  {
    title: 'JMeter Plugin - Validate Thread Group',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Quickly validate your Thread Group in JMeter in one click.
      </>
    ),
    link: 'https://hub.docker.com/extensions/qainsights/jmeter-docker-extension'
  },
  {
    title: 'PerfTractor',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Suite of calculators for performance testers.
      </>
    ),
    link: 'https://perftractor.xyz'
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Link to={link}>
          <Svg className={styles.featureSvg} role="img" />
        </Link>
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
        <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>        
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
