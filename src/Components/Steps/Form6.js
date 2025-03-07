import React, { useContext } from 'react';
import { StepperContext } from '../../contexts/StepperContext';
import { motion } from 'framer-motion';

export default function Form6() {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const clickChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Framer Motion animations
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

  return (
    <div className="form-container">
      <div className="form-box">
        <motion.div
          variants={container}
          animate="visible"
          initial="hidden"
          className="form-content"
        >
          <motion.p className='question-text' variants={item}>
            When You Talk To People About <b className='text-pmmGrit'>YOUR</b> Feelings, How Does The Conversation Usually Go?
          </motion.p>

          <motion.div variants={container} className="button-container">
            {[
              { value: 'Productive', label: 'They end very productive.' },
              { value: 'Unproductive', label: 'They usually end in frustration.' },
              { value: 'Rarely', label: 'I rarely talk about my feelings.' },
              { value: 'Non-Verbal', label: 'I don’t talk about my feelings.' },
            ].map((option, index) => (
              <motion.button
                key={index}
                variants={item}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={clickChange}
                value={option.value}
                name="feeling_convo"
                className="feeling-button"
              >
                {option.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
