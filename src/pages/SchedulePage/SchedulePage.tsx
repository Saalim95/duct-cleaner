import React from "react";
import { Page } from "@/components/_layout/Page";
import { DetailForm } from "@/components/DetailForm";

export const SchedulePage: React.FC = () => {
  return (
    <Page>
      <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div>
          {/* Header Section */}
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              Schedule Your Service
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Select a date and fill out your details to book an appointment.
              We'll get back to you with a personalized quote within 24 hours.
            </p>
            <div className="flex items-center justify-center gap-2 pt-2">
              <svg
                className="w-5 h-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm text-gray-500 font-medium">
                Free estimate • No obligation • Quick response
              </span>
            </div>
          </div>

          {/* Form Section */}
          <DetailForm />

          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              Need help? Contact us at{" "}
              <a
                href="tel:1-800-DUCT-CLEAN"
                className="text-blue-600 hover:text-blue-700 font-medium underline"
              >
                1-800-DUCT-CLEAN
              </a>
            </p>
          </div>
        </div>
      </main>
    </Page>
  );
};
