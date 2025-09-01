import Icon from './Icon';

export default function Hero() {
  return (
    <section id="hero">
      <div className="container hero-container">
        <h1 className="hero-title">Anna Rychkova</h1>
        <p className="hero-text"></p>
        <Icon iconName="Download" width={24} height={24} />
        <Icon iconName="Map" width={24} height={24} />
        <Icon iconName="Map1" width={24} height={24} />
        <Icon iconName="Mail" width={24} height={24} />
        <Icon iconName="Mail1" width={24} height={24} />
      </div>
    </section>
  );
}
