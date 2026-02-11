export default function Home() {
  return (
    <main style={{ minHeight: "100vh", background: "#0b0b0b", color: "#ffffff", padding: "60px 20px", fontFamily: "Arial, sans-serif" }}>
      
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        
        {/* HERO */}
        <h1 style={{ fontSize: "48px", lineHeight: "1.2" }}>
          Close More Deals.
          <br />
          Without Sounding Desperate.
        </h1>

        <p style={{ marginTop: "20px", fontSize: "20px", opacity: 0.8 }}>
          100 battle-tested sales scripts used by freelancers, agencies & coaches
          to land high-ticket clients.
        </p>

        <div style={{ marginTop: "30px" }}>
          <a
            href="GUMROAD_LINK_BURAYA"
            style={{
              padding: "18px 40px",
              background: "#00ff88",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "18px",
              borderRadius: "8px"
            }}
          >
            Get Instant Access – $19
          </a>
        </div>

        {/* SOCIAL PROOF */}
        <div style={{ marginTop: "60px", opacity: 0.7 }}>
          <p>Used by freelancers, SMMA owners, coaches & consultants worldwide.</p>
        </div>

        {/* WHAT YOU GET */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "32px" }}>What You Get Inside</h2>

          <ul style={{ marginTop: "20px", lineHeight: "1.8", fontSize: "18px" }}>
            <li>Cold DM scripts that get replies</li>
            <li>Follow-up messages that revive dead leads</li>
            <li>Objection handling frameworks</li>
            <li>High-ticket closing lines</li>
            <li>Price resistance responses</li>
            <li>Agency outreach templates</li>
            <li>Discovery call openers</li>
          </ul>
        </div>

        {/* PROBLEM SECTION */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "32px" }}>Why Most People Don’t Close Deals</h2>

          <p style={{ marginTop: "20px", fontSize: "18px", opacity: 0.8 }}>
            They sound needy.
            <br />
            They over-explain.
            <br />
            They panic when objections come.
            <br />
            They don't control the frame.
          </p>
        </div>

        {/* VALUE STACK */}
        <div style={{ marginTop: "80px" }}>
          <h2 style={{ fontSize: "32px" }}>Value</h2>

          <p style={{ marginTop: "20px", fontSize: "18px" }}>
            Hiring a sales consultant: $2,000+
            <br />
            Buying a sales course: $497+
            <br />
            CloseMore Vault: <strong>$19</strong>
          </p>
        </div>

        {/* FINAL CTA */}
        <div style={{ marginTop: "100px", textAlign: "center" }}>
          <a
            href="GUMROAD_LINK_BURAYA"
            style={{
              padding: "20px 50px",
              background: "#00ff88",
              color: "#000",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
              borderRadius: "10px"
            }}
          >
            Unlock All 100 Scripts Now
          </a>
        </div>

      </div>
    </main>
  );
}

