import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";

export function Home() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBmiCategory] = useState('');
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [hoverPosition, setHoverPosition] = useState(null);
  const [showPrediction, setShowPrediction] = useState(false);

  const handleHoverPosition = (position) => {
    setHoverPosition(position);
  };

  const resetHoverPosition = () => {
    setHoverPosition(null);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    agree: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: null, message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.agree) {
      setSubmitStatus({ success: false, message: 'Please agree to the Terms and Conditions' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ success: null, message: 'Sending your message...' });
    
    try {
      // Check if EmailJS credentials are set
      if (process.env.REACT_APP_EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' ||
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        throw new Error('EmailJS credentials are not configured. Please set up your EmailJS account first.');
      }

      const { sendEmail } = await import('../services/emailService');
      const response = await sendEmail(formData);
      
      if (response && (response.status === 200 || response.status === '200')) {
        setSubmitStatus({ 
          success: true, 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: '',
          agree: false
        });
      } else {
        throw new Error('Failed to send email. Please check your network connection and try again.');
      }
    } catch (error) {
      console.error('Error in form submission:', error);
      
      let errorMessage = 'Failed to send message. Please try again later.';
      
      if (error.message.includes('credentials')) {
        errorMessage = 'Email service is not properly configured. Please contact support.';
      } else if (error.message.includes('network')) {
        errorMessage = 'Network error. Please check your internet connection.';
      }
      
      setSubmitStatus({ 
        success: false, 
        message: errorMessage
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateBmi = (e) => {
    e.preventDefault();
    if (!weight || !height) return;
    
    // Convert height from cm to meters
    const heightInMeters = height / 100;
    // Calculate BMI
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);
    
    // Determine BMI category and indicator position
    let category = '';
    let position = 0;
    
    if (bmiValue < 18.5) {
      category = 'Underweight';
      position = 12.5; // 1/8 of the scale
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      category = 'Healthy weight';
      position = 37.5; // 3/8 of the scale
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      category = 'Overweight';
      position = 62.5; // 5/8 of the scale
    } else {
      category = 'Obese';
      position = 87.5; // 7/8 of the scale
    }
    
    setBmiCategory(category);
    setIndicatorPosition(position);
  };
  // Add keyframes for pulse animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes pulse {
      0% { opacity: 0.7; transform: translateX(-50%) scale(1); }
      50% { opacity: 1; transform: translateX(-50%) scale(1.1); }
      100% { opacity: 0.7; transform: translateX(-50%) scale(1); }
    }
  `;
  document.head.appendChild(style);

  return (
    <>
      <div className="relative flex h-screen content-center items-center justify-left pt-16 pb-32 bg-white">
        <div className="absolute top-0 h-full w-full bg-white bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full px-4 lg:w-1/2 lg:pr-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 text-left">Body Mass Index</h1>
              <p className="mt-6 text-gray-600 max-w-prose text-left">Better understand your weight in relation to your height using our body mass index (BM) calculator. While BMI is not the sole determinant of a healthy weight, it offers a valuable starting point to evaluate your overall health and well-being.</p>
              <div class="mt-12"><button class="inline-flex items-center rounded-full bg-red-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2" fdprocessedid="bcjscg">Calculate</button></div>
            </div>
            
            <div className="w-full mt-8 lg:mt-0 lg:w-1/2 px-4 flex justify-center">
              <img src="/img/bmi.png" alt="BMI Chart" className="max-w-full h-auto rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map(({ color, title, icon, description }) => (
              <FeatureCard
                key={title}
                color={color}
                title={title}
                icon={React.createElement(icon, {
                  className: "w-5 h-5 text-white",
                })}
                description={description}
              />
            ))}
          </div>
          <div className="mt-32 flex flex-wrap items-center">
            <div className="mx-auto -mt-8 w-full px-4 md:w-5/12">
              <Typography
                variant="h3"
                className="mb-3 font-bold"
                color="blue-gray"
              >
                What your BMI result means
              </Typography>
              <Typography className="mb-8 font-normal text-blue-gray-500">
                A BMI range of 18.5 to 24.9 is considered a 'healthy weight.' Maintaining a healthy weight may lower your chances of experiencing health issues later on, such as obesity and type 2 diabetes. Aim for a nutritious diet with reduced fat and sugar content, incorporating ample fruits and vegetables. Additionally, strive for regular physical activity, ideally about 30 minutes daily for five days a week.
              </Typography>
              <Button variant="filled">Calculate</Button>
            </div>
            <div className="mx-auto mt-24 w-full px-4 md:w-6/12 lg:mt-0">
              <Card className="shadow-lg border shadow-gray-500/10 rounded-lg">
                <CardHeader floated={false} className="bg-white shadow-none">
                </CardHeader>
                <CardBody className="px-0 pt-0">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="py-3 px-4">Category</th>
                          <th className="py-3 px-4 whitespace-nowrap">BMI Range (kg/m²)</th>
                          <th className="py-3 px-4">Recommendation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Underweight</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-800">
                              &lt; 18.5
                            </span>
                          </td>
                          <td className="py-3 px-4">Strength training (weightlifting, resistance exercises) to build muscle.</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Healthy Weight</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                              18.5 - 24.9
                            </span>
                          </td>
                          <td className="py-3 px-4">150+ minutes of moderate aerobic activity (walking, swimming) weekly.</td>
                        </tr>
                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Overweight</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                              25.0 - 29.9
                            </span>
                          </td>
                          <td className="py-3 px-4">Increase activity (brisk walking, cycling) to 200+ minutes/week.</td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="py-3 px-4 font-medium">Obese</td>
                          <td className="py-3 px-4">
                            <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                              ≥ 30.0
                            </span>
                          </td>
                          <td className="py-3 px-4">Aim for 300+ minutes of moderate exercise weekly.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          <PageTitle heading="Calculate BMI Value" />
          <div className="mt-12 flex flex-col lg:flex-row gap-12">
            {/* Left Side - Input Form */}
            <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your weight"
                    min="0"
                    step="0.1"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Enter your height"
                    min="0"
                    step="0.1"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </div>
                <button 
                  onClick={calculateBmi}
                  onMouseEnter={() => setShowPrediction(true)}
                  onMouseLeave={() => setShowPrediction(false)}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 relative group"
                >
                  Calculate BMI
                </button>
              </div>
            </div>

            {/* Right Side - BMI Meter */}
            <div className="w-full lg:w-1/2 bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-center">
              <div className="w-full max-w-md">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800">Your BMI</h3>
                  <p className="text-gray-600">
                    {bmi ? (
                      <span>Your BMI suggests you're <span className="font-semibold">{bmiCategory}</span></span>
                    ) : (
                      'Enter your details to see your BMI'
                    )}
                  </p>
                </div>
                
                {/* BMI Scale */}
                <div 
                  className="relative h-10 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 rounded-full overflow-hidden mb-6 cursor-pointer"
                  onMouseLeave={resetHoverPosition}
                >
                  <div 
                    className="absolute top-0 left-0 h-full w-1/4 bg-blue-400 hover:bg-blue-500 transition-colors"
                    onMouseEnter={() => handleHoverPosition(12.5)}
                  ></div>
                  <div 
                    className="absolute top-0 left-1/4 h-full w-1/4 bg-green-400 hover:bg-green-500 transition-colors"
                    onMouseEnter={() => handleHoverPosition(37.5)}
                  ></div>
                  <div 
                    className="absolute top-0 left-2/4 h-full w-1/4 bg-yellow-400 hover:bg-yellow-500 transition-colors"
                    onMouseEnter={() => handleHoverPosition(62.5)}
                  ></div>
                  <div 
                    className="absolute top-0 left-3/4 h-full w-1/4 bg-red-400 hover:bg-red-500 transition-colors"
                    onMouseEnter={() => handleHoverPosition(87.5)}
                  ></div>
                  
                  {/* Range Markers */}
                  <div className="absolute top-0 left-1/4 h-full w-px bg-white/50"></div>
                  <div className="absolute top-0 left-1/2 h-full w-px bg-white/50"></div>
                  <div className="absolute top-0 left-3/4 h-full w-px bg-white/50"></div>
                  
                  {/* BMI Indicator */}
                  {/* BMI Indicator */}
                  <div 
                    className={`absolute -bottom-8 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent transition-all duration-300 ${
                      showPrediction ? 'border-t-gray-400' : 'border-t-red-600'
                    }`}
                    style={{ 
                      left: `${hoverPosition !== null ? hoverPosition : indicatorPosition}%`,
                      zIndex: 10
                    }}
                  ></div>
                  
                  {/* Prediction Arrow */}
                  {showPrediction && (
                    <div 
                      className="absolute -bottom-8 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-blue-600 transition-all duration-300"
                      style={{ 
                        left: '75%',
                        animation: 'pulse 2s infinite'
                      }}
                    >
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-blue-600 text-xs font-bold whitespace-nowrap">
                        Your Prediction
                      </div>
                    </div>
                  )}
                  {bmi && (
                    <div 
                      className="absolute -top-10 transform -translate-x-1/2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded whitespace-nowrap transition-all duration-300"
                      style={{ 
                        left: `${hoverPosition !== null ? hoverPosition : indicatorPosition}%`,
                        opacity: hoverPosition !== null ? 1 : 1
                      }}
                    >
                      {hoverPosition === 12.5 ? '< 18.5' : 
                       hoverPosition === 37.5 ? '18.5 - 24.9' : 
                       hoverPosition === 62.5 ? '25.0 - 29.9' : 
                       hoverPosition === 87.5 ? '≥ 30.0' : 
                       `${bmi} kg/m²`}
                    </div>
                  )}
                </div>
                
                {/* BMI Range Labels with Values */}
                <div className="mt-2">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span className="text-center w-1/4">Underweight</span>
                    <span className="text-center w-1/4">Healthy</span>
                    <span className="text-center w-1/4">Overweight</span>
                    <span className="text-center w-1/4">Obese</span>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span className="text-center w-1/4">&lt; 18.5</span>
                    <span className="text-center w-1/4">18.5 - 24.9</span>
                    <span className="text-center w-1/4">25.0 - 29.9</span>
                    <span className="text-center w-1/4">≥ 30.0</span>
                  </div>
                </div>
                
                {/* BMI Value */}
                <div className="mt-8 text-center">
                  <div className="text-5xl font-bold text-gray-800">
                    {bmi || '--'}
                  </div>
                  <p className="text-gray-500 mt-2">kg/m<sup>2</sup></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle heading="Limitations of BMI">
           Although BMI is often a practical indicator of healthy weight, it is not suited for every person. Specific groups should carefully consider their BMI outcomes, and in certain cases, the measurement may not be beneficial to use.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
          <PageTitle heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form onSubmit={handleSubmit} className="mx-auto w-full mt-12 lg:w-5/12">
            {submitStatus.message && (
              <div 
                className={`mb-6 p-4 rounded-lg ${
                  submitStatus.success 
                    ? 'bg-green-100 text-green-700 border border-green-300' 
                    : 'bg-red-100 text-red-700 border border-red-300'
                }`}
              >
                {submitStatus.message}
              </div>
            )}
            <div className="mb-8 flex gap-8">
              <Input 
                variant="outlined" 
                size="lg" 
                label="Full Name" 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
              <Input 
                variant="outlined" 
                size="lg" 
                label="Email Address" 
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <Textarea 
              variant="outlined" 
              size="lg" 
              label="Message" 
              rows={8} 
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <Checkbox
              checked={formData.agree}
              onChange={(e) => setFormData({...formData, agree: e.target.checked})}
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
              required
            />
            <Button 
              type="submit" 
              variant="gradient" 
              size="lg" 
              className="mt-8" 
              fullWidth
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </section>
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;
