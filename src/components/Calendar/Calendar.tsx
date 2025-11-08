import React, { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { Card } from "@/components/_common/Card";
import dayjs, { Dayjs } from "dayjs";

interface TimeSlotCard {
  id: string;
  label: string;
  timeRange: string;
  available: boolean;
}

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Define two time slot cards
  const timeSlotCards: TimeSlotCard[] = [
    {
      id: "morning",
      label: "Morning",
      timeRange: "8:00 AM - 9:00 AM EST",
      available: true, // You can update this based on actual availability
    },
    {
      id: "afternoon",
      label: "Afternoon",
      timeRange: "11:00 AM - 1:00 PM EST",
      available: true, // You can update this based on actual availability
    },
  ];

  const handleDateChange = (newDate: Dayjs | null) => {
    setSelectedDate(newDate);
    setSelectedTimeSlot(null); // Reset time selection when date changes
  };

  const handleTimeSlotSelect = (slotId: string) => {
    setSelectedTimeSlot(slotId);
  };

  // Disable past dates and Sundays
  const shouldDisableDate = (date: Dayjs) => {
    const today = dayjs().startOf("day");
    return date.isBefore(today) || date.day() === 0; // 0 is Sunday
  };

  return (
    <div className="p-6">
      <Card>
        <div className="space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              Select a Date & Time
            </h3>
            <p className="text-sm text-gray-600">
              Choose your preferred appointment date and time slot
            </p>
          </div>

          {/* Time Slot Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {timeSlotCards.map((slot) => (
              <button
                key={slot.id}
                onClick={() => slot.available && handleTimeSlotSelect(slot.id)}
                disabled={!slot.available}
                className={`
                  p-3 rounded-lg text-left transition-all duration-200 border-2
                  ${
                    selectedTimeSlot === slot.id
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg"
                      : slot.available
                      ? "bg-white border-gray-300 text-gray-700 hover:border-blue-500 hover:bg-blue-50"
                      : "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200"
                  }
                `}
              >
                <div className="font-semibold text-base mb-0.5">
                  {slot.label}
                </div>
                <div
                  className={`text-xs ${
                    selectedTimeSlot === slot.id
                      ? "text-blue-100"
                      : "text-gray-600"
                  }`}
                >
                  {slot.timeRange}
                </div>
              </button>
            ))}
          </div>

          {/* Calendar */}
          <div className="flex justify-center">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateCalendar
                value={selectedDate}
                onChange={handleDateChange}
                shouldDisableDate={shouldDisableDate}
                sx={{
                  maxHeight: "320px",
                  "& .MuiPickersCalendarHeader-root": {
                    paddingTop: "8px",
                    paddingBottom: "8px",
                    marginTop: 0,
                    marginBottom: "4px",
                  },
                  "& .MuiDayCalendar-header": {
                    paddingTop: "4px",
                    paddingBottom: "4px",
                  },
                  "& .MuiPickersDay-root": {
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    margin: "2px",
                  },
                  "& .MuiPickersDay-root.Mui-selected": {
                    backgroundColor: "#2563eb",
                    "&:hover": {
                      backgroundColor: "#1d4ed8",
                    },
                  },
                  "& .MuiDayCalendar-weekContainer": {
                    margin: "2px 0",
                  },
                }}
              />
            </LocalizationProvider>
          </div>

          {/* Selected Appointment Summary */}
          {selectedDate && selectedTimeSlot && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <div className="flex items-start gap-2">
                <svg
                  className="w-4 h-4 text-blue-600 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                <div>
                  <p className="font-semibold text-blue-900 text-sm">
                    Selected Appointment
                  </p>
                  <p className="text-xs text-blue-700 mt-0.5">
                    {selectedDate.format("dddd, MMMM D, YYYY")} at{" "}
                    {
                      timeSlotCards.find((slot) => slot.id === selectedTimeSlot)
                        ?.timeRange
                    }
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};
