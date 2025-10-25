import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import polkadotLogo from "./assets/logo.svg";
// import viteLogo from '/vite.svg'
import "./App.css";

const App = () => {
  const textArray = [
    "Just experienced the Road to Sub0 Builders Party in Chennai, India today! The Polkadot ecosystem's energy is absolutely incredible here with so many developers. Learning about Elastic Scaling and all the Polkadot 2.0 features 🚀",
    "At the Road to Sub0: India meetup in Chennai right now and it's amazing! The Polkadot Builders Party is bringing together the most brilliant minds from across the country. This workshop on building parachains using Polkadot SDK 🤯",
    "Networking at the Road to Sub0 Builders Party Chennai is pure gold for all developers here! India's Polkadot community is thriving with incredible technical talent everywhere. Meeting developers already shipping innovative projects 🔗",
    "The Road to Sub0: India event in Chennai is exceeding all my expectations today with great content! Learning cross-chain development with XCM at the Polkadot Builders Party. This blockchain technology is truly revolutionary 🌐",
    "Hands-on technical sessions at Road to Sub0 Chennai are absolutely incredible and practical for everyone! The Polkadot Builders Party India is showing us the future of Web3 development. Developer experience with Polkadot SDK smooth ✨",
    "Road to Sub0 Builders Party in Chennai, India delivering serious technical knowledge to everyone attending! Polkadot's architecture deep-dive with Agile Coretime explanation was exactly what I needed to understand the platform 💡",
    "Live at the Road to Sub0: India meetup in Chennai experiencing amazing technical content right now! The Polkadot Builders Party atmosphere is absolutely electric with innovation. Seeing live demos of 6-second block times 🎮",
    "The Road to Sub0 Builders Party Chennai is genuinely inspiring for all attendees and speakers! India's developer talent pool is massive and hungry to build on Polkadot ecosystem. Learning about shared security benefits today 🙌",
    "At Road to Sub0: India in Chennai learning so much about the Polkadot ecosystem and its features! Builders Party showcasing real-world projects that matter. Just discovered building with Solidity on Polkadot Hub works great 🔥",
    "Road to Sub0 Builders Party Chennai delivering top-tier technical content for all developers here! India's Polkadot community is passionate and rapidly growing every day. The $40K hackathon prize pool has me ready to build 💰",
    "Amazing technical depth at Road to Sub0: India, Chennai meetup happening today with expert speakers! The Polkadot Builders Party speakers are breaking down complex concepts beautifully. Understanding multichain architecture now ⚡",
    "The Road to Sub0 Builders Party in Chennai is showing India's massive Polkadot potential to everyone! Real-time demos of cross-chain messaging and asset transfers working seamlessly. XCM technology is genuinely game-changing 🌉",
    "At Road to Sub0: India meetup in Chennai learning about Polkadot Builders Party hackathon tracks today! Three clear tracks whether you're building apps, chains, or experimenting with bleeding edge technology available here 🎯",
    "Road to Sub0 Builders Party Chennai workshop on smart contracts is genuinely excellent for developers! India's developers getting hands-on experience with Polkadot's Wasm, EVM, and PolkaVM compatibility options available 🔧",
    "The Road to Sub0: India event in Chennai showcasing the entire Polkadot ecosystem strength perfectly! Builders Party highlighting 600+ projects building worldwide right now. India will be a major contributor to Web3 evolution 📊",
    "TIL at Road to Sub0: India, Chennai meetup: Polkadot handles multiple cores for elastic scaling beautifully! The Builders Party technical sessions are absolutely game-changing for understanding modern Web3 architecture today 📈",
    "Road to Sub0 Builders Party in Chennai, India teaching us about the JAM protocol evolution coming! Polkadot's future with Join-Accumulate Machine looks incredibly promising for developers. Can't wait to experiment with this 🌟",
    "At the Road to Sub0: India meetup in Chennai right now learning cutting-edge blockchain tech! Polkadot Builders Party revealed PolkaVM with RISC-V support and JIT compilation. This will completely transform smart contracts ⚡",
    "The Road to Sub0 Builders Party Chennai workshop on XCM is absolutely eye-opening today for everyone! India's developer ecosystem desperately needs this level of interoperability. Polkadot delivers exactly what Web3 needs 🌐",
    "Road to Sub0: India bringing serious blockchain knowledge to Chennai developers at this amazing event! Polkadot Builders Party showing live demos of Moonbeam and Acala integration working seamlessly. Cross-chain DeFi reality 🔥",
    "Learning so much at Road to Sub0 Builders Party in Chennai about ecosystem growth and development! The Polkadot presence in India is expanding rapidly with amazing community support. Over 600+ projects building worldwide 📊",
    "Road to Sub0: India event in Chennai teaching Polkadot 2.0 production-ready features to all developers! The Builders Party focus on elastic scaling being live and ready means we can start leveraging this immediately today 💪",
    "At the Road to Sub0 Builders Party Chennai understanding Polkadot's modular SDK approach in detail! India's developers are perfectly positioned to build the next generation of decentralized applications here on this platform 🎯",
    "Road to Sub0: India in Chennai revealing MetaMask and Foundry compatibility with Polkadot ecosystem! The Builders Party is systematically removing barriers for developers everywhere. Ethereum migration will be completely seamless 🚀",
    "The Road to Sub0 Builders Party Chennai speakers are absolutely incredible and knowledgeable experts! Learning about Polkadot's technical architecture and design philosophy in depth. India's Web3 community is ready to build 🧠",
    "Road to Sub0 Builders Party in Chennai, India demonstrating Polkadot Deployment Portal capabilities! Pre-built templates with EVM support deploy in just minutes. This is removing massive friction from blockchain development 🛠️",
    "At Road to Sub0: India meetup in Chennai learning about Polkadot's on-chain governance system today! The Builders Party showed runtime upgrades without hard forks. This flexibility is revolutionary for chain evolution and growth ⚙️",
    "The Road to Sub0 Builders Party Chennai session on parachains is absolutely fascinating for everyone! India's Polkadot ecosystem understanding specialized chains connecting via relay chain with shared security benefits 🔗",
    "Road to Sub0: India in Chennai revealing Polkadot's Asynchronous Backing performance impact clearly! The Builders Party demonstrated 8-10x throughput increase with 6-second blocks. Production-ready performance boost available ⚡",
    "Learning at Road to Sub0 Builders Party Chennai about Polkadot's Agile Coretime system innovation! India's developers now have flexible, on-demand computational resource allocation instead of rigid auction systems from before 📊",
    "Best developer meetup I've attended in India hands down without any question! Road to Sub0 Builders Party Chennai showcased Polkadot's ecosystem brilliantly. Left with head full of ideas and determination to build real apps 🔥",
    "Incredibly grateful for the Road to Sub0: India community in Chennai today at this amazing event! The Polkadot Builders Party brought together welcoming, brilliant minds. Already registered for the hackathon - let's build together! 🙏",
    "Road to Sub0 Builders Party in Chennai exceeded all my expectations and then some today! India's Polkadot developer community is genuinely world-class talent pool. The technical workshops were absolutely top-tier quality 📚",
    "Earned my exclusive POAP at Road to Sub0: India, Chennai today at the meetup! One step closer to Sub0 Buenos Aires on November 14-16. The Polkadot Builders Party journey from Chennai to Argentina will be absolutely epic ✈️",
    "The Road to Sub0 Builders Party in Chennai showed why Polkadot is India's gateway forward clearly! Connecting with other passionate developers building real projects was today's absolute highlight here at this amazing event 🤝",
    "Mind completely blown at Road to Sub0: India, Chennai meetup right now with all this knowledge! The Polkadot Builders Party revealed endless possibilities for building interoperable dApps. From zero knowledge to ready-to-build 💡",
    "Road to Sub0 Builders Party Chennai delivered incredible technical value for all attendees here! India's developer ecosystem is perfectly primed for Polkadot adoption across the country. Today's learnings accelerate my journey 🚀",
    "Key takeaway from Road to Sub0: India in Chennai today: Build once, connect everywhere is real! The Polkadot Builders Party reinforced this promise perfectly for everyone. The modular SDK approach makes complete sense now 🔗",
    "Left Road to Sub0 Builders Party Chennai feeling genuinely inspired to start building immediately! Polkadot's comparison to traditional L1 chains was eye-opening. India desperately needs this innovative blockchain technology 💪",
    "Road to Sub0: India event in Chennai was completely transformative for my understanding of Web3! The Polkadot Builders Party demonstrated that whether new or experienced, there's a clear, well-supported path forward for all 🌟",
    "The Road to Sub0 Builders Party Chennai convinced me to go all-in on Polkadot ecosystem today! India's growing community combined with world-class technology creates perfect conditions for building impactful applications ✨",
    "After attending Road to Sub0: India in Chennai today, the Polkadot Builders Party vision is crystal clear to me! From parachains to XCM to JAM protocol - this is the infrastructure platform for Web3's entire next decade 🎯",
    "Already brainstorming my hackathon project ideas after Road to Sub0 Builders Party Chennai today! India's Polkadot community inspired me with endless possibilities here. The 6-week Builder Party timeline is absolutely perfect 🧠",
    "Road to Sub0: India in Chennai has me fully committed to building on this platform now! Polkadot Builders Party Track 3 bleeding edge innovations look absolutely wild. Can't wait to experiment with zero-knowledge technology today 🔬",
    "Road to Sub0 Builders Party in Chennai showed me Polkadot's real-world traction stats today! India's developers building on a platform with 1.3M+ active accounts and $5B+ in value. This ecosystem is genuinely thriving here 💎",
    "The community energy at Road to Sub0: India, Chennai was absolutely electric today at the event! Polkadot Builders Party brought together India's brightest blockchain minds. This is exactly how you grow a developer ecosystem 🌈",
    "Road to Sub0 Builders Party Chennai demonstrated practical paths to contributing to Polkadot! India's ecosystem offers grants, comprehensive technical support, infrastructure credits - literally everything builders need 🌟",
    "Planning my cross-chain application after Road to Sub0 Builders Party in Chennai today! Using multiple Polkadot parachains with XCM messaging is now possible for developers. India's developers will lead this innovation wave 🌊",
    "The Road to Sub0: India meetup in Chennai introduced Polkadot Deployment Portal templates! Builders Party showed these will save weeks of development and setup time for everyone. Ready to start shipping real projects now 🎯",
    "Diving deep into Polkadot SDK documentation tonight after Road to Sub0 Chennai event today! India's Builders Party gave me the perfect technical foundation to start. My team is committed to building our first parachain together 📖",
    "Road to Sub0 Builders Party in Chennai made priorities clear for me today: Prize money is nice, but learning at India's Polkadot events is absolutely priceless. Challenge accepted - I'm building genuinely useful applications now ✨",
    "After Road to Sub0: India in Chennai, I'm building on Polkadot Cloud services immediately! The Builders Party showed applications that truly impact human lives everywhere. Free infrastructure credits help us build without limits ☁️",
    "Road to Sub0 Builders Party Chennai revealed extensive Web3 Foundation support availability to all builders! India's Polkadot ecosystem has grants, comprehensive resources, detailed documentation - literally everything needed 🌟",
    "My biggest takeaway from Road to Sub0: India, Chennai today: Polkadot Builders Party is genuinely serious about developer success today! Technical guidance, security audits, and ecosystem funding available to support Indian builders 💼",
    "Road to Sub0 Builders Party in Chennai showed real projects like Mythical Games and OriginTrail succeeding! Seeing India's potential role in the Polkadot ecosystem validates everything we're building here together as a community 🎮",
    "The Polkadot community vibe at Road to Sub0: India, Chennai is completely different from other ecosystems today! Builders Party fostering genuine connections among Indian developers nationwide. It's collaborative, not competitive here 🤝",
    "Joined the Polkadot Builder Party Telegram group right after Road to Sub0 Chennai experience today! India's local community seamlessly connects with the global ecosystem. The worldwide developer network is incredibly supportive 🌍",
    "Road to Sub0 Builders Party Chennai proves that local meetups are absolutely crucial for ecosystem growth! India's Polkadot ecosystem growth directly depends on grassroots events like this one. Huge props to all the organizers 👏",
    "From Chennai to Buenos Aires - what an incredible journey ahead! Road to Sub0: India connecting us to the global Polkadot Builders Party network! Sub0 Symbiosis conference (November 14-16) is definitely locked on my calendar now 🛤️",
    "After attending Road to Sub0 Builders Party in Chennai today, I'm completely convinced about the future! Web3's future is multichain, and Polkadot is leading this charge. India will become a major hub in this global ecosystem 🚀",
  ];

  const getRandomText = () => {
    const randomIndex = Math.floor(Math.random() * textArray.length);
    return textArray[randomIndex];
  };

  const [randomText, setRandomText] = useState(getRandomText());
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    let newText = randomText;
    while (newText === randomText) {
      newText = getRandomText();
    }
    setRandomText(newText);

    setTimeout(() => setIsRefreshing(false), 500);
  };

  const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
    randomText
  )}&hashtags=PolkadotParty%20%23RoadToSub0%20`;

  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      padding: "20px",
      boxSizing: "border-box",
    },
    card: {
      textAlign: "center",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      maxWidth: "600px",
      width: "100%",
      padding: "30px",
      boxSizing: "border-box",
      margin: "0 auto",
    },
    title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
    },
    textarea: {
      width: "100%",
      minHeight: "120px",
      padding: "15px",
      fontSize: "14px",
      marginBottom: "10px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      outline: "none",
      resize: "vertical",
      overflowY: "auto",
      lineHeight: "1.5",
      boxSizing: "border-box",
      whiteSpace: "pre-wrap",
    },
    textareaContainer: {
      position: "relative",
      marginBottom: "10px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "16px",
      margin: "5px",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    tweetButton: {
      backgroundColor: "#FF2670",
      color: "#fff",
      marginBottom: "6px",
    },
    stepsContainer: {
      marginTop: "20px",
      textAlign: "left",
      border: "2px solid #E4FF07",
      borderRadius: "10px",
      padding: "30px",
      boxSizing: "border-box",
    },
    step: {
      marginBottom: "10px",
    },
    link: {
      color: "#007bff",
      textDecoration: "underline",
    },
    refreshButton: {
      position: "absolute",
      right: "10px",
      top: "10px",
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#666",
      transition: "transform 0.3s ease",
      padding: "5px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={{ textAlign: "center", marginBottom: "20px" }}>
          <img
            src={polkadotLogo}
            alt="Polkadot Logo"
            style={{ maxWidth: "50px", height: "auto" }}
          />
        </div>
        <h1 className="animated-title" style={styles.title}>
          Road to Sub0: India: Chennai Edition
        </h1>
        <div style={styles.stepsContainer}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            How to Participate:
          </h2>
          <ul>
            <li style={styles.step}>
              Step 1: Follow{" "}
              <a
                href="https://x.com/edgetributors"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                @Edgetributors
              </a>
              {" & "}
              <a
                href="https://x.com/montaqlabs"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                @MontaQLabs
              </a>{" "}
              X handle
            </li>
            <li style={styles.step}>
              Step 2: Take a Selfie / Photo during the meetup. 📸
            </li>
            <li style={styles.step}>
              Step 3: Tweet your experience (or use the following pre-generated
              tweet) with your Selected #RoadToSub0 Moment 📸.
            </li>
            <div style={styles.textareaContainer}>
              <textarea
                value={randomText}
                readOnly
                style={styles.textarea}
                onFocus={(e) => (e.target.style.borderColor = "#007bff")}
                onBlur={(e) => (e.target.style.borderColor = "#ccc")}
              />
              <button
                onClick={handleRefresh}
                style={styles.refreshButton}
                aria-label="Refresh message"
              >
                <FiRefreshCw
                  style={{
                    transform: isRefreshing ? "rotate(360deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                  }}
                  size={20}
                />
              </button>
            </div>
            <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
              <button style={{ ...styles.button, ...styles.tweetButton }}>
                Tweet This
              </button>
            </a>
            <li style={styles.step}>
              Step 3:{" "}
              <a href="https://forms.gle/9wr2RAxxgSsgQyAx6" style={styles.link}>
                Fill this form
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
