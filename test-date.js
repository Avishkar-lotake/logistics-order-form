// Simple test to verify date functionality
console.log("Testing date functionality...");

// Test 1: Check if initial state is correct
const initialDraft = {
  shipmentDate: ""
};

console.log("Initial shipmentDate:", initialDraft.shipmentDate);

// Test 2: Check if date update works
const newDate = "2026-03-18";
const updatedDraft = {
  ...initialDraft,
  shipmentDate: newDate
};

console.log("Updated shipmentDate:", updatedDraft.shipmentDate);

// Test 3: Check date formatting
function formatDisplayDate(dateString) {
  if (!dateString) return "";
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

console.log("Formatted date:", formatDisplayDate(newDate));
