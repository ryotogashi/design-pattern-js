// facade pattern is the pattern to simplify the conplex code.
// In building React project you have been doing facade pattern.

const Card = ({ title, content }) => (
  <div className="card">
    <h1>{title}</h1>
    <p>{content}</p>
  </div>
);

const NameCardList = ({ profiles }) => (
  <div className="name-card-list">
    {profiles.map(profile => (
      <Card title={profile.name} content={profile.intro} />
    ))}
  </div>
);
