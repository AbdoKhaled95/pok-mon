import "./CustomStepper.scss";

type Props = {
  className?: string;
  steps: number;
  currentStep: number;
  onStepClick?: (step: number) => void;
};

const CustomStepper = ({
  className,
  steps,
  currentStep,
  onStepClick,
}: Props) => {
  const stepsArray = Array.from({ length: steps }, (_, index) => index + 1);
  const lastStep = stepsArray.length;
  const isFirstStep = (step: number) => step === 1;
  const isMiddleStep = (step: number) => step !== 1 && step !== lastStep;
  const isCenterStep = (step: number) => {
    const mid = steps / 2;
    if (steps % 2 === 0) return step === mid || step === mid + 1;
    return step === Math.ceil(mid);
  };
  const isLastStep = (step: number) => step === lastStep;
  const isCurrentStep = (step: number) => step === currentStep;
  const isCompletedStep = (step: number) => step < currentStep;
  const isNotCompletedStep = (step: number) => step > currentStep;
  const getStepStatus = (step: number) => {
    if (isCompletedStep(step)) return "completed";
    if (isCurrentStep(step)) return "active";
    if (isNotCompletedStep(step)) return "pending";
    return "pending";
  };
  const nextStep = currentStep + 1;
  const prevStep = currentStep - 1;
  const nextSteps = stepsArray.filter((step) => step > currentStep);
  const prevSteps = stepsArray.filter((step) => step < currentStep);
  const canClickStep = (step: number) => step <= currentStep;
  const progress = ((currentStep - 1) / (steps - 1)) * 100;
  return (
    <div className={`custom_stepper ${className ?? ""}`}>
      <div className="custom_stepper-steps">
        {stepsArray.map((step) => (
          <div
            key={step}
            className={`custom_stepper-steps--step
            ${isFirstStep(step) ? "firstStep" : ""}
            ${isLastStep(step) ? "lastStep" : ""}
            ${getStepStatus(step)}Step
          `}
            onClick={() => onStepClick?.(step)}
            role={onStepClick ? "button" : undefined}
            tabIndex={onStepClick ? 0 : undefined}
            onKeyDown={(e) => {
              if (!onStepClick) return;
              if (e.key === "Enter" || e.key === " ") {
                onStepClick(step);
              }
            }}
          >
            <div className="custom_stepper-steps--step---info">
              <div className="custom_stepper-steps--step---info----label">
                <span className="custom_stepper-steps--step---info----label-----number">
                  {isCompletedStep(step) ? "✓" : step}
                </span>
              </div>
              <p className="custom_stepper-steps--step---info----description">
                Step {step}
              </p>
            </div>
            {!isLastStep(step) && (
              <div
                className={`custom_stepper-steps--step---line ${getStepStatus(step)}Line`}
              />
            )}
          </div>
        ))}
      </div>
      <div className="custom_stepper-progress">
        <div
          className="custom_stepper-progress--bar"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default CustomStepper;
