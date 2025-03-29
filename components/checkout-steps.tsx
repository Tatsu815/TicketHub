interface CheckoutStepsProps {
  currentStep: number
}

export default function CheckoutSteps({ currentStep }: CheckoutStepsProps) {
  const steps = [
    { id: 1, label: "Chọn vé" },
    { id: 2, label: "Thông tin đăng ký" },
    { id: 3, label: "Thanh toán" },
    { id: 4, label: "Hoàn tất" },
  ]

  return (
    <div className="space-y-2">
      {steps.map((step) => (
        <div
          key={step.id}
          className={`flex items-center p-3 rounded-lg ${
            currentStep === step.id ? "bg-[#6b4f4f] text-white" : "bg-gray-200 text-gray-500"
          }`}
        >
          <div
            className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${
              currentStep === step.id ? "bg-white text-[#6b4f4f]" : "bg-gray-300 text-gray-500"
            }`}
          >
            {step.id}
          </div>
          <span className={currentStep === step.id ? "font-medium" : ""}>{step.label}</span>
        </div>
      ))}
    </div>
  )
}

