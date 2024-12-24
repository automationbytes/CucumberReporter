const path = require("path");
const fs = require("fs");

// Define the path to the required module with .js extension
const generateReportPath = path.resolve(__dirname, "cucumberjs-playwright-reporter/lib/generate-report.js");

// Log the resolved path to verify
console.log("Resolved Generate Report Path:", generateReportPath);

// Check if the required file exists
if (fs.existsSync(generateReportPath)) {
    console.log("Module found.");
    
    // Require the module after confirming it exists
    const generateReport = require(generateReportPath);

    // Call the report generation function
    generateReport.generate({
        jsonDir: "test-results",
        reportPath: "test-results/reports/",
        reportName: "Playwright Automation Report",
        pageTitle: "BookCart App test report",
        displayDuration: false,
        metadata: {
            browser: {
                name: "chrome",
                version: "112",
            },
            device: "Koushik - PC",
            platform: {
                name: "Windows",
                version: "10",
            },
        },
        customData: {
            title: "Test Info",
            data: [
                { label: "Project", value: "Book Cart Application" },
                { label: "Release", value: "1.2.3" },
                { label: "Cycle", value: "Smoke-1" }
            ],
        },
    });
} else {
    console.error(`Required module not found at: ${generateReportPath}`);
}
