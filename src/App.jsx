import React, { useState } from 'react'
import polkadotLogo from './assets/polkadot-logo.svg'
// import viteLogo from '/vite.svg'
import './App.css'


const App = () => {
  const textArray = [
      "🚀 Excited to be at #IITB! Why Polkadot? Its unique parachain architecture allows for seamless interoperability and scalability. Build once, deploy everywhere! ",
      "💡 Did you know? Polkadot’s shared security model means your DApp benefits from the security of the entire network. Build with confidence! 🔒 ",
      "🌟 At IIT Bombay, @Edgetributors showcasing how Polkadot empowers developers with its flexible framework. Create custom blockchains tailored to your DApp’s needs! ",
      "🔗 Interoperability is key! With Polkadot, your DApp can communicate with multiple blockchains effortlessly. Say goodbye to silos! 🌍",
      "🛠️ Building on Polkadot means access to a rich ecosystem of tools and resources. From Substrate to the Polkadot JS API, everything you need is at your fingertips! ",
      "🌈 Why choose Polkadot? Its governance model allows for community-driven development. Your voice matters in shaping the future of your DApp! 🗳️ ",
      "⚡️ Speed matters! Polkadot’s parallel processing capabilities mean faster transactions and a better user experience for your DApp. Let’s build the future together! ",
      "🌍 Join us at #IITB to explore how Polkadot’s cross-chain capabilities can unlock new possibilities for your DApp. The future is interconnected! 🔗 ",
      "🏗️ Building on Polkadot is like having a toolbox full of possibilities! From DeFi to NFTs, the potential for innovation is limitless. Let’s create something amazing! ",
      "🎉 Ready to embrace the future? Polkadot is the best network for DApp development, offering scalability, security, and community. Let’s make waves at",
      "🌟 Embrace the future with Polkadot! Join us in building a decentralized web where every blockchain can communicate. ",
      "🚀 Unlock the potential of cross-chain interactions! Discover how Polkadot is revolutionizing the blockchain landscape. ",
      "💬 Join the conversation on governance in blockchain! Polkadot’s model empowers users to shape the ecosystem. ",
      "🔍 Explore the benefits of building on Polkadot! From scalability to security, your DApp can thrive in a multi-chain world. ",
      "🌐 Connect with Polkadot developers and innovators at #IITB! Let’s collaborate to create the next big thing in blockchain. ",
      "📈 The future of finance is here! Learn how Polkadot is enabling DeFi projects to flourish across multiple chains. ",
      "🛡️ Security is paramount! Discover how Polkadot’s shared security model protects your projects and investments. ",
     "🎨 Create unique user experiences with Polkadot! Leverage its capabilities to build engaging and interactive DApps. ",
      "🌍 Join us in shaping the future of the internet! Polkadot is at the forefront of the Web3 movement. Be part of it at !",
      "🎉 Let’s celebrate innovation! Polkadot is empowering developers to push the boundaries of what’s possible in blockchain technology. ",
      "🌟 Embrace the power of Polkadot at #IITB! Build decentralized applications that can thrive across multiple chains. The future is multi-chain! 🌐",
    "🚀 Discover how Polkadot’s unique architecture enables seamless communication between blockchains. Join us at #IITB to learn more! 🔗 ",
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
  
    const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(randomText)}&hashtags=PolkadotAtIITB%20%23Polkadot%20`;
  
    const styles = {
      container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      },
      card: {
        textAlign: 'center',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '600px',
        width: '100%',
        padding: '30px',
        boxSizing: 'border-box',
        margin: '0 auto',
      },
      title: {
      marginBottom: "20px",
      fontSize: "24px",
      fontWeight: "bold",
    },
      textarea: {
        width: '100%',
        height: '120px',
        padding: '15px',
        fontSize: '14px',
        marginBottom: '10px',
        border: '1px solid #ccc',
        borderRadius: '4px',
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
        backgroundColor: '#FF2670',
        color: '#fff',
        marginBottom: '6px',
      },
      stepsContainer: {
        marginTop: '20px',
        textAlign: 'left',
        border: "2px solid #E4FF07",
        borderRadius: "10px",
        padding: "30px", 
        boxSizing: "border-box",
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
<div style={{ textAlign: 'center', marginBottom: '20px' }}>
  <img 
    src={polkadotLogo} 
    alt="Polkadot Logo" 
    style={{ maxWidth: '150px', height: 'auto' }}
  />
</div>
    <h1 className='animated-title' style={styles.title}>Polkadot x IIT Bombay 2025</h1>
          <div style={styles.stepsContainer}>
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>How to Participate:</h2>
            <ol>
              <li style={styles.step}>Step 1: <a 
    href="https://drive.google.com/drive/folders/1UPYmnFzyXTbNRnPE9MmjyW3c_HEsTrRP" 
    target="_blank" 
    rel="noopener noreferrer" 
    style={styles.link}
  >
    Grab your #IITB Moment here </a>📸</li>
              <li style={styles.step}>Step 2: Tweet This with your Selected #IITB Moment 📸.</li>
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
              <li style={styles.step}>Step 3: <a href="https://forms.gle/4ZjagzCAZxtKcrgH9" style={styles.link}>Fill this form</a></li>
            </ol>
          </div>
        </div>
      </div>
    );
  };
  
  export default App;
