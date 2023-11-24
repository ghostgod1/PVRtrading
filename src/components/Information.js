import "./Information.css";
import InformationData from "../components/InformationData.js";
const Information = () => {
	return(
		<div className="info">
	
			<InformationData 
			className="first-des"
			heading="What to Expect"
			text="At PVR, we pride ourselves on 
			offering comprehensive and accessible financial 
			education, particularly in stock market analysis, 
			investment strategies, and diverse financial 
			instruments. Our seasoned experts bring decades of
			 experience, delivering hands-on workshops, 
			 seminars, and personalized mentoring sessions. 
			 Through our tailored programs, we demystify the
			  complexities of stock markets, imparting practical 
			  owledge on fundamental analysis, technical indicators
			  and risk management. We guide individuals 
			  step-by-step, cultivating a deep understanding of 
			  investment methodologies, portfolio diversification,
			  and asset allocation. "
			/>

			<InformationData 
			className="first-des-reverse"
			heading="Benefits for you"
			text="Our seasoned experts bring decades of
			 experience, delivering hands-on workshops, 
			 seminars, and personalized mentoring sessions. 
			 Through our tailored programs, we demystify the
			  complexities of stock markets, imparting practical 
			  owledge on fundamental analysis, technical indicators
			  and risk management. We guide individuals 
			  step-by-step, cultivating a deep understanding of 
			  investment methodologies, portfolio diversification,
			  and asset allocation. "
			/>
		</div>
	);
}

export default Information;