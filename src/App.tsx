import "./i18n";
import { AppRouter } from "@routes/AppRouter";
import "./App.scss";
import LazyMotionProvider from "@libraries/framerMotion/lazyMotionProvider/LazyMotionProvider";
import CustomStepper from "@modules/pokemon/components/customStepper/CustomStepper";
import { useState } from "react";
const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const handleStepClick = (step: number) => setCurrentStep(step);
  const handleNextStep = () => setCurrentStep(currentStep + 1);
  const handlePreviousStep = () => setCurrentStep(currentStep - 1);
  return (
    <LazyMotionProvider>
      {/* <AppRouter /> */}
      <div style={{ margin: 32 }}>
        <CustomStepper
          steps={5}
          currentStep={currentStep}
          onStepClick={handleStepClick}
        />
      </div>
      <button onClick={handleNextStep}>Next</button>
      <button onClick={handlePreviousStep}>Previous</button>
    </LazyMotionProvider>
  );
};

export default App;
