import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import { motion } from 'framer-motion';

export default function Form9() {
  const { userData, setUserData } = useContext(StepperContext);

  const clickChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const buttonOptions = [
    { value: "Significance/Purpose", label: "Lack of Purpose" },
    { value: "Personal/Finances", label: "Personal / Financial Loss" },
    { value: "Relationship Struggles", label: "Relationship Struggles" },
    { value: "Overwhelmed", label: "Overwhelmed" },
    { value: "Physical-Challenge", label: "Physical Challenges" },
    { value: "Sadness", label: "Sadness" },
    { value: "Anger", label: "Anger" },
    { value: "Substance-Abuse", label: "Substance Abuse" },
  ];

  const btnClassName = "option-button";

  return (
    <div className="form-container">
      <div className="form-box">
        <motion.div
          className="form-content"
          animate="visible"
          initial="hidden"
          variants={container}
        >
          <motion.p variants={item} className="question-text">
            Click On The Issue That Concerns <b className='text-pmmGrit'>YOU</b> The <b className='text-pmmGrit'>MOST</b>. 
          </motion.p>
          <motion.div
            variants={container}
            className="button-container"
          >
            {buttonOptions.map((goal, index) => (
              <motion.button
                key={index}
                variants={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={clickChange}
                value={goal.value}
                name="stressor"
                className="option-button"
              >
                {goal.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
