import React, { useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import polkadotLogo from "./assets/logo.svg";
// import viteLogo from '/vite.svg'
import "./App.css";

const App = () => {
  const textArray = [
    "My brain is full of parachains, relay chains, and JAM. This #Polkadot workshop was an insane deep dive into Web3. So worth it.",
    "Just wrote my first ink! smart contract. The tooling is so clean. The future of #Polkadot is bright.",
    "The session on Polkadot 2.0 was mind-bending. Agile Coretime is a game-changer for blockspace. #Polkadot is years ahead.",
    "Finally understood what a 'canonical history' means in a fork. The mentors at the #Polkadot workshop are amazing.",
    "Came for the free food, stayed for the decentralized future. The #Polkadot ecosystem is way bigger than I imagined.",
    "Okay, so XCM is basically the TCP/IP for blockchains. It just clicked! This #Polkadot workshop was full of 'aha!' moments.",
    "Exploring Substrate feels like unlocking a new level in my dev journey. Building a custom blockchain with #Polkadot is so powerful.",
    "The explanation of GRANDPA consensus was epic. Understanding how #Polkadot achieves finality is key. No more guessing.",
    "My perspective on the ETH scaling trilemma is completely changed after this. #Polkadot has some very smart answers.",
    "Got a POAP, a sick T-shirt, and a brain full of Substrate knowledge. This #Polkadot India workshop was a 10/10.",
    "The quiz was so intense! It's amazing how much we learned in two days. Ready to contribute to the #Polkadot ecosystem.",
    "Learning about hash-linked lists from Raj was a highlight. Understanding the fundamentals makes #Polkadot so much clearer.",
    "From learning about Merkle trees to deploying a runtime, this workshop covered it all. The #Polkadot community is so welcoming.",
    "I can't believe how easy it is to spin up a parachain template. The #Polkadot SDK is a beast. Time to start building.",
    "The session on AssetHub and NFTs was super practical. Finally minted my first NFT on the #Polkadot network!",
    "Realizing that #Polkadot isn't just one chain but a network of chains is a game-changer. The multichain future is here.",
    "OpenGov seems so much more advanced than other governance models. Power to the token holders in the #Polkadot ecosystem.",
    "The mentors here are actual rockstars. They answered every single one of my questions about #Polkadot development.",
    "Asynchronous backing is such an elegant solution for scaling. The tech behind #Polkadot is seriously impressive.",
    "PolkaVM is going to be a huge deal for attracting new devs. This #Polkadot workshop was perfectly timed.",
    "I finally get the difference between a parachain and a solochain. The clarity from this #Polkadot workshop is amazing.",
    "The history of Web3 session really set the stage for why #Polkadot is so important. Context is everything.",
    "Who knew cryptography could be this interesting? The deep dive on signatures and encryptions for #Polkadot was great.",
    "Two days of non-stop learning. My head is spinning, but I'm so excited to start my #Polkadot journey now.",
    "This workshop was way more hands-on than I expected. We actually built stuff! The #Polkadot ecosystem is for builders.",
    "Networking with other student devs who are excited about Web3 was a huge plus. The #Polkadot community in India is growing.",
    "The deep dive into light clients was fascinating. The tech enabling trustless interaction in #Polkadot is next-level.",
    "Understanding how the mempool works was a missing piece for me. This #Polkadot workshop filled in so many gaps.",
    "From Bounties to OpenGov, there are so many ways to start contributing to #Polkadot. Feeling super motivated now.",
    "The explanation of Frontier EVM made so much sense. Connecting #Polkadot to the Ethereum world is massive.",
    "This JAM T-shirt is my new favorite. What a great way to remember an awesome #Polkadot workshop.",
    "I used to be confused by all the L1s and L2s. Now I see how #Polkadot offers a different, more integrated solution.",
    "The session on DeFi was an eye-opener. The potential for financial applications on #Polkadot is limitless.",
    "Huge thanks to the Edgetributor team for this. The best-run student workshop I've ever been to. #Polkadot is in good hands.",
    "Learning to use SubKey from the command line made me feel like a real chain developer. #Polkadot tooling is solid.",
    "The quality of the content was university-level, but way more fun. Every engineering student needs this #Polkadot workshop.",
    "It's not just about the tech, it's about the game theory. The talk on validator economics in #Polkadot was brilliant.",
    "The concept of shared security is probably the most underrated feature of #Polkadot. So efficient and powerful.",
    "My brain is still processing the talk on elastic scaling. The future of #Polkadot is incredibly dynamic.",
    "Wrote my first line of code in `ink!`. I think I'm in love. Goodbye Solidity, hello #Polkadot.",
    "The side conversations with the mentors were as valuable as the main sessions. So much knowledge in this #Polkadot community.",
    "I came here thinking I knew about blockchain. I'm leaving with a new appreciation for the engineering behind #Polkadot.",
    "It's amazing to see how bridges work to connect different ecosystems. #Polkadot is truly about interoperability.",
    "The whole workshop felt less like a lecture and more like a conversation. So much engagement. The #Polkadot way!",
    "I've got a list of bounties I want to check out now. This workshop gave me the confidence to contribute to #Polkadot.",
    "Realizing you can build a whole app-specific chain instead of just a smart contract is a huge mental shift. Thanks, #Polkadot.",
    "The hands-on activities were perfectly designed. Challenging but super rewarding. Learned so much about the #Polkadot stack.",
    "The snacks were great, the people were better. An all-around amazing experience at the #Polkadot India workshop.",
    "I was on the fence about Web3, but the vision presented for #Polkadot this weekend was incredibly compelling.",
    "For any dev feeling limited by single-chain platforms, you need to look at what's happening with #Polkadot.",
    "The 'When to blockchain and why?' session should be mandatory for all CS students. So much clarity from this #Polkadot event.",
    "Big thanks to the student club partners for making this happen. Bringing #Polkadot to campus was a brilliant move.",
    "I'm going back to my college and telling everyone they need to learn about #Polkadot. The opportunity is massive.",
    "The clarity on Relay Chain vs Parachain roles was a huge unlock for me. Finally, it all makes sense. #Polkadot architecture is genius.",
    "This workshop felt like a bootcamp. I learned more about practical blockchain dev in 2 days than in 2 months of reading. #Polkadot for the win.",
    "Just claimed my on-chain POAP certificate. Even the certs are decentralized. That's the #Polkadot spirit.",
    "The progression from Bitcoin's limitations to the solutions #Polkadot provides was laid out so clearly. Amazing curriculum.",
    "Can't wait to see the after-movie. This whole weekend was a vibe. #Polkadot India knows how to build a community.",
    "Super hyped about the post-JAM ecosystem. The future of #Polkadot is going to be wild. Glad I got this head start.",
    "I've officially fallen down the rabbit hole. There's no turning back now. See you on the #Polkadot chain!",
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
  )}&hashtags=PolkadotAtNITK%20%23PolkadotIndiaWorkshops%20`;

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
          Polkadot x NITK Surathkal 2025
        </h1>
        <div style={styles.stepsContainer}>
          <h2 style={{ fontSize: "20px", fontWeight: "bold" }}>
            How to Participate:
          </h2>
          <ol>
            <li style={styles.step}>
              Step 1: Follow{" "}
              <a
                href="https://x.com/edgetributors"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.link}
              >
                @Edgetributors
              </a>{" "}
              X handle 📸
            </li>
            <li style={styles.step}>
              Step 2: Take a Selfie / Photo during workshops. 📸
            </li>
            <li style={styles.step}>
              Step 3: Tweet your experience (or use the following pre-generated
              tweet) with your Selected #NITK Moment 📸.
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
          </ol>
        </div>
      </div>
    </div>
  );
};

export default App;
