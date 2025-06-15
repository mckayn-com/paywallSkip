"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function AdvertisePage() {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "sixmonths" | "yearly">("monthly")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/advertise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          plan: selectedPlan,
        }),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      toast.success("Got it! we&apos;ll email you back soon.")
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
      })
    } catch (error) {
      toast.error("something went wrong. try again?")
    } finally {
      setIsSubmitting(false)
    }
  }

  const pricingPlans = {
    monthly: {
      price: 99,
      period: "month",
      duration: "monthly",
      popular: false,
    },
    sixmonths: {
      price: 449,
      period: "6 months",
      duration: "six months",
      popular: true,
    },
    yearly: {
      price: 799,
      period: "year",
      duration: "yearly",
      popular: false,
    },
  }

  return (
    <div className="min-h-screen bg-white font-mono">
      <div className="container max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="inline-block border-2 border-dashed border-gray-400 bg-gray-50 px-4 py-2 mb-6">
            <span className="text-gray-700 text-sm">20,000+ monthly users</span>
          </div>


          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            reach developers, designers, and tech folks who actually care about good products
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8 mb-16 text-center">
          <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-6">
            <div className="text-2xl font-bold text-black">20k</div>
            <div className="text-gray-600 text-sm">monthly users</div>
          </div>
          <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-6">
            <div className="text-2xl font-bold text-black">85%</div>
            <div className="text-gray-600 text-sm">tech audience</div>
          </div>
          <div className="border-2 border-dashed border-gray-300 bg-gray-50 p-6">
            <div className="text-2xl font-bold text-black">2.3min</div>
            <div className="text-gray-600 text-sm">avg session</div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-black">pick your plan</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(pricingPlans).map(([key, plan]) => (
              <div
                key={key}
                className={`border-2 border-dashed cursor-pointer transition-all p-6 ${
                  selectedPlan === key
                    ? "border-black bg-black text-white"
                    : plan.popular
                      ? "border-gray-500 bg-gray-100 hover:bg-gray-200"
                      : "border-gray-300 bg-white hover:border-gray-400"
                }`}
                onClick={() => setSelectedPlan(key as "monthly" | "sixmonths" | "yearly")}
              >
                {plan.popular && (
                  <div className="text-gray-600 text-xs mb-2 font-bold">popular</div>
                )}

                <div className="text-xl font-bold mb-2">{plan.duration}</div>
                <div className="text-3xl font-bold mb-1">${plan.price}</div>
                <div className="text-sm opacity-70">per {plan.period}</div>

                <div className="mt-4 pt-4 border-t border-dashed border-current opacity-50">
                  <div className="text-xs">
                    • banner placement
                    <br />• mobile optimized
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-2 border-dashed border-gray-400 p-8 bg-gray-50">
          <h3 className="text-xl font-bold mb-6 text-black">let&apos;s talk</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-black font-bold text-sm mb-2 block">
                  name *
                </Label>
                <Input
                  id="name"
                  placeholder="your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="border-2 border-dashed border-gray-300 bg-white font-mono focus:border-black focus:ring-0 h-12"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-black font-bold text-sm mb-2 block">
                  email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-2 border-dashed border-gray-300 bg-white font-mono focus:border-black focus:ring-0 h-12"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="company" className="text-black font-bold text-sm mb-2 block">
                company *
              </Label>
              <Input
                id="company"
                placeholder="your company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                required
                className="border-2 border-dashed border-gray-300 bg-white font-mono focus:border-black focus:ring-0 h-12"
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-black font-bold text-sm mb-2 block">
                what do you want to advertise? *
              </Label>
              <Textarea
                id="message"
                placeholder="tell us about your product, service, or whatever you want to promote..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="border-2 border-dashed border-gray-300 bg-white font-mono focus:border-black focus:ring-0 min-h-[100px] resize-none"
              />
            </div>

            <div className="border-2 border-dashed border-gray-400 bg-white p-4">
              <div className="text-gray-700 text-sm">
                <strong>selected:</strong> {pricingPlans[selectedPlan].duration} plan
                <br />
                <strong>cost:</strong> ${pricingPlans[selectedPlan].price} per {pricingPlans[selectedPlan].period}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full h-12 bg-black text-white border-2 border-dashed border-black hover:bg-white hover:text-black font-mono font-bold transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "sending..." : "send inquiry →"}
            </Button>
          </form>
        </div>

        {/* Footer note */}
        <div className="text-center mt-12">
          <div className="inline-block border-2 border-dashed border-gray-400 bg-gray-50 px-4 py-2">
            <span className="text-gray-600 text-sm">we&apos;ll get back to you within 24 hours</span>
          </div>
        </div>
      </div>
    </div>
  )
}
