import styles from './robot.module.css';
import Header from '../Header';
import Footer from '../footer';
function robot() {
  return (
    <>
    <Header/>
    <div className={styles.container}>
     <iframe src='https://my.spline.design/nexbotrobotcharacterconcept-6bWnyRtYFocb1bOPsJO3Lk8G/' frameborder='0' width='100%' height='100%'></iframe>
     <div className={styles.watermarkCover}></div>
     <h1
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white"
        }}
      >
       WELCOME TO GROWBRIDGE
      </h1>
    
    </div>
    <div className={styles.textContainer}>
      <h2>Meet Nexbot, the AI-powered chatbot designed to revolutionize your customer support experience. With its advanced natural language processing capabilities, Nexbot can understand and respond to customer inquiries in real-time, providing accurate and helpful information. Whether it's answering frequently asked questions, assisting with product recommendations, or resolving issues, Nexbot is here to enhance your customer service and ensure a seamless experience for your users.</h2>
    </div>
    <Footer/>
    </>
  )
}
export default robot;