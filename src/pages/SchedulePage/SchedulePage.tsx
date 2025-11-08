import React from "react";
import { Page } from "@/components/_layout/Page";
import { DetailForm } from "@/components/DetailForm";
import { Calendar } from "@/components/Calendar";

export const SchedulePage: React.FC = () => {
  return (
    <Page>
      <main className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Form Section - Side by Side Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Calendar />
            <DetailForm />
          </div>

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
