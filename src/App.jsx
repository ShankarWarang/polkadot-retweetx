import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  const textArray = [
      "🚀 Excited to be at #ETHIndia2024! Why Polkadot? Its unique parachain architecture allows for seamless interoperability and scalability. Build once, deploy everywhere! ",
      "💡 Did you know? Polkadot’s shared security model means your DApp benefits from the security of the entire network. Build with confidence! 🔒 ",
      "🌟 At #ETHIndia2024, we’re showcasing how Polkadot empowers developers with its flexible framework. Create custom blockchains tailored to your DApp’s needs! ",
      "🔗 Interoperability is key! With Polkadot, your DApp can communicate with multiple blockchains effortlessly. Say goodbye to silos! 🌍",
      "🛠️ Building on Polkadot means access to a rich ecosystem of tools and resources. From Substrate to the Polkadot JS API, everything you need is at your fingertips! ",
      "🌈 Why choose Polkadot? Its governance model allows for community-driven development. Your voice matters in shaping the future of your DApp! 🗳️ ",
      "⚡️ Speed matters! Polkadot’s parallel processing capabilities mean faster transactions and a better user experience for your DApp. Let’s build the future together! ",
      "🌍 Join us at #ETHIndia2024 to explore how Polkadot’s cross-chain capabilities can unlock new possibilities for your DApp. The future is interconnected! 🔗 ",
      "🏗️ Building on Polkadot is like having a toolbox full of possibilities! From DeFi to NFTs, the potential for innovation is limitless. Let’s create something amazing! ",
      "🎉 Ready to embrace the future? Polkadot is the best network for DApp development, offering scalability, security, and community. Let’s make waves at",
      "🌟 Embrace the future with Polkadot! Join us in building a decentralized web where every blockchain can communicate. ",
      "🚀 Unlock the potential of cross-chain interactions! Discover how Polkadot is revolutionizing the blockchain landscape. ",
      "💬 Join the conversation on governance in blockchain! Polkadot’s model empowers users to shape the ecosystem. ",
      "🔍 Explore the benefits of building on Polkadot! From scalability to security, your DApp can thrive in a multi-chain world. ",
      "🌐 Connect with developers and innovators at #ETHIndia2024! Let’s collaborate to create the next big thing in blockchain. ",
      "📈 The future of finance is here! Learn how Polkadot is enabling DeFi projects to flourish across multiple chains. ",
      "🛡️ Security is paramount! Discover how Polkadot’s shared security model protects your projects and investments. ",
     "🎨 Create unique user experiences with Polkadot! Leverage its capabilities to build engaging and interactive DApps. ",
      "🌍 Join us in shaping the future of the internet! Polkadot is at the forefront of the Web3 movement. Be part of it at !",
      "🎉 Let’s celebrate innovation! Polkadot is empowering developers to push the boundaries of what’s possible in blockchain technology. ",
      "🌟 Embrace the power of Polkadot at #ETHIndia2024! Build decentralized applications that can thrive across multiple chains. The future is multi-chain! 🌐",
    "🚀 Discover how Polkadot’s unique architecture enables seamless communication between blockchains. Join us at #ETHIndia2024 to learn more! 🔗 ",
    "💡 Polkadot’s shared security model means your DApp is protected by the entire network. Build with confidence at ",
    "🌈 Join the revolution! Polkadot empowers developers to create custom blockchains tailored to their needs. Let’s innovate together at ! 🛠️",
    "⚡️ Speed and efficiency are key! With Polkadot, experience faster transactions and a smoother user experience for your DApp. ",
    "🔗 Interoperability is the future! Learn how Polkadot connects different blockchains and enhances your DApp’s capabilities at ! 🌍",
    "🏗️ Building on Polkadot opens doors to endless possibilities! From DeFi to NFTs, let’s explore the potential at ",
    "🌍 Why choose Polkadot? Its governance model allows for community-driven development. Your input shapes the future of your DApp! 🗳️ ",
    "🛠️ Access a rich ecosystem of tools and resources with Polkadot. From Substrate to the Polkadot JS API, everything you need is here! ",
    "🎉 Ready to take your DApp to the next level? Polkadot offers scalability, security, and a vibrant community. Let’s build the future at "
    ];

    const getRandomText = () => {
      const randomIndex = Math.floor(Math.random() * textArray.length);
      return textArray[randomIndex];
    };
  
    const [randomText, setRandomText] = useState(getRandomText());
  
    const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(randomText)}&hashtags=PolkadotAtETHIndia%20%23Polkadot%20`;
  
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', // Ensure the container takes the full height of the viewport
        padding: '20px',
        boxSizing: 'border-box',
      },
      card: {
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        padding: '30px',
        boxSizing: 'border-box',
        margin: '0 auto', // Center the card horizontally
      },
      title: {
        marginBottom: '20px',
        fontSize: '24px',
        color: '#333',
      },
      textarea: {
        width: '100%',
        height: '120px',
        padding: '15px',
        fontSize: '14px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        outline: 'none',
        resize: 'none',
        overflow: 'hidden',
        lineHeight: '1.5',
        boxSizing: 'border-box',
      },
      button: {
        padding: '10px 20px',
        fontSize: '16px',
        margin: '5px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
      },
      tweetButton: {
        backgroundColor: '#7916F3',
        color: '#fff',
        marginBottom: '6px',
      },
      stepsContainer: {
        marginTop: '20px',
        textAlign: 'left',
      },
      step: {
        marginBottom: '10px',
      },
      link: {
        color: '#007bff',
        textDecoration: 'underline',
      },
    };
  
    return (
      <div style={styles.container}>
        <div style={styles.card}>
          <h1 style={styles.title}>Polkadot at ETHIndia 2024</h1>
          <div style={styles.stepsContainer}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>How to Participate:</h2>
            <ol>
              <li style={styles.step}>Step 1: Take a selfie</li>
              <li style={styles.step}>Step 2: Tweet This with your selfie.</li>
              <textarea
                value={randomText}
                readOnly
                style={styles.textarea}
                onFocus={(e) => e.target.style.borderColor = '#007bff'}
                onBlur={(e) => e.target.style.borderColor = '#ccc'}
              />
              <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                <button style={{ ...styles.button, ...styles.tweetButton }}>
                  Tweet This
                </button>
              </a>
              <li style={styles.step}>Step 3: <a href="https://forms.gle/nf26gUxGfz21CsAT7" style={styles.link}>Fill this form</a></li>
            </ol>
          </div>
        </div>
      </div>
    );
  };
  
  export default App;