import './App.css';
const icons = ['check', 'x', 'alert'];

export default function App() {
  return (
    <main className="container">
      <h1>Company Icons Demo</h1>

      <section className="blurb">
        <p>
          This app uses the web component <code>&lt;company-icon&gt;</code> from
          the private GitHub Packages package
          <code>@josephaw1022/company-icons-web</code>.
        </p>

        <p>
          Because it’s private, authenticate with an <strong>environment variable</strong>
          (no token stored in files).
        </p>

        <pre className="code"><code>{`# one-time scope mapping (writes no secrets)
export NODE_AUTH_TOKEN=$(gh auth token)   # or a PAT with read:packages

# install and import
npm i @josephaw1022/company-icons-web
# in main.jsx
import '@josephaw1022/company-icons-web'`}</code></pre>
      </section>

      <section className="row">
        <company-icon name="check" size="20px" style={{ marginRight: '8px' }} />
        <span>Save successful</span>
      </section>

      <section className="row">
        <company-icon
          name="alert"
          size="20px"
          color="tomato"
          label="Warning"
          style={{ marginRight: '8px' }}
        />
        <span>Something needs your attention</span>
      </section>

      <h2>Available icons</h2>
      <section className="grid">
        {icons.map((name) => (
          <div key={name} className="cell">
            <company-icon name={name} size="24px" />
            <div className="name">{name}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
