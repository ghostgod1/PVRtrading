import './Test.css';
import TestData from './TestData.js';
import test1 from "../images/b.jpeg";
import test2 from "../images/b.jpeg";

function Test(){
	return(
		<div className="test">
			<h1>Testimonials</h1>
			<p>See what are clients say</p>
			<div className="card">
				<TestData 
				image={test1}
				heading="Lorem Ipsum"
				text="Through our tailored programs, we demystify the
			  complexities of stock markets, imparting practical 
			  owledge on fundamental analysis, technical indicators
			  and risk management. We guide individuals 
			  step-by-step, cultivating a deep understanding of 
			  investment methodologies, portfolio diversification,
			  and asset allocation."
				/>
				<TestData 
				image={test2}
				heading="Lorem Ipsum"
				text="Through our tailored programs, we demystify the
			  complexities of stock markets, imparting practical 
			  owledge on fundamental analysis, technical indicators
			  and risk management. We guide individuals 
			  step-by-step, cultivating a deep understanding of 
			  investment methodologies, portfolio diversification,
			  and asset allocation."
				/>
			</div>
		</div>
	);
}


export default Test;