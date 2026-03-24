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
    <Footer/>
    </>
  )
}
export default robot;