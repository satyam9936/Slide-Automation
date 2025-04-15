"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";

function PricingFeature({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center">
      <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
      <span>{children}</span>
    </li>
  );
}

export default function Pricing() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50" id="pricing">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-2">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Choose the plan that's right for you and start building amazing
            AI-powered experiences.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl">Free Plan</CardTitle>
              <CardDescription>Perfect for getting started</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <PricingFeature>5 AI requests per day</PricingFeature>
                <PricingFeature>Basic text generation</PricingFeature>
                <PricingFeature>Standard response time</PricingFeature>
                <PricingFeature>Community support</PricingFeature>
                <PricingFeature>Basic analytics</PricingFeature>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full" variant="outline">
                <Link href="/signup">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Smart AI Plan */}
          <Card className="border-2 border-primary shadow-md hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
              Popular
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Smart AI</CardTitle>
              <CardDescription>For professionals and businesses</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-500 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <PricingFeature>Unlimited AI requests</PricingFeature>
                <PricingFeature>Advanced text & image generation</PricingFeature>
                <PricingFeature>Priority response time</PricingFeature>
                <PricingFeature>Dedicated support</PricingFeature>
                <PricingFeature>Advanced analytics dashboard</PricingFeature>
                <PricingFeature>Custom AI model fine-tuning</PricingFeature>
                <PricingFeature>API access</PricingFeature>
                <PricingFeature>White-label solutions</PricingFeature>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/signup?plan=smart-ai">Upgrade Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-500">
          <p>
            Need a custom plan for your enterprise?{" "}
            <Link href="/contact" className="text-primary font-medium">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
