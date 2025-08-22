// src/components/InquiryForm.jsx
import React, { useState } from "react"
export default function InquiryForm() {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({
        name: "",
        furigana: "",
        email: "",
        phone: "",
        address: "",
        inquiryType: "",
        message: "",
        agree: false,
    })
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}
        if (!formData.name.trim()) newErrors.name = "Name is required"
        if (!formData.email.trim()) newErrors.email = "Email is required"
        else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) newErrors.email = "Invalid email"
        if (!formData.agree) newErrors.agree = "You must agree to the privacy policy"
        return newErrors
    }

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const nextStep = () => {
        if (step === 1) {
            const validationErrors = validate()
            setErrors(validationErrors)
            if (Object.keys(validationErrors).length > 0) return
        }
        setStep((prev) => prev + 1)
    }
    const prevStep = () => setStep((prev) => prev - 1)

    return (
        <main className="flex-grow max-w-4xl mx-auto px-6 py-12">
            {/* Step indicator */}
            <div className="flex items-center justify-between mb-10">
                {["Input", "Input confirmation screen", "Transmission completed"].map(
                    (label, index) => (
                        <div key={index} className="flex-1 flex items-center">
                            <div
                                className={`flex-1 py-3 px-6 text-center rounded-md font-medium 
                  ${step === index + 1
                                        ? "bg-orange-400 text-white"
                                        : "bg-gray-200 text-gray-600"
                                    }`}
                            >
                                {label}
                            </div>
                            {index < 2 && (
                                <div className="w-10 h-[2px] bg-gray-300 mx-2"></div>
                            )}
                        </div>
                    )
                )}
            </div>

            {/* Step 1: Input Form */}
            {step === 1 && (
                <form className="space-y-4" onSubmit={e => { e.preventDefault(); nextStep(); }}>
                    <div>
                        <label className="block text-sm font-medium">Name (Required)</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="Example: Yamada Taro"
                            required
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Furigana</label>
                        <input
                            type="text"
                            name="furigana"
                            value={formData.furigana}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="Example: Yamada Taro"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Email (Required)</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="xxx@example.com"
                            required
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="090-0000-0000"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="Example: Tokyo, Japan"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium">Inquiry Type</label>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="inquiryType"
                                    value="Estimate"
                                    checked={formData.inquiryType === "Estimate"}
                                    onChange={handleChange}
                                />
                                Free estimate and on-site survey
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="inquiryType"
                                    value="Cost"
                                    checked={formData.inquiryType === "Cost"}
                                    onChange={handleChange}
                                />
                                Cost consultation
                            </label>
                            <label className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="inquiryType"
                                    value="Other"
                                    checked={formData.inquiryType === "Other"}
                                    onChange={handleChange}
                                />
                                Others
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium">
                            Inquiry/Consultation Content
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border rounded-md p-2"
                            placeholder="Example: I would like to know more about the service."
                            rows="4"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={formData.agree}
                            onChange={handleChange}
                        />
                        {errors.agree && <p className="text-xs text-red-500 mt-1">{errors.agree}</p>}
                        <label>
                            I agree to the{" "}
                            <a href="#" className="text-blue-500 underline">
                                privacy policy
                            </a>
                        </label>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                            Next
                        </button>
                    </div>
                </form>
            )}

            {/* Step 2: Confirmation */}
            {step === 2 && (
                <div>
                    <h2 className="text-lg font-bold mb-4">Please confirm your input</h2>
                    <div className="space-y-2">
                        <p><span className="font-semibold">Name: </span>{formData.name}</p>
                        <p><span className="font-semibold">Furigana: </span>{formData.furigana}</p>
                        <p><span className="font-semibold">Email: </span>{formData.email}</p>
                        <p><span className="font-semibold">Phone: </span>{formData.phone}</p>
                        <p><span className="font-semibold">Address: </span>{formData.address}</p>
                        <p><span className="font-semibold">Inquiry Type: </span>{formData.inquiryType}</p>
                        <p><span className="font-semibold">Message: </span>{formData.message}</p>
                        <p><span className="font-semibold">Agreed to Policy: </span>{formData.agree ? "Yes" : "No"}</p>
                    </div>
                    <div className="flex justify-between mt-6">
                        <button
                            onClick={prevStep}
                            className="px-6 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                        >
                            Back
                        </button>
                        <button
                            onClick={() => setStep(3)}
                            className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
                        >
                            Confirm & Submit
                        </button>
                    </div>
                </div>
            )}

            {/* Step 3: Completed */}
            {step === 3 && (
                <div className="text-center py-20">
                    <h2 className="text-2xl font-bold text-green-600 mb-4">
                        Thank you for your inquiry!
                    </h2>
                    <p className="text-gray-700">
                        We have received your message and will get back to you soon.
                    </p>
                </div>
            )}
        </main>
    )
}