import { Button } from '@nx-monorepo/ui';

export function Home() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>🏠 Home Hello World</h1>
        <h2>NGUYEN HUU LOI</h2>
      </div>
      <div className="page-content">
        <div className="card">
          <h2>Get Started</h2>
          <p>
            Explore our product catalog, discover new arrivals, and find exactly
            what you're looking for.
          </p>
          <Button variant="primary" onClick={() => alert('Welcome!')}>
            Get Started
          </Button>
        </div>
        <div className="card">
          <h2>Latest Updates</h2>
          <p>
            Stay up-to-date with the latest features and improvements to our
            platform.
          </p>
          <Button variant="outline" onClick={() => alert('Updates clicked!')}>
            View Updates
          </Button>
        </div>
        <div className="card">
          <h2>Hello World 2</h2>
          <p>
            Stay up-to-date with the latest features and improvements to our
            platform.
          </p>
          <Button variant="outline" onClick={() => alert('View The World 2!')}>
            View The World 2
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
